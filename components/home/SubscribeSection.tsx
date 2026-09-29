import Link from "next/link";
import Steps from "@/components/Steps";
import ParcelLabel from "@/components/ParcelLabel";
import { getContent, type Locale } from "@/lib/i18n";

/** Ringkasan langganan: langkah-langkah + label paket. */
export default function SubscribeSection({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const { t } = c;
  return (
    <section aria-labelledby="judul-langganan" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <div className="grid gap-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-hand text-2xl">{t.subscribeTeaser.note}</p>
          <h2 id="judul-langganan" data-split className="font-display mt-2 text-[clamp(2.6rem,6vw,4.75rem)]">
            {t.subscribeTeaser.title}
          </h2>
          <div className="mt-10">
            <Steps steps={t.subscribeSteps} />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={c.href("/subscribe")} className="btn btn-solid">
              {t.subscribeTeaser.cta}
            </Link>
          </div>
        </div>
        <div data-reveal-group>
          <ParcelLabel locale={locale} />
        </div>
      </div>
    </section>
  );
}
