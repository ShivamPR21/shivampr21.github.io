export const researchThemes = [
  {
    index: '01',
    accent: 'sun',
    title: 'Objectives → behaviour',
    status: 'Active direction',
    description: 'How reward, preference, and verifiable feedback shape what a policy actually learns—and where intended behaviour separates from observed action.',
    topics: ['Reinforcement learning', 'Preference learning', 'Policy optimisation', 'Behavioural evaluation'],
  },
  {
    index: '02',
    accent: 'coral',
    title: 'Representations → futures',
    status: 'Active direction',
    description: 'How latent world-action models encode possible futures, and whether a policy’s decisions depend on information that survives intervention and distribution shift.',
    topics: ['World models', 'VLA policies', 'JEPA-style learning', 'Interpretability'],
  },
  {
    index: '03',
    accent: 'lime',
    title: 'Compute → evidence',
    status: 'Established practice',
    description: 'The kernels, distributed systems, and evaluation infrastructure that shorten the distance between a mathematical question and a trustworthy empirical answer.',
    topics: ['GPU kernels', 'Distributed training', 'Efficient inference', 'Scalable evaluation'],
  },
] as const;

export const selectedWork = [
  {
    index: 'A',
    title: 'KERNELIZED',
    kind: 'Published technical series',
    description: 'Six public notes deriving reduction, softmax, and FlashAttention kernels from mathematics through data dependencies and parallel execution.',
    href: '/writing/',
    meta: 'Math · Autograd · CUDA',
  },
  {
    index: 'B',
    title: 'CLORT',
    kind: 'Public research project',
    description: 'An open implementation exploring contrastive learning for online, real-time 3D tracking.',
    href: 'https://github.com/ShivamPR21/CLORT',
    meta: 'Representation learning · Tracking',
  },
  {
    index: 'C',
    title: 'LlamaX',
    kind: 'Public systems repository',
    description: 'A repository for fast, scalable, and efficient implementations following the evolution of language-model research.',
    href: 'https://github.com/ShivamPR21/LlamaX',
    meta: 'Foundation models · Systems',
  },
  {
    index: 'D',
    title: 'laniakea',
    kind: 'Public experimental code',
    description: 'A compact CUDA extension workspace for building and studying custom kernels.',
    href: 'https://github.com/ShivamPR21/laniakea',
    meta: 'CUDA · C++ · Python',
  },
] as const;
