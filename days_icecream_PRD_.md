# Day's Ice Cream — Website PRD
**Version:** 3.0 | **Status:** Updated | **Date:** March 2026  
**Developer:** Vinny Pronel  
**Client:** Day's Ice Cream (New Ownership)  
**Domain:** daysicecream.com  
**Address:** 48 Pitman Ave, Ocean Grove, NJ 07756  

---

## 1. Project Overview

Day's Ice Cream is a historic ice cream shop that has operated from the same location since 1876. The business recently changed ownership. The new owners have acquired the existing domain and require a fully redesigned website that reflects the new ownership while honoring the shop's 150-year legacy.

The site must feel **nostalgic but modern** — like a premium old American storefront brought into the present day. The logo (provided as a transparent PNG) uses a slab serif western typeface and reads "DAY'S ICE CREAM — SINCE 1876." All design decisions must feel cohesive with this logo.

---

## 2. Tech Stack

Build this project using the following stack exactly. Do not substitute any of these tools.

| Layer | Tool | Notes |
|---|---|---|
| Framework | Next.js (App Router) | Use the latest stable version |
| Styling | Tailwind CSS | Utility-first, no separate CSS files unless necessary |
| CMS | Sanity.io | For all editable content — menu, hours, events |
| Hosting | Vercel | Deploy via GitHub integration |
| Forms | Resend | For contact form and cake order form email delivery |
| Fonts | Google Fonts | Rozha One (headings) + Lora (body) |
| Maps | Google Maps iframe | No API key required, standard embed only |

### Next.js Setup Notes
- Use the **App Router** (not Pages Router)
- Use **TypeScript**
- Use **static generation** where possible for performance
- All Sanity data fetching should use `generateStaticParams` and `revalidate` for ISR

### Sanity Setup Notes
- Initialize Sanity as a **separate `/studio` directory** inside the project or as an embedded studio at `/studio` route
- Define schemas for: `menuItem`, `menuCategory`, `hours`, `event`, `siteSettings`
- Use **GROQ queries** to fetch content from Sanity into Next.js pages
- The Sanity studio should be accessible at `/studio` so the owner can log in and edit content from the live domain

### Tailwind Notes
- Configure `tailwind.config.js` with the brand color tokens listed in Section 5
- Use `@layer components` for any repeated component patterns

---

## 3. Goals & Objectives

- Establish a professional online presence for the new ownership
- Honor and prominently feature the shop's 150-year history
- Give customers all essential information: menu, hours, location, contact
- Allow customers to submit a contact form and an employment application form
- Allow the owner to update menu items, hours, and events himself via Sanity Studio — no developer needed for routine content changes
- Build a performant, SEO-friendly site using Next.js static generation
- Reflect a nostalgic-modern visual identity consistent with the logo

---

## 4. Scope of Work

### In Scope
- All pages listed in Section 6
- Fully responsive layout (mobile, tablet, desktop)
- Sanity CMS integration for all editable content
- Contact form with email delivery via Resend
- Employment application form with email delivery via Resend
- Google Maps iframe embed on Contact page
- Social media icon links in footer (URLs TBD — use placeholders)
- Logo integration (transparent PNG provided)
- Vercel deployment connected to GitHub
- DNS configuration at launch to point domain to Vercel

### Out of Scope
- Online ordering or e-commerce
- Custom admin panel (Sanity Studio handles this)
- Custom photography or graphic design beyond logo
- SEO campaign or paid advertising
- Loyalty or rewards program (confirmed not needed — seasonal business)
- Ongoing maintenance beyond agreed post-launch support window

---

## 5. Design System

### Brand Identity
- **Logo:** Day's Ice Cream — Since 1876 (transparent PNG, provided)
- **Typeface — Headings:** Rozha One (Google Fonts, free)
- **Typeface — Body:** Lora (Google Fonts, free)
- **Vibe:** Nostalgic-modern. Think premium old American storefront signage brought into a clean, current layout. Not cartoonish. Not sterile. Warm, textured, confident.

### Color Palette
Four palette options have been drafted. The final palette will be confirmed by the client. Build the project using CSS custom properties / Tailwind config tokens so the palette can be swapped cleanly. Use **Option 1 (Tobacco & Cream)** as the default during build.

