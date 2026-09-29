import type { Content } from "@/lib/i18n";

/** Tombol "Putar" di bawah dial + petunjuk kecil. */
export default function SpinControls({ c, spinning, onSpin }: { c: Content; spinning: boolean; onSpin: () => void }) {
  const { t } = c;
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
      <button type="button" onClick={onSpin} data-rf-spin disabled={spinning} className="btn btn-solid disabled:opacity-60">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 12a8 8 0 1 1-2.34-5.66" />
          <path d="M20 4v5h-5" />
        </svg>
        {spinning ? t.roastWheel.spinning : t.roastWheel.spin}
      </button>
      <p className="font-hand text-xl text-krem/80">{t.roastWheel.orTap}</p>
    </div>
  );
}
