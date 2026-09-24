"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, waLink } from "@/lib/site";
import { BeanIcon, WhatsAppIcon } from "./Illustrations";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="relative z-40">
      {/* Bar info statis (tidak bergerak) */}
      <div className="bg-hutan text-krem">
        <ul className="mx-auto flex max-w-6xl items-center justify-center gap-x-4 px-5 py-2 text-[0.8rem] font-semibold sm:gap-x-5">
          {[
            { text: `Roastery rumahan di ${site.city}`, cls: "flex" },
            { text: `Sangrai tiap ${site.roastDays}`, cls: "hidden sm:flex" },
            { text: "Kirim ke seluruh Indonesia", cls: "hidden md:flex" },
          ].map((item, i) => (
            <li key={item.text} className={`${item.cls} items-center gap-4 whitespace-nowrap sm:gap-5`}>
              {i > 0 && <BeanIcon className="opacity-70" />}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name}, ke beranda`}>
          {/* Logo klien: ganti /public/logo.svg */}
          <img src="/logo.svg" alt="" width={44} height={44} className="h-11 w-11" />
          <span className="font-display text-[1.6rem] leading-none">Kopi Kita</span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => {
              const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors duration-200 hover:bg-hutan hover:text-krem ${
                      active ? "bg-hutan/10" : ""
                    }`}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid hidden !py-2.5 sm:inline-flex"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Pesan
          </a>
          <button
            type="button"
            className="btn btn-ghost !px-4 !py-2.5 md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            data-menu-toggle
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Tutup" : "Menu"}
          </button>
        </div>
      </div>

      {(
        <nav id="menu-mobile" hidden={!open} aria-label="Navigasi utama mobile" className="border-y-2 border-hutan bg-kertas md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="font-display block py-3 text-3xl"
                  aria-current={pathname === n.href ? "page" : undefined}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
