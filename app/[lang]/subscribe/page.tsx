import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaVisit from "@/components/CtaVisit";
import { WhatsAppIcon } from "@/components/Illustrations";
import PlansSection from "@/components/subscribe/PlansSection";
import HowItWorksSection from "@/components/subscribe/HowItWorksSection";
import FaqSection from "@/components/subscribe/FaqSection";
import { getContent, type Locale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { t } = getContent((await params).lang as Locale);
  return { title: t.subscribePage.metaTitle, description: t.subscribePage.metaDescription };
}

export default async function SubscribePage({ params }: Props) {
  const locale = (await params).lang as Locale;
  const c = getContent(locale);
  const { t } = c;

  return (
    <>
      <PageHero note={t.subscribePage.note} title={t.subscribePage.title} text={t.subscribePage.text}>
        <a href={c.wa.message(t.wa.startSubscription)} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
          <WhatsAppIcon className="h-5 w-5" />
          {t.subscribePage.button}
        </a>
      </PageHero>
      <PlansSection locale={locale} />
      <HowItWorksSection locale={locale} />
      <FaqSection locale={locale} />
      <CtaVisit locale={locale} title={t.subscribePage.ctaTitle} />
    </>
  );
}
