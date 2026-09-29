import SectionHeading from "@/components/SectionHeading";
import BrewGuide from "@/components/BrewGuide";
import { getContent, type Locale } from "@/lib/i18n";

/** Panduan seduh dengan alat rumahan. */
export default function BrewGuideSection({ locale }: { locale: Locale }) {
  const { t } = getContent(locale);
  return (
    <section aria-labelledby="judul-seduh" className="bg-daun/35 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div id="judul-seduh">
          <SectionHeading note={t.brewSection.note} title={t.brewSection.title} text={t.brewSection.text} />
        </div>
        <div data-reveal-group className="mt-14">
          <BrewGuide locale={locale} />
        </div>
      </div>
    </section>
  );
}
