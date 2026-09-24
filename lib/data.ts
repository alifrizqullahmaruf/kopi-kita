// ===================================================================
// ISI KONTEN — semua data di sini CONTOH. Ganti dengan data asli klien.
// ===================================================================

export type RoastLevel = "terang" | "sedang" | "sedang-gelap" | "gelap";

export const roastLevels: {
  id: RoastLevel;
  label: string;
  taste: string;
  forWho: string;
  bean: string; // warna biji
  serve: string; // saran penyajian
  photo: string; // foto contoh seduhan (ilustrasi, bukan produk yang dijual)
}[] = [
  {
    id: "terang",
    label: "Terang",
    taste: "Asam segar, buah, floral",
    forWho: "Suka kopi hitam yang ringan dan wangi, diseduh V60.",
    bean: "#B88A58",
    serve: "es kopi hitam",
    photo: "/images/seduh-hitam.webp",
  },
  {
    id: "sedang",
    label: "Sedang",
    taste: "Manis karamel, seimbang",
    forWho: "Baru mulai ngopi hitam dan ingin rasa yang aman.",
    bean: "#8B5B34",
    serve: "es latte",
    photo: "/images/seduh-latte.webp",
  },
  {
    id: "sedang-gelap",
    label: "Sedang-gelap",
    taste: "Cokelat, kacang, body tebal",
    forWho: "Kopi susu di rumah atau mokapot tiap pagi.",
    bean: "#5F3B22",
    serve: "es kopi susu",
    photo: "/images/seduh-kopi-susu.webp",
  },
  {
    id: "gelap",
    label: "Gelap",
    taste: "Pekat, pahit manis, smoky",
    forWho: "Penggemar kopi tubruk yang kuat.",
    bean: "#3B2517",
    serve: "es mocha",
    photo: "/images/seduh-mocha.webp",
  },
];

export type Product = {
  slug: string;
  name: string;
  origin: string;
  process: string;
  roast: RoastLevel;
  notes: string[];
  description: string;
  prices: { size: string; price: number }[];
  featured?: boolean;
  badge?: string;
  label: string; // warna label kemasan
};

// TODO: ganti dengan katalog, harga, dan tanggal sangrai yang asli
export const products: Product[] = [
  {
    slug: "house-blend",
    name: "Kopi Kita House Blend",
    origin: "Merapi & Temanggung",
    process: "Arabika–robusta",
    roast: "sedang-gelap",
    notes: ["Cokelat hitam", "Gula aren", "Kacang"],
    description:
      "Racikan harian kami untuk kopi susu di rumah. Tetap enak diseduh tubruk.",
    prices: [
      { size: "250 g", price: 65000 },
      { size: "1 kg", price: 230000 },
    ],
    featured: true,
    badge: "Paling laris",
    label: "#E9DFC8",
  },
  {
    slug: "merapi-arabika",
    name: "Arabika Merapi",
    origin: "Lereng Merapi, Sleman",
    process: "Natural",
    roast: "sedang",
    notes: ["Nangka", "Karamel", "Rempah"],
    description:
      "Kopi dari tetangga sendiri. Manis buah dengan sedikit rempah di ujungnya.",
    prices: [
      { size: "200 g", price: 85000 },
      { size: "500 g", price: 195000 },
    ],
    featured: true,
    label: "#D9E3CF",
  },
  {
    slug: "gayo-wine",
    name: "Gayo Wine",
    origin: "Aceh Tengah",
    process: "Wine process",
    roast: "terang",
    notes: ["Anggur", "Tape", "Cokelat susu"],
    description:
      "Fermentasi panjang yang bikin aromanya seperti buah matang. Cocok untuk V60.",
    prices: [
      { size: "200 g", price: 110000 },
      { size: "500 g", price: 255000 },
    ],
    featured: true,
    label: "#F1D9C9",
  },
  {
    slug: "robusta-temanggung",
    name: "Robusta Temanggung",
    origin: "Temanggung, Jawa Tengah",
    process: "Petik merah, natural",
    roast: "gelap",
    notes: ["Cokelat pahit", "Tembakau", "Rempah"],
    description:
      "Robusta petik merah yang tidak sepat. Pilihan utama untuk tubruk yang pekat.",
    prices: [
      { size: "250 g", price: 45000 },
      { size: "1 kg", price: 160000 },
    ],
    featured: true,
    label: "#E6D5B8",
  },
  {
    slug: "kintamani",
    name: "Kintamani",
    origin: "Bangli, Bali",
    process: "Full wash",
    roast: "terang",
    notes: ["Jeruk", "Teh melati", "Madu"],
    description: "Bersih dan segar, dengan asam jeruk yang ringan.",
    prices: [
      { size: "200 g", price: 95000 },
      { size: "500 g", price: 220000 },
    ],
    label: "#EFE4B8",
  },
  {
    slug: "toraja-sapan",
    name: "Toraja Sapan",
    origin: "Tana Toraja",
    process: "Giling basah",
    roast: "sedang-gelap",
    notes: ["Rempah", "Cokelat", "Tanah"],
    description: "Body tebal dan hangat. Enak sendirian, enak juga dengan susu.",
    prices: [
      { size: "200 g", price: 100000 },
      { size: "500 g", price: 235000 },
    ],
    label: "#DCCFC0",
  },
];

