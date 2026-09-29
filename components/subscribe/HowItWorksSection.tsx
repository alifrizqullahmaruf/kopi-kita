import Steps from "@/components/Steps";
import { getContent, type Locale } from "@/lib/i18n";

/** Cara kerja langganan, langkah demi langkah. */
export default function HowItWorksSection({ locale }: { locale: Locale }) {
  const { t } = getContent(locale);
  return (
    <section aria-labelledby="judul-cara" className="bg-daun/35 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-2">
        <h2 id="judul-cara" data-split className="font-display text-[clamp(2.6rem,6vw,4.75rem)]">
          {t.howItWorks.title}
        </h2>
        <Steps steps={t.subscribeSteps} />
      </div>
    </section>
  );
}
