import { plans } from "@/lib/data";
import PlanCard from "./PlanCard";

/** Daftar paket langganan. */
export default function PlansSection() {
  return (
    <section aria-label="Paket langganan" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
      <ul data-reveal-group className="grid gap-5 md:grid-cols-3 md:items-stretch">
        {plans.map((p) => (
          <PlanCard key={p.id} plan={p} />
        ))}
      </ul>
      <p className="mt-6 text-sm opacity-75">Harga belum termasuk ongkir. Area Yogyakarta bisa ambil di tempat.</p>
    </section>
  );
}
