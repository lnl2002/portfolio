# Next.js Portfolio Scaffold — Design

**Date:** 2026-04-20
**Status:** Scaffolded

## Purpose

Set up a minimal, clean Next.js starter at `F:/Workplace/Me/Portfolio_v2` for "vibe coding" a personal portfolio site. The project pushes to https://github.com/lnl2002/portfolio.git.

## Tech Stack

| Item | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Runtime | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Linter | ESLint 9 (eslint-config-next) |
| Bundler | Turbopack (Next 16 default) |
| Package manager | bun 1.3.x |
| Source layout | `src/` directory, import alias `@/*` |

## What's in the repo

- Standard `create-next-app` scaffold (App Router, `src/app/`, Tailwind preset, default landing page).
- `public/cv.pdf` — author's CV, copied from the pre-existing file in the target directory so the portfolio can link to it later.
- `docs/superpowers/specs/` — this spec.
- Default `.gitignore`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs` from the template.

## What's explicitly NOT included (YAGNI)

- No shadcn/ui, Radix, Framer Motion, MDX, dark-mode toggle, SEO helpers, analytics, CMS integration.
- No placeholder sections (Hero / About / Projects / Contact). The default starter page is kept so future work begins from a clean slate.
- No custom components, hooks, or utilities. The only non-template change is `public/cv.pdf`.

## Constraints encountered

- The target directory name `Portfolio_v2` contains capital letters, which npm rejects as a package name. Workaround: scaffold into `portfolio-v2/` subdir, then flatten into the parent directory. The resulting `package.json` name is `portfolio-v2`.
- `create-next-app` requires an empty target directory. The pre-existing `Lại Ngọc Lâm CV.pdf` was moved out before scaffolding and restored afterward to `public/cv.pdf`.

## Git

- Remote: `https://github.com/lnl2002/portfolio.git` (confirmed empty before first push).
- Default branch: `main`.
- Initial commit includes the scaffold + CV + this spec.

## Next steps (out of scope for this spec)

Future brainstorming sessions will design individual features (layout, content sections, theming, deployment). Each will get its own spec in `docs/superpowers/specs/`.