**Option 1 — Tobacco & Cream** *(default during build)*
```
--color-base:       #1C0F0A  /* deep espresso — backgrounds, navbar */
--color-surface:    #3D2314  /* dark brown — card surfaces */
--color-accent:     #C9A87C  /* caramel gold — buttons, highlights */
--color-cream:      #F5ECD7  /* warm cream — primary text on dark */
--color-warm-white: #E8D5B0  /* light tan — secondary backgrounds */
```

**Option 2 — Parlor Pink**
```
--color-base:       #2A0A0A
--color-surface:    #FDF0E6
--color-accent:     #C4626A
--color-cream:      #FDF0E6
--color-warm-white: #F7D9C4
```

**Option 3 — Mint & Midnight**
```
--color-base:       #0D1B2A
--color-surface:    #1B3A4B
--color-accent:     #A8D5C2
--color-cream:      #F0EAD6
--color-warm-white: #D4A853
```

**Option 4 — Sun-Faded Sign**
```
--color-base:       #3B2A1A
--color-surface:    #8B5E3C
--color-accent:     #F0C060
--color-cream:      #FDE8C0
--color-warm-white: #D4694A
```

### Typography Scale
```
H1: Rozha One, 64px (hero)
H2: Rozha One, 42px (section titles)
H3: Rozha One, 28px (card titles)
Body: Lora, 16px, line-height 1.75
Small/Label: Lora, 12px, letter-spacing 0.15em, uppercase
```

### Design Principles
- Dark hero sections with cream text for high contrast impact
- Warm cream/tan backgrounds for content sections — never pure white
- Caramel gold for all interactive elements (buttons, links, hover states)
- Thin decorative dividers (ornamental rule or spaced dots) between sections
- Generous whitespace — this site should breathe
- No generic stock photo look — use placeholder images with warm sepia tones until real photos are provided

---

## 6. Pages & Routes

### 6.1 Home — `/`
**Purpose:** First impression. Communicate legacy, warmth, and what the shop is.

**Sections:**
- **Navbar** — logo left, nav links right, sticky on scroll
- **Hero** — full-width dark section. Large Rozha One headline, "Since 1876" subtext, CTA button to Menu page. Background: dark base color or a warm placeholder image with overlay.
- **Intro Strip** — short one-liner about the shop's history. Something like "150 years. Same corner. Same love."
- **Featured Flavors** — 3 highlight flavor cards pulled from Sanity. Each card has an image, flavor name, and short description.
- **Our Story Teaser** — brief paragraph about the new ownership honoring the legacy. CTA links to About page.
- **Hours & Location Strip** — quick reference hours and address. CTA to Contact page.
- **Footer** — logo, nav links, social icons (placeholder), copyright

### 6.2 Menu — `/menu`
**Purpose:** Display the full menu. All content editable via Sanity.

**Sections:**
- Page hero with title
- Menu items grouped by **category** (e.g. Ice Cream, Sundaes, Cakes, Drinks)
- Each item: name, description, price — all pulled from Sanity
- Categories and items fully manageable in Sanity Studio
- Optional: filter by category tabs

### 6.3 About — `/about`
**Purpose:** Tell the shop's story. Build trust and emotional connection.

**Sections:**
- Hero with page title
- Timeline or narrative section highlighting key milestones since 1876
- Section about the new ownership — honoring the legacy while bringing fresh energy
- Optional photo grid (placeholder images during build)

### 6.4 Events & Specials — `/events`
**Purpose:** Announce upcoming events, seasonal specials, promotions.

**Sections:**
- Hero with page title
- Event cards pulled from Sanity — each with title, date, description, optional image
- If no events exist in Sanity, show a friendly empty state message
- Seasonal specials section (also Sanity-managed)

### 6.5 Contact — `/contact`
**Purpose:** Let customers reach the shop and find it physically.

**Sections:**
- Hero with page title
- **Contact Form** (see Section 7.1)
- Hours of operation (pulled from Sanity)
- Address: 48 Pitman Ave, Ocean Grove, NJ 07756
- Google Maps iframe embed
- Phone: TBD (coming when internet is set up)
- Email: info@daysicecreamshop.com

### 6.6 Employment — 
**Purpose:** Allow potential staff to submit an application.

**Sections:**
- Hero with page title
- Brief intro about working at the shop
- **Employment Application Form** (see Section 7.2)

---

## 7. Forms & Email

Both forms use **Resend** for email delivery. Form submissions are sent to **info@daysicecreamshop.com**.

