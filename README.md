# Morrow Café

A responsive landing page for morrow cafe.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

For a production build:

```sh
npm run build
npm start
```

## Built with

- Next.js App Router, React, and TypeScript.
- Tailwind CSS with Astryx’s Matcha theme.
- Figtree through `next/font/google` and optimized local photos with `next/image`.

The page is statically generated. Client-side interaction is limited to the claim form and error recovery. It includes validation, loading/error/success states, and a copy button that shows “Copied!” for two seconds. Animations respect reduced-motion preferences.

`components/Button.tsx` is a reusable native button with `startAdornment`, `endAdornment`, and optional `contentAlign` props. Both claim-form buttons use it.

## Fallbacks

- `app/error.tsx` catches route rendering errors and offers retry or a home link. Retry refreshes the route and resets its error boundary; claim API failures remain inline in the form.
- `app/loading.tsx` provides an accessible skeleton if route content is pending. The statically generated homepage normally loads directly; no artificial delay is added.
- `app/not-found.tsx` handles unknown URLs.

## Claim API

`POST /api/claim` accepts a name and an Indian mobile number:

```json
{ "name": "Rahul Sharma", "phone": "9876543210" }
```

It returns a generated claim code. This is a demo: details and codes are not stored, and café redemption is not connected. A live campaign needs persistence, duplicate/abuse protection, and a redemption service.

Deploy to a host that supports Next.js route handlers. Google Fonts access is needed during the build; font files are then served by the app.

## Checks

```sh
npx tsc --noEmit
npm run build
```

Browser/device review and Lighthouse measurements remain outstanding.
