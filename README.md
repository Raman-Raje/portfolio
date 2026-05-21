# Portfolio &mdash; Next.js

The same portfolio site as the static `index.html`, ported to **Next.js 14
(App Router) + TypeScript**. Blog posts are rendered statically at build
time from `content/blog/*.md`. Themed via CSS variables &mdash; two axes
(`mode` × `tone`) plus accent / density / serif-headings.

## Quick start

```bash
cd nextjs
npm install
npm run dev          # http://localhost:3000
npm run build        # static export -> ./out
```

`next.config.js` is set to `output: 'export'`, so `npm run build` produces
a plain static site you can drop on GitHub Pages, S3, Cloudflare Pages, etc.

### Deploying to GitHub Pages at /your-repo

```bash
NEXT_PUBLIC_BASE_PATH=/your-repo npm run build
# Push the `out/` folder to the gh-pages branch (or set Pages to serve /out).
```

## File map

```
nextjs/
├── app/
│   ├── layout.tsx              ← Root layout: <ThemeProvider>, font links, no-flash script
│   ├── page.tsx                ← Home: composes all home-page components
│   ├── globals.css             ← Tokens (CSS variables), reset, base typography
│   ├── shared.module.css       ← Cross-component classes (.page, .section-head, .tag)
│   └── blog/[slug]/
│       ├── page.tsx            ← Dynamic post page (SSG via generateStaticParams)
│       └── post.module.css     ← Post-specific styles (typography for rendered MD)
│
├── components/
│   ├── TopNav.tsx / .module.css       ← Section pills + theme toggle button
│   ├── Hero.tsx / .module.css         ← Photo + name + bio + social row
│   ├── SocialIcons.tsx                ← Reusable social icon SVGs
│   ├── Experience.tsx / .module.css   ← Reverse-chronological roles
│   ├── OpenSource.tsx                 ← Project cards (uses CardRow)
│   ├── Startups.tsx                   ← Founder/advisor cards (uses CardRow)
│   ├── CardRow.tsx / .module.css      ← Shared row layout for OS + Startups
│   ├── Writing.tsx / .module.css      ← Filter chips + post list (client)
│   ├── Footer.tsx / .module.css       ← Two-line footer
│   ├── ThemeProvider.tsx              ← Context + localStorage + applyTheme
│   └── TweaksPanel.tsx / .module.css  ← Floating tweaks panel
│
├── lib/
│   ├── theme.ts                ← Palette presets + applyTheme()
│   └── posts.ts                ← getAllPosts(), getPost() — reads fs at build
│
├── content/
│   ├── posts.ts                ← Blog manifest (title, date, tags, excerpt)
│   └── blog/                   ← Source markdown — one file per post
│       ├── README.md
│       └── *.md
│
├── public/                     ← Static assets (favicons, photos)
├── package.json
├── next.config.js
└── tsconfig.json
```

## Components

| Component         | Type              | Lives in                                |
| ----------------- | ----------------- | --------------------------------------- |
| `TopNav`          | client            | `components/TopNav.tsx`                 |
| `Hero`            | server            | `components/Hero.tsx`                   |
| `Experience`      | server            | `components/Experience.tsx`             |
| `OpenSource`      | server            | `components/OpenSource.tsx`             |
| `Startups`        | server            | `components/Startups.tsx`               |
| `Writing`         | client (filters)  | `components/Writing.tsx`                |
| `Footer`          | server            | `components/Footer.tsx`                 |
| `ThemeProvider`   | client (context)  | `components/ThemeProvider.tsx`          |
| `TweaksPanel`     | client            | `components/TweaksPanel.tsx`            |
| `PostPage`        | server (SSG)      | `app/blog/[slug]/page.tsx`              |

Server components don't ship JS; only `TopNav`, `Writing`, `ThemeProvider`,
and `TweaksPanel` are client-side. The rest is pure HTML.

## Theming

Two independent axes, persisted to `localStorage` under `portfolio-theme`:

- **mode**: `dark | light`
- **tone**: `warm | cool | neutral`

Plus: **accent** (color), **serifHeadings** (bool), **density**
(compact / comfortable / spacious).

`lib/theme.ts` holds palettes for every (tone, mode) pair.
`components/ThemeProvider.tsx` writes those values to CSS variables on
`:root`. The sun/moon icon in the header toggles mode; the floating
Tweaks panel exposes everything else.

A small inline script in `app/layout.tsx` reads `localStorage` *before*
first paint to apply the saved theme &mdash; no flash on reload.

## Adding a blog post

1. Drop `content/blog/<slug>.md`.
2. Add an entry to `content/posts.ts`.
3. Done &mdash; the next build statically renders `/blog/<slug>/`.

## License

MIT.
