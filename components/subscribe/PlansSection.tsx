import { getContent, type Locale } from "@/lib/i18n";
import PlanCard from "./PlanCard";

/** Daftar paket langganan. */
export default function PlansSection({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  return (
    <section aria-label={c.t.plansSection.aria} className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
      <ul data-reveal-group className="grid gap-5 md:grid-cols-3 md:items-stretch">
        {c.plans.map((p) => (
          <PlanCard key={p.id} plan={p} locale={locale} />
        ))}
      </ul>
      <p className="mt-6 text-sm opacity-75">{c.t.plansSection.footnote}</p>
    </section>
  );
}
