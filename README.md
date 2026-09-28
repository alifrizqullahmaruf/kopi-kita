# Kopi Kita Roastery

**Category** &nbsp; Concept Website · Web Design & Development
&nbsp;/&nbsp;
**Year** &nbsp; 2026
&nbsp;/&nbsp;
**Live Link** &nbsp; _coming soon_

Kopi Kita Roastery is a concept website for a small, home-based coffee roastery in Yogyakarta. It pairs warm, hand-drawn character with a WhatsApp-first ordering flow, and turns choosing a coffee into something you play with rather than read about.

> Portfolio project. The brand, products, prices and testimonials are fictional.

---

## About the Project

Many small roasteries in Indonesia sell entirely through WhatsApp and Instagram DMs. Their customers don't want an account or a checkout. They want to know which coffee suits them, then send a message.

Kopi Kita is built around that habit. Every product, plan and call to action opens a WhatsApp chat that is already filled in, so the site only has to do two things well: help people choose, and make ordering one tap away.

## Designing for Warmth,
## Built for Ordering

The goal was a site that feels like the roastery itself, small, personal and a little handmade, without giving up clarity. Each page has one job. **Beranda** introduces the brand and guides you to a coffee. **Produk** lets you filter the catalog. **Langganan** explains the monthly subscription. **Tentang** tells the story behind the roaster.

---

## Visual Language

The palette comes straight from coffee: deep forest green (`hutan`), cream (`krem`), paper (`kertas`), roast brown (`sangrai`) and a soft leaf green (`daun`). Three typefaces each have one role:

- **Bricolage Grotesque** for bold display headings
- **Plus Jakarta Sans** for readable body text
- **Caveat** for handwritten notes, the voice of the person behind the counter

Hand-drawn doodles hop in a stop-motion rhythm. Annotations with sketched arrows point at the product. Sections are cut with slanted edges that shift as you scroll, and paper-like cards have torn edges. Together these details make the site feel crafted rather than templated.

## Choosing Coffee by Taste

The signature piece is the **roast dial**: a four-quadrant wheel from light to dark roast. Pick a quadrant, or press *"Putar, pilihkan untukku"*, and the needle spins before landing on a random roast. The result card cross-fades the serving photo, recolors the bean, and lists matching coffees, each with its own WhatsApp order button.

The dial is fully accessible. It works as a `radiogroup` with roving tab index and arrow-key navigation, announces changes through `aria-live`, and falls back to instant transitions when reduced motion is requested.

## Structured Storytelling

The home page flows from first impression to action:

1. **Hero:** a promise ("roasted this week, brewed at your home next week"), a large serving photo and hand-drawn annotations
2. **Marquee:** short brand promises
3. **Featured coffees:** a bento grid
4. **Roast dial:** find a coffee by taste
5. **Subscription:** three steps and a parcel-label illustration
6. **Brew guide:** ratios for common home brewers
7. **Testimonials, photo mosaic and closing call to action**

---

## Built for Real Use

**Motion, as a system.** All scroll animation runs from one engine (`components/motion/PageMotion.tsx`, GSAP + ScrollTrigger + SplitText). Pages only add `data-*` attributes, with no animation code inside components:

| Attribute | Effect |
|---|---|
| `data-hero` / `data-hero-item` | Staggered intro on page load (`split`, `rise`, `pop` variants) |
| `data-split` | Headings reveal word by word on scroll |
| `data-reveal-group` / `data-reveal-item` | Children appear in sequence |
| `data-slant` | Slanted top edge that straightens on scroll |
| `data-parallax`, `data-hero-parallax` | Gentle photo parallax |
| `data-progress` | A line that grows with scroll progress |

**Accessible by default.** It has a skip link, labelled sections, `aria-current` navigation and keyboard-friendly controls. Every animation is disabled under `prefers-reduced-motion`, and content still shows if JavaScript fails, through a 3-second fallback.

**Light and fast.** The only runtime dependencies are Next.js, React and GSAP. Fonts are self-hosted with Fontsource, and images are compressed WebP.

**Content separated from layout.** Business settings live in `lib/site.ts`, and all copy and product data live in `lib/data.ts`. Pages are composed from small, named section components.

---

## A Foundation for Growth

```
app/
  page.tsx               home, composed from sections
  produk/ langganan/ tentang/
components/
  home/                  HeroSection, FeaturedSection, RoastFinderSection, …
    hero/                HeroIntro, HeroPhoto, HeroCoffeeNote, HeroPita, …
  roast-wheel/           RoastDial, DialSlice, RoastResultCard, RoastPanel, …
  langganan/             PlansSection, PlanCard, FaqSection, …
  tentang/               AboutPhotosSection, ProcessSection
  motion/PageMotion.tsx  the animation engine
lib/
  site.ts                site settings and WhatsApp link builders
  data.ts                products, roast levels, plans, FAQ, testimonials
  gsap.ts                GSAP plugin registration
```

Adding a coffee, a plan or a FAQ means editing data, not markup. A new section is a new component dropped into a page.

## Clarity that Feels Handmade

Kopi Kita shows that a small business site can be both personal and well engineered: hand-drawn in spirit, systematic underneath, and focused on getting a visitor from *"which coffee should I get?"* to *"order sent"* in as few steps as possible.

---

## Tech Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · GSAP (ScrollTrigger, SplitText) · Fontsource

## Running Locally

Requires Node.js 20 LTS or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```
