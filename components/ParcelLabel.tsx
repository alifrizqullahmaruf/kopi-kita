import { plans } from "@/lib/data";
import { rupiah } from "@/lib/site";

/** Kartu bergaya label kiriman — ringkasan paket langganan. */
export default function ParcelLabel() {
  return (
    <div data-reveal-item className="relative mx-auto w-full max-w-md rotate-[1.5deg]">
      <div className="torn-bottom bg-kertas p-3 pb-6 text-hutan shadow-[0_24px_50px_-20px_rgba(0,0,0,.45)]">
        <div className="rounded-xl border-2 border-dashed border-hutan/50 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold opacity-70">Dari</p>
              <p className="font-display text-2xl">Kopi Kita Roastery</p>
              <p className="mt-3 text-xs font-semibold opacity-70">Untuk</p>
              <p className="font-hand text-3xl leading-none">kamu, tiap bulan</p>
            </div>
            <div className="wobble-slow grid h-24 w-24 shrink-0 place-items-center rounded-full border-2 border-sangrai text-center text-sangrai">
              <span className="font-hand text-lg leading-tight">
                kiriman
                <br />
                bulanan
              </span>
            </div>
          </div>
          <ul className="mt-6 divide-y-2 divide-dashed divide-hutan/20 border-t-2 border-hutan">
            {plans.map((p) => (
              <li key={p.id} className="flex items-baseline justify-between gap-3 py-3">
                <span>
                  <span className="font-bold">{p.name}</span>
                  <span className="ml-2 text-sm opacity-70">{p.amount}</span>
                </span>
                <span className="font-bold whitespace-nowrap">{rupiah(p.price)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs opacity-70">Harga per bulan, belum termasuk ongkir.</p>
        </div>
      </div>
    </div>
  );
}
