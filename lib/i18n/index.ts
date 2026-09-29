import { brewGuides, plans, products, roastLevels, type Price } from "@/lib/data";
import { waLink } from "@/lib/site";
import { localeHref, type Locale } from "./config";
import { en } from "./en";
import { id } from "./id";

export * from "./config";

const dicts = { en, id };

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const idr = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });

/**
 * Semua isi situs untuk satu bahasa: kamus teks (`t`), data yang sudah
 * digabung dengan teksnya, format harga, link berbahasa, dan link WhatsApp.
 * Dipanggil langsung di tiap komponen: `const c = getContent(locale)`.
 */
export function getContent(locale: Locale) {
  const t = dicts[locale];
  return {
    locale,
    t,
    roastLevels: roastLevels.map((r) => ({ ...r, ...t.roastLevels[r.id] })),
    products: products.map((p) => ({ ...p, ...t.products[p.slug] })),
    plans: plans.map((p) => ({ ...p, ...t.plans[p.id] })),
    brewGuides: brewGuides.map((b) => ({ ...b, ...t.brewGuides[b.id] })),
    price: (p: Price) => (locale === "id" ? idr.format(p.idr) : usd.format(p.usd)),
    href: (path: string) => localeHref(locale, path),
    wa: {
      hello: () => waLink(t.wa.hello),
      order: (name: string) => waLink(t.wa.order(name)),
      subscribe: (plan: string) => waLink(t.wa.subscribe(plan)),
      message: (text: string) => waLink(text),
    },
  };
}

export type Content = ReturnType<typeof getContent>;
export type LocalRoastLevel = Content["roastLevels"][number];
export type LocalProduct = Content["products"][number];
export type LocalPlan = Content["plans"][number];
