import Link from "next/link";
import { site } from "@/lib/site";
import { getContent, type Locale } from "@/lib/i18n";
import { WhatsAppIcon } from "./Illustrations";

export default function Footer({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const { t } = c;

  return (
    <footer className="border-t-2 border-hutan/15 bg-krem">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="" width={40} height={40} className="h-10 w-10" />
            <span className="font-display text-2xl">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-hutan/80">
            {t.footer.blurb(site.city, t.site.roastDays)}
          </p>
          <a href={c.wa.hello()} target="_blank" rel="noopener noreferrer" className="btn btn-solid mt-6">
            <WhatsAppIcon className="h-5 w-5" />
            {t.footer.chat}
          </a>
        </div>

        <div>
          <h2 className="font-hand text-2xl">{t.footer.explore}</h2>
          <ul className="mt-3 space-y-2 font-semibold">
            {t.nav.map((n) => (
              <li key={n.path}>
                <Link href={c.href(n.path)} className="hover:underline underline-offset-4">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-hand text-2xl">{t.footer.visit}</h2>
          <address className="mt-3 space-y-2 text-sm not-italic leading-relaxed">
            <p>{site.address}</p>
            <p>{t.site.hours}</p>
            <p>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">
                {t.footer.maps}
              </a>
            </p>
            <p>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">
                Instagram
              </a>
            </p>
          </address>
        </div>
      </div>
      <p className="mx-auto max-w-6xl px-5 pb-24 text-xs text-hutan/60 sm:px-8">
        © {new Date().getFullYear()} {site.name}. {t.footer.rights}
      </p>
    </footer>
  );
}
