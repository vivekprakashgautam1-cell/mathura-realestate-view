# Mathura RealEstate View — public site

Next.js (App Router) marketing site for the agency, backed by the `mathura-crm`
backend's public API (`/api/public/properties*`, `/api/public/enquiry`).

## Development

```bash
npm install
cp .env.example .env.local   # NEXT_PUBLIC_API_URL — defaults to the live backend
npm run dev
```

## Status

Phase 1 (in progress): dynamic homepage (hero + featured properties, ISR every
60s) wired to the CRM database. `/properties` (full listing) and
`/properties/[id]` (detail page) are placeholders — full listing/detail pages
with filters, gallery, and the enquiry form are a later phase.

The public API is field-whitelisted server-side (`lib/mongodb.js` in
`mathura-crm`) — owner details, commission, and other internal CRM data are
never sent to this site.
