import Link from "next/link";
import { products, type roastLevels } from "@/lib/data";
import RoastProductItem from "./RoastProductItem";

/** Isi kartu untuk satu tingkat sangrai: cocok untuk siapa dan daftar kopinya. */
export default function RoastPanel({
  level: r,
  index,
  active,
}: {
  level: (typeof roastLevels)[number];
  index: number;
  active: boolean;
}) {
  const list = products.filter((p) => p.roast === r.id);
  return (
    <div
      data-rf-panel={index}
      aria-hidden={!active}
      className={`[grid-area:1/1] flex flex-col px-1 sm:px-2 ${active ? "visible" : "invisible"}`}
    >
      <p data-rf-swap className="mt-4 leading-relaxed opacity-85">
        {r.forWho}
      </p>
      <ul className="mt-4 space-y-2">
        {list.map((p) => (
          <RoastProductItem key={p.slug} product={p} active={active} />
        ))}
      </ul>
      <Link
        href={`/produk?sangrai=${r.id}`}
        data-rf-swap
        tabIndex={active ? undefined : -1}
        className="mt-auto self-start pt-4 pb-1 font-semibold underline underline-offset-4"
      >
        Lihat semua kopi sangrai {r.label.toLowerCase()}
      </Link>
    </div>
  );
}
