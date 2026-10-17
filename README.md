# DevFest Setif 2026

Official website for DevFest Setif 2026, organized by GDG Setif.

- Date: Saturday, November 21, 2026, 08:00 to 18:30
- Venue: Skills Center Setif, Setif, Algeria
- Format: one day, two parallel tracks. Track A: talks and workshops. Track B: full-day Agentathon.

Built with Next.js 15 (App Router), React 19 and MUI 7. The visual design follows the official DevFest 2026 Brand Guide: Google core colors, halftones and pastels, off-white #f0f0f0 and Black 02 #1e1e1e, Google Sans, outlined pills, curly-brace lockups and monoline glyphs.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Update content

All event content lives in one file: `src/data/event.ts`.

- `links`: paste the registration, hackathon registration, call for speakers and sponsor contact URLs. Empty links show a "coming soon" state.
- `sessions`: fill `speaker`, `title`, `description` and set `confirmed: true` when a speaker confirms.
- `trackA` / `trackB`: agenda timelines.
- `hackathon`: rules and rubric. Theme gets revealed on the day.
- `faqs`: questions and answers.

Brand tokens live in `src/brand.ts`, the MUI theme in `src/theme.ts`, brand images in `public/brand/`.

## Deploy

The site deploys to GitHub Pages on every push to `main` through `.github/workflows/deploy.yml`.

- Live URL: https://kelaiaffaf.github.io/devfest-setif-2026/
- The build is a static export (`output: 'export'` in `next.config.mjs`).
- The workflow sets `BASE_PATH=/devfest-setif-2026` so assets resolve under the repo sub-folder. Local dev runs at the root with no base path.
- Reference images in code through `asset('/brand/...')` from `src/brand.ts`, so the base path applies.

Build the static site locally:

```bash
BASE_PATH=/devfest-setif-2026 npm run build   # output in out/
```

## Structure

```
src/
  app/            layout and page
  components/     Header, Hero, About, Agenda, Speakers, Hackathon, Register, Venue, Faq, Footer
  data/event.ts   event content
  brand.ts        DevFest 2026 colors and fonts
  theme.ts        MUI theme
public/brand/     logos, stickers and glyphs from the brand guide
```
