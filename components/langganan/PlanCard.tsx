import type { plans } from "@/lib/data";
import { rupiah, waSubscribe } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Illustrations";

/** Kartu satu paket langganan; paket populer tampil gelap dengan pita miring. */
export default function PlanCard({ plan: p }: { plan: (typeof plans)[number] }) {
  const dark = !!p.popular;
  return (
    <li
      data-reveal-item
      className={`relative flex flex-col overflow-hidden rounded-[2rem] border-2 border-hutan p-7 ${
        dark ? "on-dark bg-hutan text-krem md:-translate-y-4" : "bg-kertas"
      }`}
    >
      {dark && (
        <p className="font-hand absolute top-9 -right-16 w-64 rotate-45 bg-krem py-1 text-center text-lg leading-tight text-hutan shadow-[0_4px_10px_-4px_rgba(0,0,0,.4)]">
          paling banyak dipilih
        </p>
      )}
      <h2 className="font-display text-5xl">{p.name}</h2>
      <p className="mt-2 font-semibold">{p.amount}</p>
      <p className="text-sm opacity-75">{p.cups}</p>
      <p className="mt-4 leading-relaxed opacity-90">{p.desc}</p>
      <p className="mt-6 border-t-2 border-dashed border-current/25 pt-5">
        <span className="font-display text-4xl">{rupiah(p.price)}</span>
        <span className="text-sm opacity-75"> / bulan</span>
      </p>
      <a
        href={waSubscribe(p.name)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-solid mt-6 justify-center"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Pilih {p.name}
      </a>
    </li>
  );
}
