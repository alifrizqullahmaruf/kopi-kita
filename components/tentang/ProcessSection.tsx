import { processSteps } from "@/lib/data";

/** Proses: judul menempel, garis progres memanjang saat scroll. */
export default function ProcessSection() {
  return (
    <section aria-labelledby="judul-proses" className="bg-daun/35 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-[1fr_1.2fr]">
        <div className="md:sticky md:top-24 md:self-start">
          <p className="font-hand text-2xl">dari karung ke cangkir</p>
          <h2 id="judul-proses" data-split className="font-display mt-2 text-[clamp(2.6rem,6vw,4.75rem)]">
            Empat langkah di setiap kantong
          </h2>
        </div>

        <div className="relative pl-10">
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-[15px] w-[3px] rounded-full bg-hutan/15" />
          <span aria-hidden="true" data-progress className="absolute top-2 bottom-2 left-[15px] w-[3px] origin-top rounded-full bg-hutan" />
          <ol className="space-y-16">
            {processSteps.map((s, i) => (
              <li key={s.title} className="relative">
                <span aria-hidden="true" className="font-display absolute top-0 -left-10 grid h-8 w-8 place-items-center rounded-full bg-hutan text-base text-krem">
                  {i + 1}
                </span>
                <h3 data-split className="font-display text-4xl">{s.title}</h3>
                <p className="mt-3 max-w-md text-lg leading-relaxed opacity-85">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
