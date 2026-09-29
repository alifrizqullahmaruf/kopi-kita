import type { BrewId, PlanId, ProductSlug, RoastLevel } from "@/lib/data";

type Heading = { note: string; title: string; text: string };

/** Bentuk kamus. en.ts & id.ts wajib mengisi semua kunci ini. */
export type Dict = {
  meta: { title: string; description: string; ogLocale: string };
  skipLink: string;
  langSwitch: { aria: string };

  nav: { path: string; label: string }[];
  site: { roastDays: string; hours: string };
  wa: {
    hello: string;
    order: (name: string) => string;
    subscribe: (plan: string) => string;
    startSubscription: string;
    sharePhoto: string;
  };

  header: {
    info: (city: string, roastDays: string) => [string, string, string];
    homeAria: (name: string) => string;
    mainNav: string;
    mobileNav: string;
    order: string;
    menu: string;
    close: string;
  };
  footer: {
    blurb: (city: string, roastDays: string) => string;
    chat: string;
    explore: string;
    visit: string;
    maps: string;
    rights: string;
  };
  waFloat: { aria: string; label: string };
  cta: {
    title: string;
    text: string;
    button: string;
    address: string;
    roastDays: string;
    roastDaysValue: (days: string) => string;
    pickup: string;
  };

  hero: {
    note: (city: string) => string;
    title: string;
    text: string;
    order: string;
    browse: string;
    photoAlt: string;
    brewedWith: string;
    roastAria: string;
    roastName: string;
    brewNote: string;
    marquee: string[];
  };
  featured: Heading & { action: string };
  roastFinder: { note: string; title: string };
  roastWheel: {
    groupAria: string;
    spin: string;
    spinning: string;
    orTap: string;
    tryIt: string;
    serveAs: (serve: string) => string;
    photoAlt: (serve: string, roast: string) => string;
    live: (roast: string, taste: string) => string;
    seeAll: (roast: string) => string;
  };
  subscribeTeaser: { note: string; title: string; cta: string };
  parcel: { from: string; to: string; toValue: string; stamp: [string, string]; footnote: string };
  brewSection: Heading;
  brew: { tablistAria: string; ratioLabel: string; grind: string; water: string; time: string };
  testimonialsSection: Heading;
  mosaic: Heading & { tiles: { alt: string; caption: string }[]; ctaNote: string; ctaButton: string };

  product: {
    order: string;
    orderSr: (name: string) => string;
    from: (price: string) => string;
    fromPerSize: (price: string, size: string) => string;
    greatAs: (serve: string) => string;
    asServe: (serve: string) => string;
    roastOrigin: (roast: string, origin: string) => string;
    servingAlt: (name: string, serve: string) => string;
    roast: string;
    tastes: string;
    orderOnWhatsApp: string;
    bagAria: (name: string) => string;
    roasted: string;
    bagDate: string;
  };
  catalog: { legend: string; all: string; showing: (n: number) => string };

  shopPage: { metaTitle: string; metaDescription: string; note: string; title: string; text: string; ctaTitle: string; ctaText: string };
  subscribePage: { metaTitle: string; metaDescription: string; note: string; title: string; text: string; button: string; ctaTitle: string };
  plansSection: { aria: string; footnote: string; popular: string; perMonth: string; choose: (name: string) => string };
  howItWorks: { title: string };
  faqSection: { title: string; text: string };
  aboutPage: { metaTitle: string; metaDescription: string; note: (city: string) => string; title: string; text: string; ctaTitle: string };
  aboutPhotos: { alt: string; caption: string }[];
  process: { note: string; title: string };
  notFound: { note: string; title: string; text: string; home: string; browse: string };

  roastLevels: Record<RoastLevel, { label: string; taste: string; forWho: string; serve: string }>;
  products: Record<
    ProductSlug,
    { name: string; origin: string; process: string; notes: string[]; description: string; badge?: string }
  >;
  plans: Record<PlanId, { name: string; amount: string; cups: string; desc: string }>;
  brewGuides: Record<BrewId, { name: string; grind: string; temp: string; time: string; steps: string }>;
  subscribeSteps: { title: string; text: string }[];
  testimonials: { quote: string; name: string; detail: string }[];
  processSteps: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};
