import type { Content, LocalProduct } from "@/lib/i18n";

/** Satu baris kopi (ringkas) di kartu hasil, dengan tombol pesan WhatsApp. */
export default function RoastProductItem({
  c,
  product: p,
  active,
}: {
  c: Content;
  product: LocalProduct;
  active: boolean;
}) {
  const { t } = c;
  return (
    <li
      data-rf-swap
      className="flex items-center gap-3 rounded-2xl border-2 border-hutan/15 bg-kertas py-2 pr-2 pl-4"
    >
      <div className="min-w-0 flex-1">
        <p className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-bold">{p.name}</span>
          <span className="text-sm opacity-75">{t.product.from(c.price(p.prices[0].price))}</span>
        </p>
        <p className="truncate text-xs opacity-65">{p.notes.join(", ")}</p>
      </div>
      <a
        href={c.wa.order(p.name)}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={active ? undefined : -1}
        className="shrink-0 rounded-full bg-hutan px-4 py-2 text-sm font-bold text-krem"
      >
        {t.product.order}
        <span className="sr-only">{t.product.orderSr(p.name)}</span>
      </a>
    </li>
  );
}
