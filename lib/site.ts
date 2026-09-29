// ===================================================================
// KONFIGURASI UTAMA — data contoh untuk portfolio
// Teks yang bergantung bahasa ada di lib/i18n/en.ts & lib/i18n/id.ts
// ===================================================================

export const site = {
  name: "Kopi Kita Roastery",
  // nomor WhatsApp, format internasional tanpa "+" / spasi
  whatsapp: "6282111492113",
  city: "Yogyakarta",
  address: "Jl. Contoh No. 12, Sleman, Yogyakarta",
  instagram: "https://instagram.com/",
  mapsUrl: "https://maps.google.com/?q=Yogyakarta",
};

/** Bangun link wa.me dengan pesan yang sudah terisi. */
export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
