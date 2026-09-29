import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n/config";

/** URL tanpa kode bahasa (mis. "/" atau "/shop") dialihkan ke bahasa default. */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // lewati file Next.js, API, dan file statis (apa pun yang punya ekstensi)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
