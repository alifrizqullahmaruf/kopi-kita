import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { BentoPhoto } from "@/components/ProductCards";
import { getContent, type Locale } from "@/lib/i18n";

/** Produk unggulan dalam susunan bento. */
export default function FeaturedSection({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const { t } = c;
  const featured = c.products.filter((p) => p.featured);

  return (
    <section aria-labelledby="judul-produk" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <div id="judul-produk">
        <SectionHeading
          note={t.featured.note}
          title={t.featured.title}
          text={t.featured.text}
          action={
            <Link href={c.href("/shop")} className="font-semibold underline underline-offset-4">
              {t.featured.action}
            </Link>
          }
        />
      </div>
      <div data-reveal-group className="mt-14 grid gap-5 md:grid-cols-4 md:grid-rows-[auto_auto]">
        <BentoPhoto p={featured[0]} size="large" locale={locale} />
        <BentoPhoto p={featured[1]} size="wide" locale={locale} />
        <BentoPhoto p={featured[2]} size="small" locale={locale} />
        <BentoPhoto p={featured[3]} size="small" locale={locale} />
      </div>
    </section>
  );
}