Use **Next.js API Routes** (`/app/api/`) to handle form submission server-side before sending via Resend. Do not expose API keys on the client.

### 7.1 Contact / Feedback Form
**Fields:**
- Name (required)
- Email (required)
- Phone (optional)
- Message (required)

**Behavior:**
- Client-side validation on required fields before submission
- On submit: POST to `/api/contact`
- API route sends email via Resend to owner's address
- Show success message on successful send
- Show error message if send fails

### 7.2 Cake Order Form
**Fields:**
- Name (required)
- Email (required)
- Phone (required)
- Pickup Date (required)
- Cake Size (required) — dropdown: Small / Medium / Large / Custom
- Flavor (required) — text input
- Special Instructions (optional) — textarea

**Behavior:**
- Client-side validation on all required fields
- On submit: POST to `/api/cake-order`
- API route sends formatted order email via Resend to owner's address
- Show confirmation message after successful submission
- Show error message if send fails

---

## 8. Sanity Schema Definitions

Define the following schemas in Sanity. These represent all content the owner can edit.

### `menuCategory`
```
- title: string (required)
- slug: slug (required)
- order: number (for sorting)
```

### `menuItem`
```
- name: string (required)
- description: text (optional)
- price: string (required, e.g. "$4.50")
- image: image (optional)
- category: reference → menuCategory (required)
- available: boolean (default true)
```

### `hours`
```
- dayLabel: string (e.g. "Monday – Friday")
- openTime: string (e.g. "12:00 PM")
- closeTime: string (e.g. "9:00 PM")
- closed: boolean (default false)
- order: number (for sorting days)
```

### `event`
```
- title: string (required)
- date: datetime (required)
- description: text (optional)
- image: image (optional)
- featured: boolean (default false)
```

### `siteSettings`
```
- shopName: string
- tagline: string
- phone: string
- email: string
- address: string
- instagramUrl: string
- facebookUrl: string
- tiktokUrl: string  # Remove if not needed — client only confirmed Facebook and Instagram
```

---

## 9. Navigation Structure

```
Logo (links to /)
├── Menu          → /menu
├── About         → /about
├── Events        → /events
├── Contact       → /contact
└── Employment    → /employment
```

- Sticky navbar on all pages
- Mobile hamburger menu for screens under 768px
- Active page indicator on current nav link
- Footer repeats nav links + social icons + copyright

---

## 10. Responsive Breakpoints

```
Mobile:   < 768px
Tablet:   768px – 1024px
Desktop:  > 1024px
```

- Mobile-first approach
- All forms fully usable on mobile
- Navbar collapses to hamburger on mobile
- Menu items stack to single column on mobile

---

## 11. Performance Requirements

- Lighthouse score target: 90+ on Performance, Accessibility, SEO
- Use Next.js `Image` component for all images (automatic optimization)
- Use `generateStaticParams` for static generation of all pages
- Use ISR (`revalidate`) on Sanity-connected pages so content updates without a full rebuild
- Google Fonts loaded via `next/font` for zero layout shift
- No unnecessary client-side JavaScript — keep it server-rendered where possible

---

## 12. File & Folder Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout, navbar, footer
│   ├── page.tsx            # Home
│   ├── menu/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── events/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── employment/
│   │   └── page.tsx
│   └── api/
│       ├── contact/
│       │   └── route.ts    # Contact form handler
│       └── employment/
│           └── route.ts    # Employment form handler
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── MenuCard.tsx
│   ├── EventCard.tsx
│   ├── ContactForm.tsx
│   └── EmploymentForm.tsx
├── sanity/
│   ├── schemas/
│   │   ├── menuItem.ts
│   │   ├── menuCategory.ts
│   │   ├── hours.ts
│   │   ├── event.ts
│   │   └── siteSettings.ts
│   ├── lib/
│   │   └── client.ts       # Sanity client config
│   └── queries/
│       └── index.ts        # All GROQ queries
├── public/
│   └── logo.png            # Transparent logo PNG
├── styles/
│   └── globals.css         # Tailwind base + custom tokens
├── tailwind.config.ts
├── sanity.config.ts
└── .env.local              # API keys (never commit this)
```

---

## 13. Environment Variables

The following environment variables are required. Never hardcode these.

```
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

# Resend
RESEND_API_KEY=

