import AboutPhoto from "./AboutPhoto";

/** Tiga foto roastery: sangrai, biji hijau, kemasan. */
export default function AboutPhotosSection() {
  return (
    // TODO: foto ini ilustrasi — ganti dengan foto asli pemilik & roastery sebelum go-live
    <section data-reveal-group className="mx-auto grid max-w-6xl gap-5 px-5 pb-24 sm:px-8 md:grid-cols-[1.3fr_1fr]">
      <AboutPhoto
        src="/images/tentang-sangrai.webp"
        alt="Menyangrai kopi dalam batch kecil, biji hangat di telapak tangan"
        caption="sangrai batch kecil"
        width={1024}
        height={765}
        className="aspect-[4/3]"
      />
      <div className="grid gap-5">
        <AboutPhoto
          src="/images/tentang-biji-hijau.webp"
          alt="Memilah biji kopi hijau di atas meja kayu"
          caption="memilih biji hijau"
          width={1024}
          height={434}
          className="aspect-[4/3] md:aspect-auto"
        />
        <AboutPhoto
          src="/images/tentang-kemasan.webp"
          alt="Kantong kertas berisi kopi yang siap dikirim"
          caption="siap dikirim"
          width={1024}
          height={559}
          className="aspect-[4/3] md:aspect-auto"
        />
      </div>
    </section>
  );
}
