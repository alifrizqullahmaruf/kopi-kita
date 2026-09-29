"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { getContent, type Locale } from "@/lib/i18n";
import { BeanIcon, WhatsAppIcon } from "./Illustrations";
import LangSwitch from "./LangSwitch";

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const c = getContent(locale);
  const { t } = c;

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (path: string) => {
    const href = c.href(path);
    return path === "/" ? pathname === href : pathname.startsWith(href);
  };

  return (
    <header className="relative z-40">
      {/* Bar info statis (tidak bergerak) */}
      <div className="bg-hutan text-krem">
        <ul className="mx-auto flex max-w-6xl items-center justify-center gap-x-4 px-5 py-2 text-[0.8rem] font-semibold sm:gap-x-5">
          {t.header.info(site.city, t.site.roastDays).map((text, i) => (
            <li
              key={text}
              className={`${["flex", "hidden sm:flex", "hidden md:flex"][i]} items-center gap-4 whitespace-nowrap sm:gap-5`}
            >
              {i > 0 && <BeanIcon className="opacity-70" />}
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href={c.href("/")} className="flex items-center gap-3" aria-label={t.header.homeAria(site.name)}>
          <img src="/logo.svg" alt="" width={44} height={44} className="h-11 w-11" />
          <span className="font-display text-[1.6rem] leading-none">Kopi Kita</span>
        </Link>

        <nav aria-label={t.header.mainNav} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {t.nav.map((n) => (
              <li key={n.path}>
                <Link
                  href={c.href(n.path)}
                  aria-current={isActive(n.path) ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors duration-200 hover:bg-hutan hover:text-krem ${
                    isActive(n.path) ? "bg-hutan/10" : ""
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch locale={locale} label={t.langSwitch.aria} className="hidden sm:flex" />
          <a
            href={c.wa.hello()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid hidden !py-2.5 sm:inline-flex"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {t.header.order}
          </a>
          <button
            type="button"
            className="btn btn-ghost !px-4 !py-2.5 md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            data-menu-toggle
            onClick={() => setOpen((v) => !v)}
          >
            {open ? t.header.close : t.header.menu}
          </button>
        </div>
      </div>

      <nav id="menu-mobile" hidden={!open} aria-label={t.header.mobileNav} className="border-y-2 border-hutan bg-kertas md:hidden">
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
          {t.nav.map((n) => (
            <li key={n.path}>
              <Link
                href={c.href(n.path)}
                className="font-display block py-3 text-3xl"
                aria-current={isActive(n.path) ? "page" : undefined}
              >
                {n.label}
              </Link>
            </li>
          ))}
          {/* di HP tombol bahasa pindah ke sini agar header tidak sesak */}
          <li className="py-3 sm:hidden">
            <LangSwitch locale={locale} label={t.langSwitch.aria} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
