"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { roastLevels } from "@/lib/data";
import { angleOf, indexAt } from "./roast-wheel/constants";
import RoastDial from "./roast-wheel/RoastDial";
import RoastResultCard from "./roast-wheel/RoastResultCard";

/**
 * Dial sangrai: roda 4 kuadran, urut searah jarum jam dari Terang ke Gelap.
 * Jarum di tengah berputar ke kuadran yang dipilih (selalu searah jarum jam,
 * seperti suhu yang terus naik saat menyangrai). Tombol "Putar" memutar jarum
 * beberapa kali lalu berhenti di tingkat sangrai acak.
 *
 * File ini hanya memegang state & animasi; tampilannya ada di ./roast-wheel/.
 */

/** `heading` ditaruh di kolom kiri, di atas dial. */
export default function RoastWheel({ heading }: { heading?: React.ReactNode }) {
  const [idx, setIdx] = useState(1);
  const [spinning, setSpinning] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const needle = useRef<HTMLDivElement>(null);
  const rot = useRef(angleOf(1)); // rotasi kumulatif jarum
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const first = useRef(true);
  const level = roastLevels[idx];

  // muat semua foto lebih dulu supaya pergantian tidak berkedip
  useEffect(() => {
    roastLevels.forEach((r) => {
      const img = new Image();
      img.src = r.photo;
    });
  }, []);

  // animasi isi kartu & warna biji tiap kali pilihan berubah
  // foto sebelumnya dipakai sebagai lapisan bawah agar pergantian berupa crossfade (tanpa kilatan)
  const prevPhoto = useRef(roastLevels[1].photo);

  useGSAP(
    () => {
      const card = root.current?.querySelector<HTMLElement>("[data-rf-card]");
      const bean = card?.querySelector<SVGElement>("[data-bean-fill]");
      const panel = card?.querySelector<HTMLElement>(`[data-rf-panel="${idx}"]`);
      if (first.current || prefersReducedMotion()) {
        if (bean) gsap.set(bean, { fill: level.bean });
        gsap.set(needle.current, { rotate: rot.current });
        first.current = false;
        prevPhoto.current = level.photo;
        return;
      }
      const ease = "power2.out";
      if (bean) gsap.to(bean, { fill: level.bean, duration: 0.8, ease, overwrite: true });
      gsap.fromTo("[data-rf-bean]", { rotate: -25, scale: 0.9 }, { rotate: 0, scale: 1, duration: 1.1, ease: "elastic.out(1, 0.6)", overwrite: true });
      // foto baru memudar di atas foto lama
      gsap.fromTo("[data-rf-photo]", { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1, duration: 0.9, ease, overwrite: true });
      // isi teks & daftar kopi masuk bergantian
      if (panel) {
        gsap.fromTo(
          panel.querySelectorAll("[data-rf-swap]"),
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.07, ease, overwrite: true },
        );
      }
      prevPhoto.current = level.photo;
    },
    { scope: root, dependencies: [idx] },
  );

  /** tandai kuadran yang sedang dilewati jarum (tanpa re-render React) */
  const markPassing = (deg: number | null) => {
    const at = deg === null ? -1 : indexAt(deg);
    buttons.current.forEach((b, i) => b?.toggleAttribute("data-passing", i === at));
  };

  /** putar jarum searah jarum jam ke tingkat i; extraTurns untuk efek "spin" */
  const turnTo = (i: number, extraTurns = 0) => {
    const delta = ((((angleOf(i) - rot.current) % 360) + 360) % 360) + 360 * extraTurns;
    rot.current += delta;
    if (prefersReducedMotion()) {
      gsap.set(needle.current, { rotate: rot.current });
      setIdx(i);
      return;
    }
    const spin = extraTurns > 0;
    setSpinning(spin);
    gsap.to(needle.current, {
      rotate: rot.current,
      duration: spin ? 2.4 : 0.7,
      ease: spin ? "power4.out" : "back.out(1.6)",
      overwrite: true,
      onUpdate: spin
        ? function (this: gsap.core.Tween) {
            markPassing(Number(gsap.getProperty(needle.current, "rotate")));
          }
        : undefined,
      onComplete: () => {
        markPassing(null);
        setSpinning(false);
        if (spin) setIdx(i);
      },
    });
    if (!spin) setIdx(i);
  };

  const spinRandom = () => {
    let next = Math.floor(Math.random() * roastLevels.length);
    if (next === idx) next = (next + 1 + Math.floor(Math.random() * 3)) % 4;
    turnTo(next, 2);
  };

  const onKey = (e: React.KeyboardEvent) => {
    const dir =
      e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!dir || spinning) return;
    e.preventDefault();
    const next = (idx + dir + 4) % 4;
    turnTo(next);
    buttons.current[next]?.focus();
  };

  return (
    <div ref={root} className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
      <div className="flex flex-col gap-10 lg:gap-8">
        {heading}
        <RoastDial
          idx={idx}
          spinning={spinning}
          needleRef={needle}
          buttonsRef={buttons}
          onSelect={turnTo}
          onKeyDown={onKey}
          onSpin={spinRandom}
        />
      </div>
      <RoastResultCard idx={idx} prevPhoto={prevPhoto.current} />
    </div>
  );
}
