# Chulin Zhao — Academic Homepage

Static personal academic website for PhD applications. Built with [Astro](https://astro.build).

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Build

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

1. Push this repo to GitHub.
2. Go to **Settings → Pages → Build and deployment**.
3. Set **Source** to **Deploy from a branch**.
4. Set **Branch** to `gh-pages` and folder **`/ (root)`**, then Save.
5. Push to `main` — GitHub Actions builds the site and pushes static files to the `gh-pages` branch.

If **GitHub Actions** is not available as a Pages source, this branch-based setup is the alternative.

If using a **project site** (`https://username.github.io/repo-name/`), set `base: '/repo-name/'` in `astro.config.mjs`.

Update `site` in `astro.config.mjs` to your actual GitHub Pages URL.

## Update content

| What | Where |
|------|--------|
| Bio, news, links | `src/data/site.ts` |
| Add a paper | New file in `src/content/publications/` |
| CV | Replace `public/cv.pdf` |
| Paper PDF | Add to `public/papers/` and link in publication frontmatter |

### Add a publication (e.g. EHR paper later)

Create `src/content/publications/your-paper.md`:

```yaml
---
title: "Paper Title"
authors:
  - { name: "Chulin Zhao", me: true }
venue: "Venue Name"
year: 2026
status: under-review   # accepted | preprint | under-review | in-preparation
order: 3
arxiv: "https://arxiv.org/abs/XXXX"
---
Optional longer description in markdown body.
```

### Fill external links

Edit `src/data/site.ts`:

```ts
links: {
  scholar: 'https://scholar.google.com/citations?user=YOUR_ID',
  github: 'https://github.com/yourusername',
  orcid: 'https://orcid.org/0000-0000-0000-0000',
},
```
