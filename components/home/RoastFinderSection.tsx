import RoastWheel from "@/components/RoastWheel";

/**
 * Pencari sangrai: bantu memilih kopi lewat dial tingkat sangrai.
 * Di desktop (lg) dibuat setinggi satu layar: judul + dial di kiri, kartu hasil di kanan.
 */
export default function RoastFinderSection() {
  return (
    <section
      data-slant
      aria-labelledby="judul-sangrai"
      className="slant on-dark bg-hutan pb-28 text-krem lg:flex lg:min-h-svh lg:flex-col lg:justify-center lg:pb-16"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <RoastWheel
          heading={
            <div>
              <p className="font-hand text-2xl opacity-85">bingung pilih?</p>
              <h2 id="judul-sangrai" data-split className="font-display mt-2 text-[clamp(2.6rem,6vw,4.75rem)] lg:text-[clamp(2.4rem,3.6vw,3.5rem)]">
                Mulai dari rasa yang kamu suka
              </h2>
            </div>
          }
        />
      </div>
    </section>
  );
}
