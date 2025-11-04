# Silverbells Modern React Site

A compact, responsive, modern React + Tailwind CSS site mirroring the structure of silverbellsschool.org. Pages include Home, About, Academics, Admissions, Facilities, Activities, Gallery, News, Events, Careers, Contact.

## Tech
- Vite + React + TypeScript
- Tailwind CSS for fast, responsive styling
- React Router v6 for pages
- Lazy-loaded routes, mobile-first design

## Getting started

```bash
# Node 18+
npm i
npm run dev
```

Open http://localhost:5173

## Configure site details

Edit `src/site.config.ts`:
- `SITE.name`, `SITE.tagline`, contact info and social links
- `SITE.heroImages`: paste image URLs you’re permitted to use (you can use publicly accessible URLs from the existing site)

Edit the menu in `NAV_LINKS` to match the exact pages shown on the existing site if needed.

## Notes on images and content

- This template references images by URL. If you intend to use images from silverbellsschool.org, ensure you have the right to hotlink or download and host them yourself.
- For best performance and control, prefer hosting images in this repo (e.g., `public/`) or on your own CDN, then update the URLs in `site.config.ts`.

## Deploy

You can deploy to:
- GitHub Pages
- Netlify / Vercel / Cloudflare Pages

Production build:

```bash
npm run build
npm run preview
```

## Customize styling

Global styles live in `src/styles/index.css`. Tailwind config in `tailwind.config.ts`. Tweak colors, fonts, and spacing to match your brand.
