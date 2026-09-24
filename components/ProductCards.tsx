import type { Product } from "@/lib/data";
import { roastLevels } from "@/lib/data";
import { rupiah, waOrderProduct } from "@/lib/site";
import { CoffeeBag, WhatsAppIcon } from "./Illustrations";

export function roastOf(p: Product) {
  const i = roastLevels.findIndex((r) => r.id === p.roast);
  return { ...roastLevels[i], index: i };
}

const shortName = (name: string) => name.replace("Kopi Kita ", "");

function Bag({ p, className = "" }: { p: Product; className?: string }) {
  const r = roastOf(p);
  return (
    <CoffeeBag
      title={shortName(p.name)}
      origin={p.origin}
      label={p.label}
      bean={r.bean}
      roastIndex={r.index}
      className={`transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:-translate-y-3 group-hover:rotate-[-4deg] ${className}`}
    />
  );
}

function OrderLink({ p, dark = false }: { p: Product; dark?: boolean }) {
  return (
    <a
      href={waOrderProduct(p.name)}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative z-10 inline-flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-bold transition-colors ${
        dark
          ? "border-krem text-krem hover:bg-krem hover:text-hutan"
          : "border-hutan text-hutan hover:bg-hutan hover:text-krem"
      }`}
    >
      <WhatsAppIcon className="h-4 w-4" />
      Pesan
      <span className="sr-only"> {p.name} lewat WhatsApp</span>
    </a>
  );
}

const fromPrice = (p: Product) => `mulai ${rupiah(p.prices[0].price)} / ${p.prices[0].size}`;

/* ------------------------------------------------------------------ */
/* Bento — kartu berfoto penuh untuk beranda                           */
/* ------------------------------------------------------------------ */

type BentoSize = "large" | "wide" | "small";

const sizeClass: Record<BentoSize, string> = {
  large: "min-h-[540px] md:col-span-2 md:row-span-2 md:min-h-[600px]",
  wide: "min-h-[300px] md:col-span-2 md:min-h-[270px]",
  small: "min-h-[340px] md:min-h-[310px]",
};

// posisi fokus foto: gelas berada di tengah foto potret
const focus: Record<BentoSize, string> = {
  large: "object-[50%_45%]",
  wide: "object-[50%_42%]",
  small: "object-[50%_40%]",
};

export function BentoPhoto({ p, size }: { p: Product; size: BentoSize }) {
  const r = roastOf(p);
  const big = size === "large";
  return (
    <article
      data-reveal-item
      className={`on-dark group relative isolate flex flex-col justify-end overflow-hidden rounded-[2rem] border-2 border-hutan bg-hutan text-krem ${sizeClass[size]}`}
    >
      <img
        src={r.photo}
        alt={`Saran penyajian ${p.name}: ${r.serve}`}
        width={825}
        height={1024}
        loading="lazy"
        className={`absolute inset-y-0 right-0 -z-20 h-full object-cover ${size === "wide" ? "w-full sm:w-[62%]" : "w-full"} ${focus[size]} transition-transform duration-[900ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.05]`}
      />
      {/* gradasi agar teks terbaca */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 ${
          size === "wide"
            ? "bg-gradient-to-r from-hutan from-35% via-hutan/70 via-50% to-transparent to-75%"
            : size === "small"
              ? "bg-gradient-to-t from-hutan from-20% via-hutan/75 via-50% to-transparent to-80%"
              : "bg-gradient-to-t from-hutan from-30% via-hutan/70 via-55% to-transparent to-85% md:from-hutan/95 md:from-10% md:via-hutan/40 md:via-45% md:to-70%"
        }`}
      />

      {p.badge && (
        <span className="font-hand absolute top-5 left-5 -rotate-6 rounded-full bg-krem px-4 py-1 text-xl text-hutan">
          {p.badge}
        </span>
      )}

      <div className={`flex flex-col gap-2 ${big ? "p-7 sm:p-9" : "p-6"} ${size === "wide" ? "sm:max-w-[55%]" : ""}`}>
        <p className="font-hand text-xl leading-none opacity-90">enak jadi {r.serve}</p>
        {size !== "small" && (
          <p className="text-sm font-semibold opacity-80">Sangrai {r.label.toLowerCase()}, {p.origin}</p>
        )}
        <h3 className={`font-display ${big ? "text-[2.6rem] sm:text-6xl" : "text-3xl sm:text-4xl"}`}>{p.name}</h3>
        {big && <p className="max-w-md leading-relaxed opacity-90">{p.description}</p>}
        {size === "wide" && <p className="text-sm opacity-85">{p.notes.join(", ")}</p>}
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <p className="font-bold">{fromPrice(p)}</p>
          <OrderLink p={p} dark />
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Kartu katalog — halaman /produk                                    */
/* ------------------------------------------------------------------ */

export function CatalogCard({ p }: { p: Product }) {
  const r = roastOf(p);
  return (
    <article data-catalog-item data-roast={p.roast} className="group flex flex-col overflow-hidden rounded-[2rem] border-2 border-hutan bg-kertas">
      <div className="relative flex h-64 items-end overflow-hidden px-8 pt-8" style={{ background: p.label }}>
        <Bag p={p} className="-mb-10 w-36" />
        <figure className="absolute top-5 right-5 w-[38%] rotate-[4deg] transition-transform duration-500 group-hover:rotate-0">
          <img
            src={r.photo}
            alt={`Saran penyajian ${p.name}: ${r.serve}`}
            width={825}
            height={1024}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl border-[3px] border-kertas object-cover shadow-[0_12px_24px_-10px_rgba(31,59,45,.5)]"
          />
          <figcaption className="font-hand mt-1 text-center text-lg leading-tight">jadi {r.serve}</figcaption>
        </figure>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold opacity-75">
          {p.origin}, {p.process.toLowerCase()}
        </p>
        <h2 className="font-display mt-1 text-4xl">{p.name}</h2>
        <p className="mt-3 leading-relaxed opacity-85">{p.description}</p>

        <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
          <dt className="font-semibold">Sangrai</dt>
          <dd>{r.label}</dd>
          <dt className="font-semibold">Rasa</dt>
          <dd>{p.notes.join(", ")}</dd>
        </dl>

        <ul className="mt-5 divide-y-2 divide-dashed divide-hutan/20 border-y-2 border-dashed border-hutan/20">
          {p.prices.map((pr) => (
            <li key={pr.size} className="flex items-center justify-between py-2.5">
              <span className="font-semibold">{pr.size}</span>
              <span className="font-bold">{rupiah(pr.price)}</span>
            </li>
          ))}
        </ul>

        <a
          href={waOrderProduct(p.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-solid mt-6 justify-center"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Pesan lewat WhatsApp
        </a>
      </div>
    </article>
  );
}
