import Marquee from "@/components/Marquee";
import { getContent, type Locale } from "@/lib/i18n";

/** Pita berjalan berisi janji singkat Kopi Kita. */
export default function HeroPita({ locale }: { locale: Locale }) {
  const { t } = getContent(locale);
  return (
    <Marquee
      speed={38}
      className="font-display relative z-10 bg-hutan py-4 text-2xl text-krem sm:text-3xl"
      items={t.hero.marquee}
    />
  );
}
