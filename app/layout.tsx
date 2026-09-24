import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque/standard.css";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource/caveat/600.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageMotion from "@/components/motion/PageMotion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Biji kopi segar dari Yogyakarta`,
    template: `%s · ${site.name}`,
  },
  description:
    "Roastery kopi rumahan di Yogyakarta. Biji kopi Nusantara yang disangrai tiap minggu, bisa beli satuan atau langganan bulanan. Pesan lewat WhatsApp.",
  openGraph: { locale: "id_ID", siteName: site.name, type: "website" },
};

export const viewport: Viewport = {
  themeColor: "#1f3b2d",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
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
          Langsung ke konten
        </a>
        <Header />
        <main id="konten">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <PageMotion />
      </body>
    </html>
  );
}
