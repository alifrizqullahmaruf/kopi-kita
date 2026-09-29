import type { Locale } from "@/lib/i18n";
import HeroIntro from "./hero/HeroIntro";
import HeroPhoto from "./hero/HeroPhoto";
import HeroCoffeeNote from "./hero/HeroCoffeeNote";
import HeroBrewNote from "./hero/HeroBrewNote";
import HeroDoodles from "./hero/HeroDoodles";
import HeroPita from "./hero/HeroPita";

/** Hero beranda: judul, CTA, foto gelas besar dengan anotasi dan doodle. */
export default function HeroSection({ locale }: { locale: Locale }) {
  return (
    <section data-hero className="relative overflow-hidden">
      <HeroIntro locale={locale} />

      <div className="relative mx-auto mt-6 max-w-6xl md:mt-2">
        <HeroPhoto locale={locale} />
        <HeroCoffeeNote locale={locale} />
        <HeroBrewNote locale={locale} />
      </div>

      <HeroDoodles />

      {/* z-10 di dalamnya: foto parallax turun saat scroll, pita harus tetap di atasnya */}
      <HeroPita locale={locale} />
    </section>
  );
}
