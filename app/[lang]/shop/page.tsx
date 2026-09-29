import type { Metadata } from "next";
import Catalog from "@/components/Catalog";
import PageHero from "@/components/PageHero";
import CtaVisit from "@/components/CtaVisit";
import { roastLevels, type RoastLevel } from "@/lib/data";
import { getContent, type Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ roast?: string }>;
};

export async function generateMetadata({ params }: Pick<Props, "params">): Promise<Metadata> {
  const { t } = getContent((await params).lang as Locale);
  return { title: t.shopPage.metaTitle, description: t.shopPage.metaDescription };
}

export default async function ShopPage({ params, searchParams }: Props) {
  const locale = (await params).lang as Locale;
  const { roast } = await searchParams;
  const initial = roastLevels.some((r) => r.id === roast) ? (roast as RoastLevel) : "all";
  const { t } = getContent(locale);

  return (
    <>
      <PageHero note={t.shopPage.note} title={t.shopPage.title} text={t.shopPage.text} />
      <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <Catalog locale={locale} initial={initial} />
      </section>
      <CtaVisit locale={locale} title={t.shopPage.ctaTitle} text={t.shopPage.ctaText} />
    </>
  );
}
