// ===================================================================
// KONFIGURASI UTAMA — ganti semua nilai bertanda TODO sebelum go-live
// ===================================================================

export const site = {
  name: "Kopi Kita Roastery",
  // TODO: nomor WhatsApp bisnis klien, format internasional tanpa "+" / spasi
  whatsapp: "6281234567890",
  // TODO: alamat & jam asli
  city: "Yogyakarta",
  address: "Jl. Contoh No. 12, Sleman, Yogyakarta",
  roastDays: "Selasa & Jumat",
  hours: "Senin–Sabtu, 09.00–17.00 (ambil di tempat dengan janji)",
  instagram: "https://instagram.com/", // TODO
  mapsUrl: "https://maps.google.com/?q=Yogyakarta", // TODO
};

export const nav = [
  { href: "/", label: "Beranda" },
  { href: "/produk", label: "Produk" },
  { href: "/langganan", label: "Langganan" },
  { href: "/tentang", label: "Tentang kami" },
];

/** Bangun link wa.me dengan pesan yang sudah terisi. */
export function waLink(message?: string) {
  const text =
    message ??
    `Halo ${site.name}, saya mau tanya-tanya soal kopinya.`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function waOrderProduct(name: string, size?: string) {
  return waLink(
    `Halo ${site.name}, saya mau pesan ${name}${size ? ` ukuran ${size}` : ""}. Apakah stoknya ada?`,
  );
}

export function waSubscribe(plan: string) {
  return waLink(
    `Halo ${site.name}, saya tertarik langganan paket ${plan}. Boleh dijelaskan cara mulainya?`,
  );
}

export const rupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
