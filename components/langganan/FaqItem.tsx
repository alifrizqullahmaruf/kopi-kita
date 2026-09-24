/** Satu pertanyaan FAQ yang bisa dibuka-tutup (dianimasikan lewat data-accordion). */
export default function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details data-reveal-item data-accordion className="group">
      <summary className="-mx-3 flex cursor-pointer list-none items-center justify-between gap-6 rounded-2xl px-3 py-5 text-lg font-bold transition-colors hover:bg-hutan/5 [&::-webkit-details-marker]:hidden">
        {q}
        <span
          aria-hidden="true"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-hutan transition-[transform,background-color,color] duration-300 group-open:rotate-45 group-open:bg-hutan group-open:text-krem"
        >
          <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M8 2v12M2 8h12" />
          </svg>
        </span>
      </summary>
      <div data-acc-body className="overflow-hidden">
        <p className="max-w-2xl pb-6 leading-relaxed opacity-85">{a}</p>
      </div>
    </details>
  );
}
