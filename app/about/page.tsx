import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaVisit from "@/components/CtaVisit";
import AboutPhotosSection from "@/components/about/AboutPhotosSection";
import ProcessSection from "@/components/about/ProcessSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description: "The story behind Kopi Kita Roastery, a home roastery in Yogyakarta, and how we roast our coffee.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        note={`from a small kitchen in ${site.city}`}
        title="A home roastery, making coffee to share"
        text="It started with one small roaster at home and friends who kept asking us to bring them coffee. Now it goes out to a lot more homes, but we still make it the same way."
      />
      <AboutPhotosSection />
      <ProcessSection />
      <CtaVisit title="Drop by, or message us first." />
    </>
  );
}
