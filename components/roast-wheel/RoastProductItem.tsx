import type { products } from "@/lib/data";
import { rupiah, waOrderProduct } from "@/lib/site";

/** Satu baris kopi (ringkas) di kartu hasil, dengan tombol pesan WhatsApp. */
export default function RoastProductItem({
  product: p,
  active,
}: {
  product: (typeof products)[number];
  active: boolean;
}) {
  return (
    <li
      data-rf-swap
      className="flex items-center gap-3 rounded-2xl border-2 border-hutan/15 bg-kertas py-2 pr-2 pl-4"
    >
      <div className="min-w-0 flex-1">
        <p className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-bold">{p.name}</span>
          <span className="text-sm opacity-75">mulai {rupiah(p.prices[0].price)}</span>
        </p>
        <p className="truncate text-xs opacity-65">{p.notes.join(", ")}</p>
      </div>
      <a
        href={waOrderProduct(p.name)}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={active ? undefined : -1}
        className="shrink-0 rounded-full bg-hutan px-4 py-2 text-sm font-bold text-krem"
      >
        Pesan<span className="sr-only"> {p.name} lewat WhatsApp</span>
      </a>
    </li>
  );
}
