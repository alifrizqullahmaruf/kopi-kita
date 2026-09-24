import { site, waLink } from "@/lib/site";
import { CoffeeBranch, WhatsAppIcon } from "./Illustrations";

/** Penutup halaman: ajakan chat WhatsApp + info mampir. */
export default function CtaVisit({
  title = "Mau coba dulu? Chat kami saja.",
  text = "Tanya kopi mana yang cocok, minta sampel, atau atur jadwal ambil di tempat. Biasanya kami balas di hari yang sama.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section data-slant className="slant on-dark relative bg-hutan pb-24 text-krem">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <h2 data-split className="font-display text-[clamp(2.8rem,7vw,5.5rem)]">
              {title}
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed opacity-85">{text}</p>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-solid mt-8 !px-7 !py-4 text-lg">
              <WhatsAppIcon className="h-6 w-6" />
              Chat di WhatsApp
            </a>
          </div>
          <CoffeeBranch className="wobble hidden w-56 justify-self-end text-daun md:block" />
        </div>

        <dl data-reveal-group className="mt-16 grid gap-6 border-t-2 border-krem/20 pt-8 sm:grid-cols-3">
          {[
            ["Alamat", site.address],
            ["Hari sangrai", `${site.roastDays}, dikirim setelah 2 hari istirahat`],
            ["Ambil di tempat", site.hours],
          ].map(([k, v]) => (
            <div key={k} data-reveal-item>
              <dt className="font-hand text-2xl text-daun">{k}</dt>
              <dd className="mt-1 leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
