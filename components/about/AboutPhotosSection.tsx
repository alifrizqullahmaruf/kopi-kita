import AboutPhoto from "./AboutPhoto";

/** Tiga foto roastery: sangrai, biji hijau, kemasan. */
export default function AboutPhotosSection() {
  return (
    // TODO: foto ini ilustrasi — ganti dengan foto asli pemilik & roastery sebelum go-live
    <section data-reveal-group className="mx-auto grid max-w-6xl gap-5 px-5 pb-24 sm:px-8 md:grid-cols-[1.3fr_1fr]">
      <AboutPhoto
        src="/images/tentang-sangrai.png"
        alt="Warm, freshly roasted beans in the palm of a hand"
        caption="small-batch roasting"
        width={1024}
        height={765}
        className="aspect-[4/3]"
      />
      <div className="grid gap-5">
        <AboutPhoto
          src="/images/tentang-biji-hijau.png"
          alt="Sorting green coffee beans on a wooden table"
          caption="sorting green beans"
          width={1024}
          height={434}
          className="aspect-[4/3] md:aspect-auto"
        />
        <AboutPhoto
          src="/images/tentang-kemasan.png"
          alt="Paper bags of coffee, packed and ready to ship"
          caption="ready to ship"
          width={1024}
          height={559}
          className="aspect-[4/3] md:aspect-auto"
        />
      </div>
    </section>
  );
}
