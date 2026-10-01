# Shivam Pandey — Research Studio

The source for [shivampr21.com](https://shivampr21.com): a static Astro research site with a progressively enhanced WebGPU policy field, a Canvas 2D/SVG fallback, and a Markdown/MDX publishing system.

## Develop

```sh
pnpm install
pnpm dev
pnpm check
pnpm build
```

Astro emits the complete site to `dist/`. A push to `main` deploys that directory to GitHub Pages through `.github/workflows/deploy.yml`.

## Publish a note

Add a `.md` or `.mdx` file to `src/content/writing/`:

```yaml
---
title: "A precise title"
description: "One useful sentence for listings and search previews."
date: 2026-10-01
updated: 2026-10-01
author: Shivam Pandey
categories: [World Models, Systems]
series: Research Notes
seriesOrder: 1
image: /media/example-social-card.png
draft: true
---
```

Set `draft: false` when the note is ready. Inline and display mathematics use `$...$` and `$$...$$`; fenced code is syntax highlighted. MDX notes can import components such as `src/components/Figure.astro` and can embed small interactive demos without changing the article layout.

## Identity and domains

- `shivampr21.com` is the canonical personal root: research, selected work, biography, and the complete writing index.
- `/immortal-machine/` is the editorial identity for longer-form, conceptual work. It intentionally reads as a sibling publication rather than a duplicate site.
- `immortalmachine.co` should eventually point to a second deployment that consumes this same `src/content/writing` collection, filters publication-specific entries, and assigns its own canonical URLs. Articles should have exactly one canonical home; the other domain should link to it.

The GPU layer is independent of navigation and content. It scales particle count to the device, pauses while hidden or offscreen, and switches to a still composition for reduced-motion users.
