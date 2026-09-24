import { faqs } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import FaqItem from "./FaqItem";

/** Pertanyaan yang sering ditanyakan. */
export default function FaqSection() {
  return (
    <section aria-labelledby="judul-faq" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <div id="judul-faq">
        <SectionHeading title="Yang sering ditanyakan" text="Pertanyaan lain? Tanya langsung saja lewat WhatsApp." />
      </div>
      <div data-reveal-group className="mt-12 divide-y-2 divide-hutan/20 border-y-2 border-hutan">
        {faqs.map((f) => (
          <FaqItem key={f.q} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  );
}