// TODO: sesuaikan paket & harga langganan
export const plans = [
  {
    id: "sekantong",
    name: "Sekantong",
    amount: "250 g / bulan",
    cups: "± 16 cangkir",
    price: 75000,
    desc: "Untuk yang ngopi beberapa kali seminggu.",
  },
  {
    id: "tiap-pagi",
    name: "Tiap Pagi",
    amount: "500 g / bulan",
    cups: "± 33 cangkir",
    price: 140000,
    desc: "Satu cangkir setiap pagi, tidak pernah kehabisan.",
    popular: true,
  },
  {
    id: "serumah",
    name: "Serumah",
    amount: "1 kg / bulan",
    cups: "± 66 cangkir",
    price: 260000,
    desc: "Untuk satu rumah yang semuanya suka kopi.",
  },
];

export const subscribeSteps = [
  {
    title: "Pilih paket & kopinya",
    text: "Kabari kami lewat WhatsApp: paket, jenis kopi, dan mau biji utuh atau digiling.",
  },
  {
    title: "Kami sangrai untukmu",
    text: "Kopi disangrai di hari Selasa atau Jumat, lalu diistirahatkan dua hari.",
  },
  {
    title: "Sampai di rumah",
    text: "Dikirim di minggu pertama tiap bulan. Bisa ganti kopi atau jeda kapan saja.",
  },
];

// TODO: WAJIB ganti dengan testimoni asli dari 3 pelanggan lama (dengan izin mereka)
export const testimonials = [
  {
    quote:
      "Sudah enam bulan langganan. Kopinya selalu datang masih wangi, dan kalau mau ganti jenis tinggal chat.",
    name: "Nama Pelanggan 1",
    detail: "Langganan Tiap Pagi, Sleman",
  },
  {
    quote:
      "House Blend-nya pas sekali untuk kopi susu di rumah. Anak-anak saya sekarang ikut ketagihan.",
    name: "Nama Pelanggan 2",
    detail: "Pelanggan sejak 2024, Bantul",
  },
  {
    quote:
      "Yang saya suka, tanggal sangrainya selalu ditulis di kemasan. Jadi tahu persis kopinya masih segar.",
    name: "Nama Pelanggan 3",
    detail: "Pembeli Gayo Wine, Kota Yogyakarta",
  },
];

export const brewGuides = [
  {
    id: "tubruk",
    name: "Tubruk",
    ratio: "1:12",
    grind: "Halus",
    temp: "93°C",
    time: "4 menit",
    steps: "Tuang air panas ke bubuk kopi, aduk sekali, tunggu ampasnya turun, lalu minum pelan-pelan.",
  },
  {
    id: "v60",
    name: "V60",
    ratio: "1:15",
    grind: "Sedang-halus",
    temp: "90°C",
    time: "2½ menit",
    steps: "Basahi bubuk dan tunggu 30 detik, lalu tuang melingkar dalam tiga tahap.",
  },
  {
    id: "mokapot",
    name: "Mokapot",
    ratio: "1:7",
    grind: "Sedang-halus",
    temp: "Air mendidih",
    time: "5 menit",
    steps: "Isi air sampai katup, ratakan bubuk tanpa ditekan, panaskan dengan api kecil.",
  },
  {
    id: "french-press",
    name: "French press",
    ratio: "1:14",
    grind: "Kasar",
    temp: "94°C",
    time: "4 menit",
    steps: "Tuang semua air, tutup, tunggu empat menit, lalu tekan saringan perlahan.",
  },
];

export const processSteps = [
  {
    title: "Memilih biji",
    text: "Kami mencicipi sampel dari petani dan pengepul sebelum membeli. Yang tidak lolos cupping tidak kami jual.",
  },
  {
    title: "Menyangrai",
    text: "Disangrai dalam batch kecil di rumah kami di Sleman, setiap Selasa dan Jumat.",
  },
  {
    title: "Mengistirahatkan",
    text: "Kopi didiamkan 2–3 hari agar gasnya keluar dan rasanya lebih jernih saat diseduh.",
  },
  {
    title: "Mengirim",
    text: "Dikemas dengan katup satu arah, tanggal sangrai ditulis tangan, lalu dikirim ke seluruh Indonesia.",
  },
];

export const faqs = [
  {
    q: "Apakah bisa minta digiling?",
    a: "Bisa. Sebutkan alat seduhmu saat memesan (tubruk, V60, mokapot, atau french press), kami giling sesuai ukurannya.",
  },
  {
    q: "Bagaimana cara bayar?",
    a: "Untuk sekarang pemesanan lewat WhatsApp, pembayaran dengan transfer bank atau QRIS.",
  },
  {
    q: "Apakah langganan bisa dijeda atau dihentikan?",
    a: "Bisa kapan saja. Cukup kabari kami sebelum tanggal 25 agar pengiriman bulan berikutnya ikut disesuaikan.",
  },
  {
    q: "Berapa lama kopi tetap enak?",
    a: "Paling nikmat 1–6 minggu setelah tanggal sangrai. Simpan di tempat kering, jauh dari sinar matahari.",
  },
  {
    q: "Kirim ke luar Yogyakarta?",
    a: "Ya, ke seluruh Indonesia. Untuk area Jogja bisa kurir instan atau ambil di tempat dengan janji.",
  },
];
