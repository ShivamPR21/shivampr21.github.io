const fields = document.querySelectorAll<HTMLElement>('[data-policy-field]');

for (const root of fields) {
  const canvas = root.querySelector('canvas');
  const status = root.querySelector<HTMLElement>('.field-status');
  if (!canvas || !status) continue;
  const fieldCanvas = canvas;
  const fieldStatus = status;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
  let visible = true;
  let stopped = false;

  root.addEventListener('pointermove', (event) => {
    const rect = root.getBoundingClientRect();
    pointer.tx = (event.clientX - rect.left) / rect.width;
    pointer.ty = 1 - (event.clientY - rect.top) / rect.height;
  }, { passive: true });

  root.addEventListener('pointerleave', () => {
    pointer.tx = 0.5;
    pointer.ty = 0.5;
  });

  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
  }, { rootMargin: '120px' }).observe(root);

  document.addEventListener('visibilitychange', () => {
    visible = !document.hidden;
  });

  const fit = () => {
    const rect = fieldCanvas.getBoundingClientRect();
    const cap = innerWidth < 720 ? 1.25 : 1.75;
    const dpr = Math.min(devicePixelRatio || 1, cap);
    fieldCanvas.width = Math.max(1, Math.floor(rect.width * dpr));
    fieldCanvas.height = Math.max(1, Math.floor(rect.height * dpr));
  };

  const shader = /* wgsl */ `
    struct Uniforms {
      resolution: vec2f,
      time: f32,
      motion: f32,
      pointer: vec2f,
      intensity: f32,
      pad: f32,
    }
    @group(0) @binding(0) var<uniform> u: Uniforms;

    struct Output {
      @builtin(position) position: vec4f,
      @location(0) local: vec2f,
      @location(1) color: vec3f,
      @location(2) energy: f32,
    }

    fn hash(n: f32) -> f32 { return fract(sin(n * 91.3458) * 47453.5453); }
    fn rot(v: vec2f, a: f32) -> vec2f {
      let c = cos(a); let s = sin(a);
      return vec2f(c * v.x - s * v.y, s * v.x + c * v.y);
    }

    @vertex fn vs(@builtin(vertex_index) vertex: u32, @builtin(instance_index) instance: u32) -> Output {
      let corners = array<vec2f, 6>(
        vec2f(-1., -1.), vec2f(1., -1.), vec2f(-1., 1.),
        vec2f(-1., 1.), vec2f(1., -1.), vec2f(1., 1.)
      );
      let id = f32(instance);
      let seed = vec2f(hash(id + 3.1), hash(id * 1.371 + 19.7));
      var p = (seed * 2. - 1.) * vec2f(1.16, .98);
      let t = u.time * u.motion + hash(id) * 18.;
      let phase = sin(p.x * 3.8 + t * .17) + cos(p.y * 4.4 - t * .13);
      p = rot(p, .08 * phase + .04 * sin(t * .11));
      let attractor = u.pointer * 2. - 1.;
      let delta = attractor - p;
      p += normalize(delta + vec2f(.001)) * (.028 / (.16 + dot(delta, delta))) * u.intensity;
      p += vec2f(sin(t * .23 + seed.y * 7.), cos(t * .19 + seed.x * 8.)) * .015;
      let aspect = u.resolution.y / u.resolution.x;
      p.x *= aspect;
      let size = mix(.0023, .0065, pow(hash(id * 3.2), 7.));
      let corner = corners[vertex] * size;
      var out: Output;
      out.position = vec4f(p + corner * vec2f(aspect, 1.), 0., 1.);
      out.local = corners[vertex];
      let group = hash(id * 8.7);
      out.color = select(select(vec3f(1., .57, .10), vec3f(1., .83, .31), group > .72), vec3f(1., .24, .10), group > .91);
      out.energy = mix(.18, .92, hash(id * 2.9));
      return out;
    }

    @fragment fn fs(in: Output) -> @location(0) vec4f {
      let d = length(in.local);
      let alpha = smoothstep(1., .08, d) * in.energy;
      return vec4f(in.color * (1. + alpha * .7), alpha);
    }
  `;

  async function webgpu() {
    const gpu = (navigator as Navigator & { gpu?: any }).gpu;
    if (!gpu) throw new Error('WebGPU unavailable');
    const adapter = await gpu.requestAdapter({ powerPreference: 'low-power' });
    if (!adapter) throw new Error('No compatible adapter');
    const device = await adapter.requestDevice();
    const context = fieldCanvas.getContext('webgpu') as any;
    if (!context) throw new Error('No WebGPU canvas context');

    fit();
    const format = gpu.getPreferredCanvasFormat();
    context.configure({ device, format, alphaMode: 'premultiplied' });
    const module = device.createShaderModule({ code: shader });
    const pipeline = device.createRenderPipeline({
      layout: 'auto',
      vertex: { module, entryPoint: 'vs' },
      fragment: {
        module,
        entryPoint: 'fs',
        targets: [{
          format,
          blend: {
            color: { srcFactor: 'src-alpha', dstFactor: 'one', operation: 'add' },
            alpha: { srcFactor: 'one', dstFactor: 'one-minus-src-alpha', operation: 'add' },
          },
        }],
      },
      primitive: { topology: 'triangle-list' },
    });
    const uniform = device.createBuffer({ size: 32, usage: 0x40 | 0x08 });
    const bindGroup = device.createBindGroup({
      layout: pipeline.getBindGroupLayout(0),
      entries: [{ binding: 0, resource: { buffer: uniform } }],
    });
    const concurrency = navigator.hardwareConcurrency || 4;
    const particles = innerWidth < 720 ? 1800 : concurrency >= 8 ? 6200 : 3800;
    const start = performance.now();
    fieldStatus.textContent = reduced ? 'WebGPU / still field' : `WebGPU / ${particles.toLocaleString()} agents`;
    root.classList.add('is-gpu');

    const resize = new ResizeObserver(() => {
      fit();
      context.configure({ device, format, alphaMode: 'premultiplied' });
    });
    resize.observe(fieldCanvas);

    const frame = (now: number) => {
      if (stopped) return;
      if (visible || reduced) {
        pointer.x += (pointer.tx - pointer.x) * .045;
        pointer.y += (pointer.ty - pointer.y) * .045;
        const data = new Float32Array([
          fieldCanvas.width, fieldCanvas.height,
          (now - start) / 1000,
          reduced ? 0 : 1,
          pointer.x, pointer.y,
          Math.hypot(pointer.x - .5, pointer.y - .5) * 1.8,
          0,
        ]);
        device.queue.writeBuffer(uniform, 0, data);
        const encoder = device.createCommandEncoder();
        const pass = encoder.beginRenderPass({
          colorAttachments: [{
            view: context.getCurrentTexture().createView(),
            clearValue: { r: 0, g: 0, b: 0, a: 0 },
            loadOp: 'clear', storeOp: 'store',
          }],
        });
        pass.setPipeline(pipeline);
        pass.setBindGroup(0, bindGroup);
        pass.draw(6, particles);
        pass.end();
        device.queue.submit([encoder.finish()]);
        if (reduced) return;
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
    device.lost.then(() => { stopped = true; root.classList.remove('is-gpu'); canvasFallback(); });
  }

  function canvasFallback() {
    fit();
    const context = fieldCanvas.getContext('2d');
    if (!context) return;
    const points = Array.from({ length: innerWidth < 720 ? 360 : 760 }, (_, index) => ({
      x: (Math.sin(index * 91.17) * .5 + .5) * fieldCanvas.width,
      y: (Math.sin(index * 37.71 + 2) * .5 + .5) * fieldCanvas.height,
      phase: index * .37,
      color: index % 19 === 0 ? '#ff3f25' : index % 11 === 0 ? '#ffe36e' : '#ffb52f',
    }));
    const start = performance.now();
    fieldStatus.textContent = reduced ? 'static field' : 'adaptive field / compatibility';
    root.classList.add('is-canvas');
    const draw = (now: number) => {
      if (!visible && !reduced) { requestAnimationFrame(draw); return; }
      const t = reduced ? 0 : (now - start) / 1000;
      context.clearRect(0, 0, fieldCanvas.width, fieldCanvas.height);
      pointer.x += (pointer.tx - pointer.x) * .04;
      pointer.y += (pointer.ty - pointer.y) * .04;
      for (const point of points) {
        const dx = pointer.x * fieldCanvas.width - point.x;
        const dy = pointer.y * fieldCanvas.height - point.y;
        const influence = 24 / (80 + Math.hypot(dx, dy));
        const x = point.x + Math.sin(t * .4 + point.phase) * 7 + dx * influence;
        const y = point.y + Math.cos(t * .32 + point.phase) * 6 + dy * influence;
        context.globalAlpha = .2 + ((point.phase % 1) * .55);
        context.fillStyle = point.color;
        context.fillRect(x, y, 1.4, 1.4);
      }
      context.globalAlpha = 1;
      if (!reduced) requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
  }

  webgpu().catch(canvasFallback);
}
