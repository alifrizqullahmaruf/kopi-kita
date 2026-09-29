"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultLocale, getContent, isLocale } from "@/lib/i18n";

/** not-found tidak menerima params, jadi bahasanya dibaca dari segmen pertama URL. */
export default function NotFound() {
  const lang = usePathname()?.split("/")[1] ?? "";
  const c = getContent(isLocale(lang) ? lang : defaultLocale);
  const { t } = c;

  return (
    <section className="mx-auto max-w-6xl px-5 py-32 sm:px-8">
      <p className="font-hand text-2xl">{t.notFound.note}</p>
      <h1 className="font-display mt-2 text-6xl">{t.notFound.title}</h1>
      <p className="mt-5 max-w-md text-lg">{t.notFound.text}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={c.href("/")} className="btn btn-solid">{t.notFound.home}</Link>
        <Link href={c.href("/shop")} className="btn btn-ghost">{t.notFound.browse}</Link>
      </div>
    </section>
  );
}
