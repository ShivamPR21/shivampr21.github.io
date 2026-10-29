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
- `/immortal-machine/` is the publication's local landing page until publication links are activated.
- The independent publication launches at `https://immortal-machine.github.io`, with `immortalmachine.co` reserved for a later domain cutover. It has its own build target and deployment repository while consuming this same `src/content/writing` collection. The original KERNELIZED articles retain their personal canonical URLs and are linked from the publication.
- Personal `public/CNAME` remains `shivampr21.com`. Publication `publication/public/CNAME` retains the intended future domain `immortalmachine.co`; GitHub Actions deployments ignore this file and use the actual repository Pages setting.
- Mark a new publication-owned article with `publication: immortal-machine`. The calculus reference is the first such article. Do not add this field to existing KERNELIZED articles unless intentionally changing their canonical ownership.

## Independent publication build

```sh
pnpm dev:publication
pnpm check:publication
pnpm build:publication
pnpm preview:publication
```

`astro.publication.config.mjs` reuses the personal build's Markdown/math pipeline while selecting the publication routes and assets under `publication/`. Output is written to `dist-publication/`. Shared articles and landing content live in `src/`; publication routes do not duplicate their Markdown.

The deployment wrapper belongs in `Immortal-Machine/immortal-machine.github.io`. Its workflow checks out this repository and runs `pnpm build:publication`. After upstream changes, run **Actions → Deploy Immortal Machine → Run workflow** in that repository with the intended upstream branch or full commit SHA in `source_ref`. Its push/manual workflow does not poll this repository or deploy automatically on source updates. A push to the wrapper's `main` builds upstream `main`.

`PUBLIC_PUBLICATION_ORIGIN` defaults to `https://immortal-machine.github.io`. Both repositories' workflows read the corresponding repository Actions variable. Keep their values equal so publication canonicals, personal listings, feeds, and redirects agree. Local builds can use the same environment variable. Initial publication requires no custom-domain setting or DNS changes.

### Publication activation

`PUBLIC_PUBLICATION_ACTIVE` defaults to false. This keeps the personal calculus article and publication landing page fully readable before the publication is live. Publication builds use `PUBLIC_PUBLICATION_ORIGIN` and only render publication-owned articles; KERNELIZED links stay on the personal domain.

After `https://immortal-machine.github.io/` and its calculus route are reachable over HTTPS, set this source repository's Actions variable **PUBLIC_PUBLICATION_ACTIVE** to `true` and redeploy the personal site. Its workflow passes the value into the build. Personal listings/feed links then use the configured publication origin, and the former personal routes become static redirects with script-assisted fragment retention, not guaranteed HTTP 301 responses. The personal sitemap omits the redirects. Turning the variable off and rebuilding restores the local fallback.

For local activation checks, prefix a build with `PUBLIC_PUBLICATION_ACTIVE=true`. Do not enable the variable merely because the publication build succeeds: the remote destination must be reachable first.

### Later custom-domain cutover

When ready to use `immortalmachine.co`, configure that exact custom domain in the **organization repository's Settings → Pages before repointing DNS**. Replace only conflicting parking records with four apex A records (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) and a `www` CNAME to `immortal-machine.github.io`. Preserve nameservers and unrelated records. For organization domain verification, use only GitHub's actual generated TXT challenge and retain it after verification.

Wait for validation and certificate readiness, enable HTTPS enforcement, and verify the apex homepage, calculus article, and `www` redirect. Then set **PUBLIC_PUBLICATION_ORIGIN** to `https://immortalmachine.co` in **both repositories** and redeploy the publication and personal site. Leave personal `public/CNAME` as `shivampr21.com`. See the wrapper README and [GitHub's custom-domain guidance](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) for the full DNS table.

The GPU layer is independent of navigation and content. It scales particle count to the device, pauses while hidden or offscreen, and switches to a still composition for reduced-motion users.
