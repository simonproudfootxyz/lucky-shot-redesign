# Lucky Shot Studio — Astro v2

Second build of the Lucky Shot Studio portfolio site.

## What's new in v2

- Full supplied portfolio archive is wired into the service pages.
- Duplicate asset IDs and the repeated logo URL were removed from portfolio counts.
- Galleries now contain 16 Signs, 25 Chalkboards, 21 Branding/Illustration, and 8 Murals images.
- Service galleries use a varied editorial grid rather than a two-image sample.
- CDN assets are configured to be downloaded into `public/images/` before development/build.
- Images retain the original Adobe Portfolio URL as a browser fallback if a local asset is unavailable.

## Run locally

```bash
npm install
npm run dev
```

`npm run dev` automatically runs `npm run assets` first. The downloader skips files that already exist. You can also run it manually:

```bash
npm run assets
```

Then build with:

```bash
npm run build
```

## Content placeholders

Update `src/data/site.ts` for the Big Cartel URL, Instagram URL, contact email, and service content.

## Asset source manifest

All supplied CDN URLs and their intended local destinations are recorded in `src/data/asset-manifest.json`.
