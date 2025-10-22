# Virtual Style as Currency — Prototype
A Next.js + Framer Motion PWA prototype for a social marketplace where digital style is the new currency.

## Quickstart
```bash
pnpm i # or npm/yarn
cp .env.example .env.local # fill Firebase keys (optional)
pnpm dev
```

## Structure
- `app/` — App Router pages (Manifest, Create, Marketplace, Community, Profile)
- `components/` — UI pieces (glass, neon, etc.)
- `lib/` — Firebase init + mock data
- `public/` — PWA assets and placeholders
- `styles/` — global CSS

## Notes
- API routes are stubs (see `app/api/*`). Replace with real Firebase/Firestore logic.
- Service worker caches basic shell for offline.
- This is a design-forward scaffold; build on top for production.
