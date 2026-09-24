import type { Ref } from "react";

/** Jarum dial; rotasinya dianimasikan GSAP dari RoastWheel. */
export default function DialNeedle({ ref }: { ref: Ref<HTMLDivElement> }) {
  return (
    <div
      ref={ref}
      data-rf-needle
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 left-1/2 h-0 w-[26%] origin-left"
    >
      <svg viewBox="0 0 100 24" className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-visible">
        <path d="M0 12 H84" stroke="#ede3cf" strokeWidth="12" strokeLinecap="round" />
        <path d="M70 -1 L101 12 L70 25 Z" fill="#ede3cf" stroke="#ede3cf" strokeWidth="3" strokeLinejoin="round" />
        <path d="M0 12 H84" stroke="#1f3b2d" strokeWidth="6" strokeLinecap="round" />
        <path d="M73 3 L95 12 L73 21 Z" fill="#1f3b2d" />
      </svg>
    </div>
  );
}
