# nzxyin.github.io

Personal site and research portfolio, built with [Astro](https://astro.build).

## Structure

```text
/
├── public/                    static assets (favicon, etc.)
├── src/
│   ├── content/
│   │   ├── blog/               blog posts (markdown)
│   │   └── research/           papers (markdown, one file per paper)
│   ├── content.config.ts       content collection schemas
│   ├── layouts/
│   │   └── Layout.astro        shared page shell (nav, footer, global styles)
│   └── pages/
│       ├── index.astro         bio / home page
│       ├── research.astro      research listing
│       └── blog/
│           ├── index.astro     blog listing
│           └── [id].astro      individual blog post
└── astro.config.mjs
```

To add a paper, drop a new `.md` file in `src/content/research/` with frontmatter matching the schema in `src/content.config.ts`. Same for blog posts in `src/content/blog/`.

## Commands

| Command           | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`       | Install dependencies                        |
| `npm run dev`       | Start local dev server at `localhost:4321`  |
| `npm run build`     | Build production site to `./dist/`          |
| `npm run preview`   | Preview the build locally                   |

## Deployment

Pushes to `main` build and deploy automatically to GitHub Pages via `.github/workflows/deploy.yml`. In the repo settings, set **Pages > Source** to "GitHub Actions".
