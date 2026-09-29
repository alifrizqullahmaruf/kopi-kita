import { getContent, type Locale } from "@/lib/i18n";
import AboutPhoto from "./AboutPhoto";

/** Tiga foto roastery: sangrai, biji hijau, kemasan. Teks alt & keterangan urut sama dengan t.aboutPhotos. */
export default function AboutPhotosSection({ locale }: { locale: Locale }) {
  const [roasting, sorting, packing] = getContent(locale).t.aboutPhotos;
  return (
    // TODO: foto ini ilustrasi — ganti dengan foto asli pemilik & roastery sebelum go-live
    <section data-reveal-group className="mx-auto grid max-w-6xl gap-5 px-5 pb-24 sm:px-8 md:grid-cols-[1.3fr_1fr]">
      <AboutPhoto
        src="/images/tentang-sangrai.png"
        alt={roasting.alt}
        caption={roasting.caption}
        width={1024}
        height={765}
        className="aspect-[4/3]"
      />
      <div className="grid gap-5">
        <AboutPhoto
          src="/images/tentang-biji-hijau.png"
          alt={sorting.alt}
          caption={sorting.caption}
          width={1024}
          height={434}
          className="aspect-[4/3] md:aspect-auto"
        />
        <AboutPhoto
          src="/images/tentang-kemasan.png"
          alt={packing.alt}
          caption={packing.caption}
          width={1024}
          height={559}
          className="aspect-[4/3] md:aspect-auto"
        />
      </div>
    </section>
  );
}
