import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaVisit from "@/components/CtaVisit";
import { WhatsAppIcon } from "@/components/Illustrations";
import PlansSection from "@/components/langganan/PlansSection";
import HowItWorksSection from "@/components/langganan/HowItWorksSection";
import FaqSection from "@/components/langganan/FaqSection";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Langganan",
  description: "Langganan kopi bulanan dari Kopi Kita Roastery. Bisa ganti kopi atau jeda kapan saja.",
};

export default function LanggananPage() {
  return (
    <>
      <PageHero
        note="langganan bulanan"
        title="Kopi segar, tanpa perlu ingat beli lagi"
        text="Pilih paket, kami sangrai dan kirim di minggu pertama tiap bulan. Mau ganti kopi atau libur sebulan? Cukup kabari lewat WhatsApp."
      >
        <a href={waLink("Halo Kopi Kita Roastery, saya mau mulai langganan.")} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
          <WhatsAppIcon className="h-5 w-5" />
          Mulai langganan
        </a>
      </PageHero>
      <PlansSection />
      <HowItWorksSection />
      <FaqSection />
      <CtaVisit title="Siap mulai langganan?" />
    </>
  );
}
