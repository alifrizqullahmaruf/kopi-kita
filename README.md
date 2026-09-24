# Kopi Kita Roastery — website

Next.js 15 (App Router) + Tailwind CSS v4 + GSAP (ScrollTrigger, SplitText).
Font di-host sendiri lewat Fontsource, jadi tidak bergantung pada Google Fonts saat build.

## Menjalankan di VS Code

**Yang perlu terpasang dulu:** [Node.js](https://nodejs.org) versi 20 LTS atau lebih baru (cek dengan `node -v`) dan VS Code.

1. Ekstrak zip, lalu di VS Code pilih **File → Open Folder…** dan buka folder `kopi-kita`.
2. Buka terminal: **Terminal → New Terminal** (atau `` Ctrl+` ``).
3. Pasang semua library (cukup sekali):
   ```bash
   npm install
   ```
4. Jalankan mode pengembangan:
   ```bash
   npm run dev
   ```
5. Buka **http://localhost:3000** di browser. Setiap file yang disimpan langsung terlihat di browser.

Untuk mencoba versi produksi: `npm run build` lalu `npm start`.

VS Code akan menawarkan ekstensi yang disarankan (Tailwind CSS IntelliSense dan Prettier) — klik **Install** agar kelas Tailwind mendapat auto-complete.

**Kalau ada masalah:**
- `npm` tidak dikenali → Node.js belum terpasang, atau VS Code perlu dibuka ulang setelah memasang Node.js.
- Port 3000 sudah dipakai → jalankan `npm run dev -- -p 3001` lalu buka http://localhost:3001.
- Error aneh setelah mengganti banyak file → hapus folder `.next` lalu jalankan `npm run dev` lagi.

## Sebelum go-live (wajib)

| Yang diganti | File |
|---|---|
| Nomor WhatsApp, alamat, jam, link Instagram & Maps | `lib/site.ts` |
| Logo klien (nama file tetap `logo.svg`, atau ubah path di `Header.tsx` & `Footer.tsx`) | `public/logo.svg` |
| **Testimoni asli 3 pelanggan lama** (minta izin mereka) | `lib/data.ts` → `testimonials` |
| Katalog, harga, paket langganan, FAQ | `lib/data.ts` |
| Cerita pemilik & foto | `app/tentang/page.tsx`, lalu ganti `<PhotoSlot>` dengan `<Image>` |

Ilustrasi kantong kopi (`CoffeeBag`) berfungsi sebagai "foto produk" sementara.
Setelah foto produk asli tersedia, bisa diganti atau tetap dipakai sebagai gaya visual.

## Halaman

- `/` Beranda: hero, pita berjalan, bento produk, pemilih tingkat sangrai, langganan, panduan seduh, 3 testimoni, ajakan WhatsApp
- `/produk` katalog dengan filter tingkat sangrai (`/produk?sangrai=terang` langsung terfilter)
- `/langganan` paket, cara kerja, FAQ
- `/tentang` cerita, foto, proses 4 langkah

Tombol WhatsApp melayang ada di semua halaman (`components/WhatsAppFloat.tsx`, dipasang di `app/layout.tsx`).
Setiap tombol pesan membuka WhatsApp dengan pesan yang sudah terisi nama produk atau paketnya.

## Sistem animasi

Semua animasi scroll dikendalikan satu komponen, `components/motion/PageMotion.tsx`.
Halaman cukup memberi atribut `data-*`:

| Atribut | Efek |
|---|---|
| `data-hero` + `data-hero-item` | Intro berurutan saat halaman dibuka |
| `data-hero-item="split"` | Judul muncul per kata |
| `data-hero-item="rise"` | Naik dari bawah (kantong kopi) |
| `data-hero-item="pop"` | Membesar dengan pantulan (biji kopi, ilustrasi) |
| `data-split` | Judul muncul per kata saat di-scroll |
| `data-reveal-group` / `data-reveal-item` | Anak-anak muncul bergantian |
| `data-slant` (+ kelas `slant`) | Tepi atas miring, kemiringannya berubah saat di-scroll |
| `data-progress` | Garis yang memanjang mengikuti scroll |

Animasi interaksi ada di komponennya masing-masing:
`RoastFinder` (warna biji berubah, biji berputar, isi berganti), `BrewGuide` (angka rasio berguling),
`Catalog` (kartu muncul ulang saat filter diganti).

Animasi CSS murni: pita berjalan (`.marquee`, berhenti saat di-hover) dan goyangan ilustrasi (`.wobble`, `.wobble-slow`).

Aksesibilitas: semua animasi mati bila pengguna mengaktifkan `prefers-reduced-motion`,
konten tetap tampil walau JavaScript gagal (jaring pengaman 3 detik), tab dan pilihan sangrai bisa dipakai dengan keyboard.

## Struktur

```
app/
  layout.tsx          header, footer, WA melayang, mesin animasi
  page.tsx            beranda
  produk/ langganan/ tentang/
components/
  motion/PageMotion.tsx
  Header, Footer, Marquee, WhatsAppFloat
  ProductCards, RoastFinder, BrewGuide, Catalog
  Testimonials, Steps, ParcelLabel, CtaVisit
  SectionHeading, PageHero, PhotoSlot, Illustrations
lib/
  site.ts             konfigurasi & pembuat link WhatsApp
  data.ts             semua isi konten
  gsap.ts             registrasi plugin GSAP
```
# kopi-kita
