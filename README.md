# AURELIA — Immersive Luxury Glassmorphism

Premium multi-page ecommerce experience for the AURELIA home fragrance & lifestyle brand.

## Design direction

Immersive luxury glassmorphism — floating glass panels, ambient light, layered depth, and motion-driven discovery. Distinct from any Scandinavian/editorial version of the brand.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Supabase Auth (email + password only)
- Satoshi + General Sans (Fontshare) · Manrope + Plus Jakarta Sans (Google)

## Auth

The site is gated behind email authentication:

- `/signup` — create an account with email + password
- `/login` — sign in to access the site
- Unauthenticated visitors are redirected to `/login`

### Setup

1. Copy `.env.example` to `.env.local` and add your Supabase URL + anon key.
2. In the [Supabase Auth settings](https://supabase.com/dashboard/project/veqomdlovykkhiwzfcqc/auth/providers), keep only the **Email** provider enabled.
3. For smoother local testing, turn off **Confirm email** under Authentication → Providers → Email (otherwise new users must confirm via email before signing in).

## Pages

- `/` — Immersive homepage (11 sections)
- `/shop` — Discovery showroom with mood/room/collection/season filters
- `/shop/[slug]` — Product exhibit pages
- `/collections` · `/collections/[slug]` — Collection worlds
- `/experiences` — Sensory living (unique to this version)
- `/journal` · `/journal/[slug]` — Editorial
- `/about` · `/contact` — Brand story & concierge
- `/login` · `/signup` — Email authentication

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
