# Morrow Café

A mobile-first landing page offering ₹150 off a future visit to Morrow Café in Sector 104, Noida.

## Principles

- Keep the page statically generated; use client components only for interactive behavior.
- Prefer simple components and native browser features over extra dependencies.
- Preserve accessible labels, keyboard focus, readable contrast, and reduced-motion support.

## Stack & Layout

- Next.js App Router, React, strict TypeScript, and Tailwind CSS.
- `app/` — static page, shared layout, 404, global theme, and claim API.
- `components/` — page sections, form, shared button, and icons.
- `lib/claim.ts` — shared validation; `public/` — local images.
- Astryx Matcha tokens, Figtree via `next/font/google`, and images via `next/image`.

## Claim Contract

- `POST /api/claim` accepts `{ name, phone }`.
- Success returns `{ success: true, claimCode, message }`; errors return `{ success: false, message }`.
- This is a demo with no persistence or redemption service. Do not imply codes have durable validity or invent offer terms.

## Conventions

- Match existing PascalCase component filenames and camelCase functions. Default exports are fine.
- Style with Tailwind utilities; keep global CSS for theme tokens and shared keyframes.
- Reuse `Button` and icons. Use typed status states for async flows; add effects only for necessary synchronization or cleanup.
- Keep validation on both client and server, retain inputs on failure, and allow retry.

## Checks

- Run `npx tsc --noEmit` and `npm run build` for code changes; documentation-only edits need no build.
- For UI changes, check mobile and desktop alignment, keyboard access, and relevant claim/copy states when browser tools are available.
- Report unavailable checks honestly. Add tests for meaningful behavior, not simple styling changes.
