// ===================================================================
// KONFIGURASI UTAMA — data contoh untuk portfolio
// ===================================================================

export const site = {
  name: "Kopi Kita Roastery",
  // nomor WhatsApp, format internasional tanpa "+" / spasi
  whatsapp: "6281234567890",
  city: "Yogyakarta",
  address: "Jl. Contoh No. 12, Sleman, Yogyakarta",
  roastDays: "Tuesdays & Fridays",
  hours: "Mon–Sat, 9 am–5 pm (pickup by appointment)",
  instagram: "https://instagram.com/",
  mapsUrl: "https://maps.google.com/?q=Yogyakarta",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/subscribe", label: "Subscribe" },
  { href: "/about", label: "About us" },
];

/** Bangun link wa.me dengan pesan yang sudah terisi. */
export function waLink(message?: string) {
  const text = message ?? `Hi ${site.name}, I have a question about your coffee.`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function waOrderProduct(name: string, size?: string) {
  return waLink(`Hi ${site.name}, I'd like to order ${name}${size ? ` (${size})` : ""}. Is it in stock?`);
}

export function waSubscribe(plan: string) {
  return waLink(`Hi ${site.name}, I'm interested in the ${plan} plan. How do I get started?`);
}

export const usd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
