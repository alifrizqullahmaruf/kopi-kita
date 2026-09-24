import { testimonials } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section aria-labelledby="judul-testimoni" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <div id="judul-testimoni">
        <SectionHeading
          note="dari yang sudah langganan"
          title="Kata pelanggan pertama kami"
          text="Mereka yang sudah ngopi bareng kami sejak kantong pertama."
        />
      </div>
      <ul data-reveal-group className="mt-14 grid gap-5 md:grid-cols-3 md:items-start">
        {testimonials.map((t, i) => {
          const dark = i === 1;
          return (
            <li
              key={t.name}
              data-reveal-item
              className={`rounded-[2rem] border-2 border-hutan p-7 ${
                dark ? "bg-hutan text-krem md:mt-12" : "bg-kertas"
              } ${i === 2 ? "md:mt-5" : ""}`}
            >
              <figure>
                <span aria-hidden="true" className="font-display block h-12 text-[6.5rem] leading-[0.9] opacity-35">
                  &ldquo;
                </span>
                <blockquote className="text-lg leading-relaxed font-medium">{t.quote}</blockquote>
                <figcaption className="mt-6 border-t-2 border-dashed border-current/25 pt-4">
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm opacity-75">{t.detail}</p>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
