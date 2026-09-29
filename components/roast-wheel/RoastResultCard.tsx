import type { Content } from "@/lib/i18n";
import RoastPhoto from "./RoastPhoto";
import RoastPanel from "./RoastPanel";

/**
 * Kartu hasil. Semua panel dirender bertumpuk di sel grid yang sama; hanya yang aktif terlihat.
 * Tinggi kartu = panel tertinggi, sehingga kartu tidak memanjang/memendek saat berganti.
 */
export default function RoastResultCard({ c, idx, prevPhoto }: { c: Content; idx: number; prevPhoto: string }) {
  const level = c.roastLevels[idx];
  return (
    <div data-rf-card className="relative rounded-[2rem] bg-krem p-4 text-hutan sm:p-5">
      <p className="sr-only" aria-live="polite">
        {c.t.roastWheel.live(level.label, level.taste)}
      </p>

      <RoastPhoto c={c} idx={idx} prevPhoto={prevPhoto} />

      <div className="grid">
        {c.roastLevels.map((r, i) => (
          <RoastPanel key={r.id} c={c} level={r} index={i} active={i === idx} />
        ))}
      </div>
    </div>
  );
}
