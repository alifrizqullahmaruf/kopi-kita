"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { brewGuides } from "@/lib/data";
import { SteamCup } from "./Illustrations";

/**
 * Panduan seduh: daftar alat di kiri (tab vertikal), rasio kopi:air
 * ditampilkan besar di kanan. Angka "berguling" saat alat diganti.
 */
export default function BrewGuide() {
  const [idx, setIdx] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const first = useRef(true);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const g = brewGuides[idx];

  useGSAP(
    () => {
      if (first.current || prefersReducedMotion()) {
        first.current = false;
        return;
      }
      gsap.fromTo("[data-bg-ratio]", { yPercent: 105 }, { yPercent: 0, duration: 0.7, ease: "expo.out" });
      gsap.fromTo(
        "[data-bg-swap]",
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.05, delay: 0.1 },
      );
    },
    { scope: root, dependencies: [idx] },
  );

  const onKey = (e: React.KeyboardEvent) => {
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (idx + dir + brewGuides.length) % brewGuides.length;
    setIdx(next);
    tabs.current[next]?.focus();
  };

  return (
    <div
      ref={root}
      data-reveal-item
      className="grid overflow-hidden rounded-[2rem] border-2 border-hutan bg-kertas md:grid-cols-[minmax(220px,0.8fr)_2fr]"
    >
      <div role="tablist" aria-label="Alat seduh" aria-orientation="vertical" onKeyDown={onKey} className="flex flex-row divide-x-2 divide-hutan/20 overflow-x-auto border-b-2 border-hutan md:flex-col md:divide-x-0 md:divide-y-2 md:border-r-2 md:border-b-0">
        {brewGuides.map((b, i) => {
          const active = i === idx;
          return (
            <button
              key={b.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              id={`tab-${b.id}`}
              role="tab"
              data-bg-idx={i}
              aria-selected={active}
              aria-controls="panel-seduh"
              tabIndex={active ? 0 : -1}
              onClick={() => setIdx(i)}
              className={`font-display shrink-0 px-6 py-5 text-left text-2xl transition-colors md:flex-1 md:text-3xl ${
                active ? "bg-hutan text-krem" : "hover:bg-daun/40"
              }`}
            >
              {b.name}
            </button>
          );
        })}
      </div>

      <div id="panel-seduh" role="tabpanel" aria-labelledby={`tab-${g.id}`} className="relative p-6 sm:p-10">
        <SteamCup className="wobble-slow absolute top-6 right-6 w-16 text-hutan/60 sm:w-20" />
        <p className="font-hand text-2xl">kopi : air</p>
        <div className="overflow-hidden">
          <p data-bg-ratio className="font-display text-[clamp(6rem,17vw,12rem)] leading-[0.85] tabular-nums">
            {g.ratio}
          </p>
        </div>
        <dl className="mt-6 grid grid-cols-3 gap-4 border-t-2 border-dashed border-hutan/25 pt-5">
          {[
            ["Gilingan", g.grind],
            ["Suhu air", g.temp],
            ["Waktu", g.time],
          ].map(([k, v]) => (
            <div key={k} data-bg-swap>
              <dt className="text-sm opacity-70">{k}</dt>
              <dd data-bg-val className="mt-1 text-lg font-bold">{v}</dd>
            </div>
          ))}
        </dl>
        <p data-bg-swap data-bg-steps className="mt-5 max-w-lg leading-relaxed">
          {g.steps}
        </p>
      </div>
    </div>
  );
}
