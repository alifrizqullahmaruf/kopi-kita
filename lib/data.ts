// ===================================================================
// DATA BERSAMA — sama untuk semua bahasa (id, harga, warna, foto).
// Teksnya (nama, rasa, deskripsi, dll.) ada di lib/i18n/en.ts & id.ts,
// digabung lewat getContent() di lib/i18n/index.ts.
// Data dummy untuk portfolio: merek, harga & testimoni fiktif.
// ===================================================================

export type RoastLevel = "light" | "medium" | "medium-dark" | "dark";

/** Harga dalam dua mata uang: USD untuk versi Inggris, Rupiah untuk versi Indonesia. */
export type Price = { usd: number; idr: number };

export const roastLevels: {
  id: RoastLevel;
  bean: string; // warna biji
  photo: string; // foto contoh seduhan (ilustrasi, bukan produk yang dijual)
}[] = [
  { id: "light", bean: "#B88A58", photo: "/images/seduh-hitam.webp" },
  { id: "medium", bean: "#8B5B34", photo: "/images/seduh-latte.webp" },
  { id: "medium-dark", bean: "#5F3B22", photo: "/images/seduh-kopi-susu.webp" },
  { id: "dark", bean: "#3B2517", photo: "/images/seduh-mocha.webp" },
];

export type ProductSlug =
  | "house-blend"
  | "merapi-arabica"
  | "gayo-wine"
  | "temanggung-robusta"
  | "kintamani"
  | "toraja-sapan";

export type Product = {
  slug: ProductSlug;
  roast: RoastLevel;
  prices: { size: string; price: Price }[];
  featured?: boolean;
  label: string; // warna label kemasan
};

export const products: Product[] = [
  {
    slug: "house-blend",
    roast: "medium-dark",
    prices: [
      { size: "250 g", price: { usd: 14, idr: 65000 } },
      { size: "1 kg", price: { usd: 46, idr: 230000 } },
    ],
    featured: true,
    label: "#E9DFC8",
  },
  {
    slug: "merapi-arabica",
    roast: "medium",
    prices: [
      { size: "200 g", price: { usd: 16, idr: 85000 } },
      { size: "500 g", price: { usd: 36, idr: 195000 } },
    ],
    featured: true,
    label: "#D9E3CF",
  },
  {
    slug: "gayo-wine",
    roast: "light",
    prices: [
      { size: "200 g", price: { usd: 21, idr: 110000 } },
      { size: "500 g", price: { usd: 48, idr: 255000 } },
    ],
    featured: true,
    label: "#F1D9C9",
  },
  {
    slug: "temanggung-robusta",
    roast: "dark",
    prices: [
      { size: "250 g", price: { usd: 11, idr: 45000 } },
      { size: "1 kg", price: { usd: 34, idr: 160000 } },
    ],
    featured: true,
    label: "#E6D5B8",
  },
  {
    slug: "kintamani",
    roast: "light",
    prices: [
      { size: "200 g", price: { usd: 18, idr: 95000 } },
      { size: "500 g", price: { usd: 41, idr: 220000 } },
    ],
    label: "#EFE4B8",
  },
  {
    slug: "toraja-sapan",
    roast: "medium-dark",
    prices: [
      { size: "200 g", price: { usd: 19, idr: 100000 } },
      { size: "500 g", price: { usd: 44, idr: 235000 } },
    ],
    label: "#DCCFC0",
  },
];

export type PlanId = "one-bag" | "every-morning" | "whole-house";

export const plans: { id: PlanId; price: Price; popular?: boolean }[] = [
  { id: "one-bag", price: { usd: 15, idr: 75000 } },
  { id: "every-morning", price: { usd: 28, idr: 140000 }, popular: true },
  { id: "whole-house", price: { usd: 50, idr: 260000 } },
];

export type BrewId = "tubruk" | "v60" | "moka-pot" | "french-press";

export const brewGuides: { id: BrewId; ratio: string }[] = [
  { id: "tubruk", ratio: "1:12" },
  { id: "v60", ratio: "1:15" },
  { id: "moka-pot", ratio: "1:7" },
  { id: "french-press", ratio: "1:14" },
];
