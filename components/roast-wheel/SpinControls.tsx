/** Tombol "Putar" di bawah dial + petunjuk kecil. */
export default function SpinControls({ spinning, onSpin }: { spinning: boolean; onSpin: () => void }) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
      <button type="button" onClick={onSpin} data-rf-spin disabled={spinning} className="btn btn-solid disabled:opacity-60">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 12a8 8 0 1 1-2.34-5.66" />
          <path d="M20 4v5h-5" />
        </svg>
        {spinning ? "Memutar…" : "Putar, pilihkan untukku"}
      </button>
      <p className="font-hand text-xl text-krem/80">atau klik salah satu</p>
    </div>
  );
}
