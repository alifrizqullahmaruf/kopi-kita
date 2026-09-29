import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaVisit from "@/components/CtaVisit";
import AboutPhotosSection from "@/components/about/AboutPhotosSection";
import ProcessSection from "@/components/about/ProcessSection";
import { getContent, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { t } = getContent((await params).lang as Locale);
  return { title: t.aboutPage.metaTitle, description: t.aboutPage.metaDescription };
}

export default async function AboutPage({ params }: Props) {
  const locale = (await params).lang as Locale;
  const { t } = getContent(locale);

  return (
    <>
      <PageHero note={t.aboutPage.note(site.city)} title={t.aboutPage.title} text={t.aboutPage.text} />
      <AboutPhotosSection locale={locale} />
      <ProcessSection locale={locale} />
      <CtaVisit locale={locale} title={t.aboutPage.ctaTitle} />
    </>
  );
}
