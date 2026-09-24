"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { products, roastLevels, type RoastLevel } from "@/lib/data";
import { CatalogCard } from "./ProductCards";

type Filter = "semua" | RoastLevel;

export default function Catalog({ initial = "semua" }: { initial?: Filter }) {
  const [filter, setFilter] = useState<Filter>(initial);
  const root = useRef<HTMLDivElement>(null);
  const list = filter === "semua" ? products : products.filter((p) => p.roast === filter);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        "[data-catalog-item]",
        { autoAlpha: 0, y: 30, rotate: 1.5 },
        { autoAlpha: 1, y: 0, rotate: 0, duration: 0.6, stagger: 0.07, ease: "power3.out" },
      );
    },
    { scope: root, dependencies: [filter] },
  );

  const options: { id: Filter; label: string }[] = [
    { id: "semua", label: "Semua" },
    ...roastLevels.map((r) => ({ id: r.id, label: r.label })),
  ];

  return (
    <div ref={root}>
      <fieldset className="flex flex-wrap items-center gap-2">
        <legend className="font-hand mb-3 text-2xl">saring menurut tingkat sangrai</legend>
        {options.map((o) => {
          const active = o.id === filter;
          return (
            <button
              key={o.id}
              type="button"
              aria-pressed={active}
              data-filter={o.id}
              onClick={() => setFilter(o.id)}
              className={`rounded-full border-2 border-hutan px-4 py-2 text-sm font-bold transition-colors ${
                active ? "bg-hutan text-krem" : "hover:bg-hutan/10"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </fieldset>

      <p data-catalog-count className="mt-6 text-sm opacity-75" aria-live="polite">
        Menampilkan {list.length} kopi
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <CatalogCard key={p.slug} p={p} />
        ))}
      </div>
    </div>
  );
}
