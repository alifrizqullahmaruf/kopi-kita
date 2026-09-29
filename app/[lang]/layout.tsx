import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "@fontsource-variable/bricolage-grotesque/standard.css";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource/caveat/600.css";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageMotion from "@/components/motion/PageMotion";
import { getContent, isLocale, locales } from "@/lib/i18n";
import { site } from "@/lib/site";

/** /en dan /id dibuat statis; kode bahasa lain ditolak dengan notFound() di bawah. */
export const generateStaticParams = () => locales.map((lang) => ({ lang }));

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { t } = getContent(lang);
  return {
    title: { default: t.meta.title, template: `%s · ${site.name}` },
    description: t.meta.description,
    openGraph: { locale: t.meta.ogLocale, siteName: site.name, type: "website" },
  };
}

export const viewport: Viewport = {
  themeColor: "#1f3b2d",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { t } = getContent(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        {/* Tandai JS aktif agar elemen animasi tidak berkedip; jaring pengaman 3 detik */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');setTimeout(function(){document.documentElement.classList.add('reveal-fallback')},3000);",
          }}
        />
      </head>
      <body className="min-h-dvh overflow-x-clip">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-hutan focus:px-4 focus:py-2 focus:text-krem"
        >
          {t.skipLink}
        </a>
        <Header locale={lang} />
        <main id="konten">{children}</main>
        <Footer locale={lang} />
        <WhatsAppFloat locale={lang} />
        <PageMotion />
      </body>
    </html>
  );
}
