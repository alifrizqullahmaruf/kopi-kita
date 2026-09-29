import Link from "next/link";
import { site } from "@/lib/site";
import { getContent, type Locale } from "@/lib/i18n";
import { WhatsAppIcon } from "@/components/Illustrations";

/** Teks pembuka hero: lokasi, judul, deskripsi, dan tombol CTA. */
export default function HeroIntro({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const { t } = c;
  return (
    <div className="mx-auto max-w-5xl px-5 pt-6 text-center sm:px-8 md:pt-8">
      <p data-hero-item className="font-hand text-2xl sm:text-[1.7rem]">
        {t.hero.note(site.city)}
      </p>
      <h1 data-hero-item="split" className="font-display mx-auto mt-2 max-w-4xl text-[clamp(2.8rem,5.4vw,5rem)]">
        {t.hero.title}
      </h1>
      <p data-hero-item className="mx-auto mt-5 max-w-lg text-lg leading-relaxed opacity-85">
        {t.hero.text}
      </p>
      <div data-hero-item className="mt-7 flex flex-wrap justify-center gap-3">
        <a href={c.wa.hello()} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
          <WhatsAppIcon className="h-5 w-5" />
          {t.hero.order}
        </a>
        <Link href={c.href("/shop")} className="btn btn-ghost">
          {t.hero.browse}
        </Link>
      </div>
    </div>
  );
}
