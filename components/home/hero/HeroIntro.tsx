import Link from "next/link";
import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Illustrations";

/** Teks pembuka hero: lokasi, judul, deskripsi, dan tombol CTA. */
export default function HeroIntro() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-6 text-center sm:px-8 md:pt-8">
      <p data-hero-item className="font-hand text-2xl sm:text-[1.7rem]">
        a home roastery in Sleman, {site.city}
      </p>
      <h1 data-hero-item="split" className="font-display mx-auto mt-2 max-w-4xl text-[clamp(2.8rem,5.4vw,5rem)]">
        Roasted this week, brewed at your place the next.
      </h1>
      <p data-hero-item className="mx-auto mt-5 max-w-lg text-lg leading-relaxed opacity-85">
        Small-batch coffee from across Indonesia. Buy a bag when you need one, or subscribe and let it
        show up on its own every month.
      </p>
      <div data-hero-item className="mt-7 flex flex-wrap justify-center gap-3">
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
          <WhatsAppIcon className="h-5 w-5" />
          Order on WhatsApp
        </a>
        <Link href="/shop" className="btn btn-ghost">
          See our coffee
        </Link>
      </div>
    </div>
  );
}
