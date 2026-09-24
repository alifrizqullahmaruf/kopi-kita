import { roastLevels } from "@/lib/data";
import RoastPhoto from "./RoastPhoto";
import RoastPanel from "./RoastPanel";

/**
 * Kartu hasil. Semua panel dirender bertumpuk di sel grid yang sama; hanya yang aktif terlihat.
 * Tinggi kartu = panel tertinggi, sehingga kartu tidak memanjang/memendek saat berganti.
 */
export default function RoastResultCard({ idx, prevPhoto }: { idx: number; prevPhoto: string }) {
  const level = roastLevels[idx];
  return (
    <div data-rf-card className="relative rounded-[2rem] bg-krem p-4 text-hutan sm:p-5">
      <p className="sr-only" aria-live="polite">
        Sangrai {level.label.toLowerCase()}: {level.taste}
      </p>

      <RoastPhoto idx={idx} prevPhoto={prevPhoto} />

      <div className="grid">
        {roastLevels.map((r, i) => (
          <RoastPanel key={r.id} level={r} index={i} active={i === idx} />
        ))}
      </div>
    </div>
  );
}
