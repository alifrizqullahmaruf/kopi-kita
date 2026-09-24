"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger, SplitText } from "@/lib/gsap";

/**
 * Satu "mesin animasi" untuk semua halaman. Komponen halaman cukup memberi
 * atribut data-* pada elemen, tidak perlu menulis GSAP sendiri:
 *
 *  data-hero                 → wadah intro halaman (dijalankan sekali saat halaman dibuka)
 *    data-hero-item="split"  → judul muncul per kata
 *    data-hero-item="rise"   → naik dari bawah (visual produk)
 *    data-hero-item="pop"    → membesar dengan pantulan (ilustrasi kecil)
 *    data-hero-item          → fade + geser sedikit ke atas (default)
 *  data-split                → judul yang muncul per kata saat di-scroll
 *  data-reveal-group         → wadah; anak data-reveal-item muncul bergantian
 *  data-slant                → section bertepi miring; kemiringannya berubah saat scroll
 *  data-progress             → garis yang memanjang mengikuti scroll (scaleY)
 *  data-parallax             → foto bergeser pelan saat di-scroll
 */
export default function PageMotion() {
  const pathname = usePathname();

  useEffect(() => {
    let ctx: gsap.Context | undefined;
    let mm: gsap.MatchMedia | undefined;
    const cleanups: (() => void)[] = [];
    let cancelled = false;

    const run = () => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        mm = gsap.matchMedia();

        mm.add("(prefers-reduced-motion: reduce)", () => {
          gsap.set("[data-hero-item], [data-split], [data-reveal-item]", { autoAlpha: 1 });
        });

        mm.add("(prefers-reduced-motion: no-preference)", () => {
          // ---------- 1. Intro hero ----------
          const hero = document.querySelector<HTMLElement>("[data-hero]");
          if (hero) {
            const tl = gsap.timeline({ delay: 0.15 });
            hero.querySelectorAll<HTMLElement>("[data-hero-item]").forEach((el, i) => {
              const kind = el.dataset.heroItem;
              const at = i === 0 ? 0 : "-=0.55";
              if (kind === "split") {
                gsap.set(el, { autoAlpha: 1 });
                const split = SplitText.create(el, { type: "words" });
                tl.from(
                  split.words,
                  { autoAlpha: 0, yPercent: 60, rotate: 4, duration: 0.8, stagger: 0.07 },
                  at,
                );
              } else if (kind === "rise") {
                tl.fromTo(
                  el,
                  { autoAlpha: 0, y: 180 },
                  { autoAlpha: 1, y: 0, duration: 1.3, ease: "expo.out" },
                  at,
                );
              } else if (kind === "pop") {
                tl.fromTo(
                  el,
                  { autoAlpha: 0, scale: 0.3 },
                  { autoAlpha: 1, scale: 1, duration: 0.7, ease: "back.out(2.2)" },
                  "-=0.6",
                );
              } else {
                tl.fromTo(el, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.7 }, at);
              }
            });
          }

          // ---------- 2. Judul per kata saat scroll ----------
          gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
            gsap.set(el, { autoAlpha: 1 });
            const split = SplitText.create(el, { type: "words" });
            gsap.from(split.words, {
              opacity: 0.12,
              yPercent: 45,
              duration: 0.7,
              stagger: 0.06,
              scrollTrigger: { trigger: el, start: "top 85%" },
            });
          });

          // ---------- 3. Reveal bergantian ----------
          gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
            const items = Array.from(group.querySelectorAll<HTMLElement>("[data-reveal-item]")).filter(
              (el) => el.closest("[data-reveal-group]") === group,
            );
            if (!items.length) return;
            gsap.fromTo(
              items,
              { autoAlpha: 0, y: 36 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.09,
                scrollTrigger: { trigger: group, start: "top 80%" },
              },
            );
          });

          // ---------- 4. Tepi miring yang bergerak ----------
          gsap.utils.toArray<HTMLElement>("[data-slant]").forEach((el) => {
            gsap.fromTo(
              el,
              { "--cut": "9vw" },
              {
                "--cut": "1.5vw",
                ease: "none",
                scrollTrigger: { trigger: el, start: "top bottom", end: "top 35%", scrub: true },
              },
            );
          });

          // ---------- 5. Parallax foto ----------
          gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
            gsap.fromTo(
              el,
              { yPercent: -6 },
              {
                yPercent: 6,
                ease: "none",
                scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
              },
            );
          });

          // ---------- 6. Parallax foto hero ----------
          gsap.utils.toArray<HTMLElement>("[data-hero-parallax]").forEach((el) => {
            gsap.to(el, {
              yPercent: 14,
              ease: "none",
              scrollTrigger: { trigger: el.closest("[data-hero]"), start: "top top", end: "bottom top", scrub: true },
            });
          });

          // ---------- 7. Akordeon (details[data-accordion]) buka-tutup halus ----------
          document.querySelectorAll<HTMLDetailsElement>("details[data-accordion]").forEach((d) => {
            const summary = d.querySelector("summary");
            const body = d.querySelector<HTMLElement>("[data-acc-body]");
            if (!summary || !body) return;
            const onClick = (e: Event) => {
              e.preventDefault();
              if (d.open) {
                gsap.to(body, {
                  height: 0,
                  opacity: 0,
                  duration: 0.35,
                  ease: "power2.inOut",
                  overwrite: true,
                  onComplete: () => {
                    d.open = false;
                    gsap.set(body, { clearProps: "height,opacity" });
                  },
                });
              } else {
                d.open = true;
                gsap.fromTo(
                  body,
                  { height: 0, opacity: 0 },
                  { height: "auto", opacity: 1, duration: 0.45, ease: "power3.out", overwrite: true },
                );
                gsap.fromTo(body.firstElementChild, { y: -8 }, { y: 0, duration: 0.45, ease: "power3.out" });
              }
            };
            summary.addEventListener("click", onClick);
            cleanups.push(() => summary.removeEventListener("click", onClick));
          });

          // ---------- 8. Garis progres ----------
          gsap.utils.toArray<HTMLElement>("[data-progress]").forEach((el) => {
            gsap.fromTo(
              el,
              { scaleY: 0 },
              {
                scaleY: 1,
                ease: "none",
                transformOrigin: "top center",
                scrollTrigger: {
                  trigger: el.parentElement,
                  start: "top 65%",
                  end: "bottom 65%",
                  scrub: true,
                },
              },
            );
          });
        });
      });
      ScrollTrigger.refresh();
    };

    if (document.fonts?.ready) document.fonts.ready.then(run);
    else run();

    return () => {
      cancelled = true;
      cleanups.forEach((fn) => fn());
      mm?.revert();
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
