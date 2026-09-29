import { getContent, type Locale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { WhatsAppIcon } from "./Illustrations";

/**
 * Mozaik foto seduhan. Foto dibungkus [data-parallax] sehingga bergeser
 * pelan saat di-scroll (diatur oleh PageMotion).
 * Catatan: foto adalah contoh penyajian, bukan produk yang dijual.
 * Urutan sama dengan t.mosaic.tiles (teks alt & keterangan).
 */
const tiles = [
  { src: "/images/seduh-kopi-susu.webp", w: 825, h: 1024, cls: "col-span-1 row-span-2", pos: "object-[50%_40%]" },
  { src: "/images/seduh-mocha.webp", w: 825, h: 1024, cls: "col-span-1 row-span-2", pos: "object-[50%_42%]" },
  { src: "/images/seduh-latte.webp", w: 825, h: 1024, cls: "col-span-1 row-span-1", pos: "object-[50%_38%]" },
  { src: "/images/seduh-vanila.webp", w: 825, h: 1024, cls: "col-span-1 row-span-1", pos: "object-[50%_40%]" },
  { src: "/images/seduh-hitam.webp", w: 825, h: 1024, cls: "col-span-1 row-span-1", pos: "object-[50%_45%]" },
];

type Tile = (typeof tiles)[number] & { alt: string; caption: string };

function Tile({ t }: { t: Tile }) {
  return (
    <figure data-reveal-item className={`group relative overflow-hidden rounded-[1.75rem] border-2 border-hutan bg-kertas ${t.cls}`}>
      <div data-parallax className="absolute inset-x-0 -top-[8%] -bottom-[8%]">
        <img
          src={t.src}
          alt={t.alt}
          width={t.w}
          height={t.h}
          loading="lazy"
          className={`h-full w-full object-cover ${t.pos} transition-transform duration-700 group-hover:scale-[1.04]`}
        />
      </div>
      <figcaption className="font-hand absolute bottom-3 left-3 rounded-full bg-krem px-4 py-1 text-lg text-hutan">
        {t.caption}
      </figcaption>
    </figure>
  );
}

export default function PhotoMosaic({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const { t } = c;
  const [kopiSusu, mocha, latte, vanila, hitam] = tiles.map((tile, i) => ({ ...tile, ...t.mosaic.tiles[i] }));

  return (
    <section aria-labelledby="judul-mozaik" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 md:pb-32">
      <div id="judul-mozaik">
        <SectionHeading note={t.mosaic.note} title={t.mosaic.title} text={t.mosaic.text} />
      </div>

      <div
        data-reveal-group
        className="mt-14 grid grid-flow-row-dense auto-rows-[170px] grid-cols-2 gap-4 sm:auto-rows-[200px] md:grid-cols-4 md:gap-5"
      >
        {/* baris 1–2: dua foto tinggi di tepi, empat sel di tengah */}
        <Tile t={kopiSusu} />
        <Tile t={hitam} />
        <Tile t={latte} />
        <Tile t={mocha} />

        {/* ajakan kirim foto — sekaligus sumber foto asli untuk klien */}
        <div data-reveal-item className="on-dark col-span-1 row-span-1 flex flex-col justify-between rounded-[1.75rem] bg-hutan p-5 text-krem">
          <p className="font-hand text-2xl leading-tight">{t.mosaic.ctaNote}</p>
          <a
            href={c.wa.message(t.wa.sharePhoto)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border-2 border-krem px-4 py-2 text-sm font-bold transition-colors hover:bg-krem hover:text-hutan"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {t.mosaic.ctaButton}
          </a>
        </div>

        <Tile t={vanila} />
      </div>
    </section>
  );
}
