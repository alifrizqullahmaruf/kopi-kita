import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-32 sm:px-8">
      <p className="font-hand text-2xl">halaman tidak ditemukan</p>
      <h1 className="font-display mt-2 text-6xl">Kopinya ada, halamannya yang hilang.</h1>
      <p className="mt-5 max-w-md text-lg">Alamat yang kamu buka tidak ada. Kembali ke beranda atau lihat daftar kopi kami.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-solid">Ke beranda</Link>
        <Link href="/produk" className="btn btn-ghost">Lihat kopi</Link>
      </div>
    </section>
  );
}
