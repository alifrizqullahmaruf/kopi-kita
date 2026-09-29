export const locales = ["en", "id"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

/** Awali path dengan kode bahasa: localeHref("id", "/shop") → "/id/shop" */
export const localeHref = (locale: Locale, path = "/") => `/${locale}${path === "/" ? "" : path}`;
