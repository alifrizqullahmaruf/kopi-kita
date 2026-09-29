import SectionHeading from "@/components/SectionHeading";
import { getContent, type Locale } from "@/lib/i18n";
import FaqItem from "./FaqItem";

/** Pertanyaan yang sering ditanyakan. */
export default function FaqSection({ locale }: { locale: Locale }) {
  const { t } = getContent(locale);
  return (
    <section aria-labelledby="judul-faq" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <div id="judul-faq">
        <SectionHeading title={t.faqSection.title} text={t.faqSection.text} />
      </div>
      <div data-reveal-group className="mt-12 divide-y-2 divide-hutan/20 border-y-2 border-hutan">
        {t.faqs.map((f) => (
          <FaqItem key={f.q} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  );
}
