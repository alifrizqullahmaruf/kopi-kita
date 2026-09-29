"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/gsap";
import { locales, type Locale } from "@/lib/i18n";

const SLIDE_MS = 380;

/**
 * Tombol EN / ID dengan pil yang meluncur. Mengganti segmen bahasa di URL tanpa
 * mengubah halaman, dan membawa query string (mis. ?roast=light).
 * Karena ganti bahasa = layout dimuat ulang, pil digeser dulu, baru pindah halaman.
 *
 * `className` mengatur tampilan (mis. "hidden sm:flex"); default-nya "inline-flex".
 * Tinggi 44px = tombol .btn di header.
 */
export default function LangSwitch({ locale, label, className = "inline-flex" }: { locale: Locale; label: string; className?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [target, setTarget] = useState<Locale>(locale);
  const swap = (to: Locale) => pathname.replace(/^\/(en|id)(?=\/|$)/, `/${to}`);
  const index = locales.indexOf(target);

  // siapkan halaman bahasa lain lebih dulu supaya perpindahannya cepat
  useEffect(() => {
    locales.forEach((l) => l !== locale && router.prefetch(swap(l)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, locale]);

  const go = (to: Locale) => {
    if (to === locale || target !== locale) return; // sudah aktif / sedang berpindah
    const href = swap(to) + window.location.search;
    if (prefersReducedMotion()) return router.push(href);
    setTarget(to);
    setTimeout(() => router.push(href), SLIDE_MS);
  };

  return (
    <nav
      aria-label={label}
      className={`group relative isolate h-11 items-stretch rounded-full border-2 border-hutan p-0.5 text-sm font-bold ${className}`}
    >
      {/* pil yang meluncur di belakang pilihan aktif */}
      <span
        aria-hidden="true"
        className="absolute inset-y-0.5 left-0.5 -z-10 w-10 rounded-full bg-hutan shadow-[0_4px_10px_-4px_rgba(31,59,45,.6)] transition-transform ease-[cubic-bezier(.34,1.56,.64,1)] motion-reduce:transition-none"
        style={{ transform: `translateX(${index * 100}%)`, transitionDuration: `${SLIDE_MS}ms` }}
      />
      {locales.map((l) => {
        const on = l === target;
        return (
          <Link
            key={l}
            href={swap(l)}
            hrefLang={l}
            lang={l}
            aria-current={l === locale ? "true" : undefined}
            onClick={(e) => {
              e.preventDefault();
              go(l);
            }}
            className={`flex w-10 items-center justify-center rounded-full uppercase transition-[color,transform] duration-300 active:scale-90 ${
              on ? "text-krem" : "text-hutan hover:-translate-y-px hover:text-hutan/70"
            }`}
          >
            {l}
          </Link>
        );
      })}
    </nav>
  );
}
