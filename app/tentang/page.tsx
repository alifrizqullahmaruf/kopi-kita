import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaVisit from "@/components/CtaVisit";
import AboutPhotosSection from "@/components/tentang/AboutPhotosSection";
import ProcessSection from "@/components/tentang/ProcessSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang kami",
  description: "Cerita Kopi Kita Roastery, roastery kopi rumahan di Yogyakarta, dan cara kami menyangrai.",
};

export default function TentangPage() {
  return (
    <>
      {/* TODO: ganti cerita ini dengan cerita asli pemilik */}
      <PageHero
        note={`dari dapur kecil di ${site.city}`}
        title="Roastery rumahan, kopi untuk dibagi"
        text="Kami mulai dengan satu mesin sangrai kecil di rumah dan teman-teman yang selalu minta dibawakan kopi. Sekarang kopinya dikirim ke lebih banyak rumah, dengan cara yang tetap sama."
      />
      <AboutPhotosSection />
      <ProcessSection />
      <CtaVisit title="Mampir, atau chat dulu" />
    </>
  );
}