# Contact
CONTACT_EMAIL_TO=info@daysicecreamshop.com
```

---

## 14. Content Status

| Content Item | Status | Notes |
|---|---|---|
| Logo (transparent PNG) | Ready | Provided by client |
| Shop Address | Ready | 48 Pitman Ave, Ocean Grove, NJ 07756 |
| Phone Number | TBD | Placeholder during build |
| Email Address | Ready | info@daysicecreamshop.com |
| Menu Items & Prices | TBD | All placeholder during build |
| Hours of Operation | Ready | Sun–Thu 11am–10pm / Fri–Sat 11am–11pm |
| Photos / Media | Partial | 4 real photos provided by Tiffany — more TBD |
| Social Media Links | TBD | Facebook and Instagram — getting handles from previous owner |
| Loyalty Program | Confirmed Off | Not doing it — seasonal business |
| Color Palette (final) | TBD | Use Option 1 during build |
| Domain Registrar Login | TBD | GoDaddy — client will provide at launch |
| Form Destination Email | Ready | info@daysicecreamshop.com |

---

## 15. Open Items

| Item | Owner | Priority |
|---|---|---|
| Final color palette selection | Client | High |
| Phone number | Client | High — coming when internet is set up next week |
| Form submission destination email | Resolved | info@daysicecreamshop.com |
| Full menu with items and prices | Client | High |
| Hours of operation | Client | High |
| Hosting platform confirmation (Vercel) | Developer | Medium |
| Facebook and Instagram handles | Client | Medium — getting from previous owner |
| May sidewalk sale event details | Client | Medium — for Events page |
| Additional photos from Tiffany | Client | Medium |
| Social media account URLs | Client | Medium |
| Photos and media assets | Client | Medium |
| Loyalty program | Resolved | Confirmed not needed |
| Employment form fields confirmation | Client | Medium — confirm fields before building |
| Domain registrar login (launch only) | Client | Low |

---

## 16. Brand Assets & Logo

### Logo
- **File:** `Days_Logo.png`
- **Format:** Transparent PNG (white background already removed)
- **Location in project:** `/public/Days_Logo.png`
- **Reference in code:** `/Days_Logo.png` — use Next.js `Image` component, never a plain `<img>` tag
- **The logo is a fixed brand asset. It is NOT editable by the owner and should NOT be connected to Sanity.**

### How to Use the Logo
- Display in the navbar on every page — left aligned
- Display in the footer — centered or left aligned
- Do not stretch, recolor, add drop shadows, or place it on backgrounds that clash with its deep brown tone
- The logo works best on dark (base) backgrounds or warm cream backgrounds — avoid placing it on busy or colorful backgrounds

### Logo as the Design Anchor
**This is critical.** The logo must be treated as the single source of truth for all visual design decisions. Every design choice — fonts, colors, spacing, decorative elements, button styles, dividers — must feel like it belongs in the same world as this logo.

The logo characteristics to design around:
- **Typeface style:** Slab serif / western serif with arched lettering — bold, confident, old American signage energy
- **Color:** Deep espresso brown on transparent — pairs with dark backgrounds and warm cream tones
- **Era:** Feels like 1876 but clean — not distressed, not gimmicky, not clipart-vintage
- **Tone:** Premium, warm, trustworthy, historic

When in doubt about any design decision, ask: *does this look like it belongs with the Days Ice Cream logo?*

### Photos & Media
All photos are placeholder during the build. Use warm, sepia-toned placeholder images that match the nostalgic aesthetic — avoid cold blue-tinted or generic gray placeholders.

**Owner-editable images** (managed through Sanity):
- Menu item photos — uploaded via Sanity Studio, served through Sanity CDN
- Event banner images — uploaded via Sanity Studio
- Any featured homepage images tied to Sanity content

**Static images** (not editable by owner, stored in `/public`):
- Logo — `Days_Logo.png`
- Any fixed decorative or background assets used in the design

Use the Next.js `Image` component for all images regardless of source. For Sanity images, use the `@sanity/image-url` package to build optimized URLs.

---

## 17. Out of Scope / Phase 2 Considerations

These are features that are NOT being built in Version 1.0 but may be revisited:

- Admin panel beyond Sanity Studio
- Online ordering
- Loyalty / rewards program (e.g. TapMango)
- Blog or news section
- Customer reviews section
- Email newsletter signup

---

*This document should be provided directly to the AI IDE as the project brief before any code is generated. All decisions made during the build should reference this document.*
