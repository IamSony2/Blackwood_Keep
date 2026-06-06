
# Blackwood Keep Ltd — Multi-Page Marketing Site

Build the complete 9-page site exactly as specified in the brief. Below is the implementation plan; all per-page copy, sections, colours, and component details follow the brief verbatim and aren't repeated here.

## Design system (src/styles.css)

- Replace existing theme tokens with the Blackwood Keep palette as CSS variables in `oklch`-converted equivalents plus raw hex via `@theme inline`:
  - `--bk-black: #0B0B0D`, `--bk-navy: #111827`, `--bk-slate: #1F2937`
  - `--bk-gold: #C8A45D`, `--bk-gold-antique: #B68B3A`, `--bk-gold-champagne: #E5D2A0`
  - `--bk-white: #F8F9FA`, `--bk-silver: #D1D5DB`, `--bk-subtle: #9CA3AF`, `--bk-muted-dark: #111827`
  - `--bk-success: #16A34A`, `--bk-alert: #DC2626`
- Register `--font-display: "Playfair Display"` and `--font-sans: Inter` under `@theme`.
- Load fonts via `<link rel="preconnect">` + stylesheet `<link>` in `src/routes/__root.tsx` head (never `@import` URL — see Tailwind v4 rule).
- Border-radius tokens: 8px small, 12px cards. Heading weight pinned to 500.

## Shared components (`src/components/`)

- `CastleShield.tsx` — inline SVG (heraldic shield + tower/battlements), accepts `size` and `className`. Gold on black.
- `SiteHeader.tsx` — sticky nav (logo, centre links, gold "Book Free Audit" CTA → `/free-audit`, mobile hamburger with full-screen dark overlay). Accepts a `minimal` prop to drop centre links on `/free-audit`.
- `SiteFooter.tsx` — 5 rows per brief, accepts a `minimal` prop for `/free-audit`.
- `CookieBanner.tsx` — localStorage-gated, dark bar with gold accept button, mounted in `__root.tsx`.
- `GoldDivider.tsx`, `SectionDark.tsx`, `SectionLight.tsx`, `Accordion.tsx` (for pricing FAQ), `ZohoPlaceholder.tsx` (dashed gold box with field labels), `GdprCheckbox.tsx`.
- Layout wrapper applies header/footer to every page; `/free-audit` opts into minimal variants.

## Icons

Use `lucide-react` (outline style, already idiomatic in shadcn). The brief names Tabler icons; map each (`ti-bulb` → `Lightbulb`, `ti-shield-check` → `ShieldCheck`, `ti-clock` → `Clock`, `ti-settings` → `Settings`, `ti-heart` → `Heart`, `ti-award` → `Award`, `ti-phone` → `Phone`, `ti-mail` → `Mail`, `ti-map-pin` → `MapPin`, plus star, rocket, chart-line, currency-pound, settings-automation, etc.). All rendered in `--bk-gold`.

## Routes (TanStack Start file-based)

Each route file gets its own `head()` with unique title, description, og:title, og:description, and a leaf canonical (relative path). H1 per brief.

- `src/routes/index.tsx` — Homepage (8 sections incl. hero, segmentation, problem/solution, process `#how-it-works`, sectors, testimonials strip, referrals mention, final CTA). Inject `LocalBusiness` JSON-LD via `head().scripts`.
- `src/routes/about.tsx`
- `src/routes/services.tsx`
- `src/routes/pricing.tsx` — Investment scope, interactive scope selector (3 dropdowns + submit that navigates to `/free-audit` with query params), FAQ accordion.
- `src/routes/free-audit.tsx` — Minimal nav/footer variant. Two-path layout with Zoho placeholders + working HTML fallback enquiry form (with GDPR checkbox, mailto fallback).
- `src/routes/testimonials.tsx` — 6-card grid, each card carries `Review` JSON-LD; metric strip; Google embed placeholder. JSON-LD aggregated via `head().scripts`.
- `src/routes/team.tsx` — Includes hidden founder/team cards block (`display:none`) with developer comment.
- `src/routes/referrals.tsx` — 3-step process, intake placeholder, gold submit button.
- `src/routes/contact.tsx` — Two-route layout, working HTML fallback form with mailto, Zoho calendar placeholder, `LocalBusiness` JSON-LD with full `serviceArea`.
- `src/routes/privacy.tsx`, `src/routes/cookies.tsx` — placeholder legal content, linked from footer.

Root `__root.tsx`: add Google Fonts links, default `og:type: website`, `og:site_name: Blackwood Keep`, viewport, cookie banner. Do NOT set canonical or og:image at root.

## SEO infrastructure

- `src/routes/sitemap[.]xml.ts` — server route listing all public routes; `BASE_URL = ""` placeholder with TODO comment.
- `public/robots.txt` — `User-agent: *` / `Allow: /`. No `Sitemap:` directive (no domain yet).
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`), one H1 per page, descriptive alt text on icons via aria-labels.

## Forms

Zoho boxes use `ZohoPlaceholder` (dashed gold border, listed fields, descriptive HTML comment wrapping). Real fallback forms on `/contact` and `/free-audit` use a `mailto:hello@blackwoodkeep.co.uk` action with the GDPR consent checkbox required.

## Out of scope (intentionally)

- No backend / Lovable Cloud (no DB, no auth, no email send) — forms use mailto fallback and Zoho stubs as the brief specifies.
- No real OG images generated — `og:image` omitted at leaves (per guidance: no image beats a generic one). Easy to add later.
- Swytch phone number left as `[Swytch phone number]` placeholder per brief.
- Tabler Icons library replaced with equivalent lucide-react outline icons (already in the stack); visual result is identical and avoids a redundant icon dep. Flag this small substitution to confirm if it matters.

## File checklist

```
src/styles.css                          (rewrite tokens)
src/routes/__root.tsx                   (fonts, banner, defaults)
src/routes/index.tsx                    (replace placeholder)
src/routes/about.tsx
src/routes/services.tsx
src/routes/pricing.tsx
src/routes/free-audit.tsx
src/routes/testimonials.tsx
src/routes/team.tsx
src/routes/referrals.tsx
src/routes/contact.tsx
src/routes/privacy.tsx
src/routes/cookies.tsx
src/routes/sitemap[.]xml.ts
public/robots.txt
src/components/CastleShield.tsx
src/components/SiteHeader.tsx
src/components/SiteFooter.tsx
src/components/CookieBanner.tsx
src/components/ZohoPlaceholder.tsx
src/components/GoldDivider.tsx
src/components/Accordion.tsx (if not reusing shadcn)
src/components/GdprCheckbox.tsx
```

Ready to build on approval.
