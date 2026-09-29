import HeroSection from "@/components/home/HeroSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import RoastFinderSection from "@/components/home/RoastFinderSection";
import SubscribeSection from "@/components/home/SubscribeSection";
import BrewGuideSection from "@/components/home/BrewGuideSection";
import Testimonials from "@/components/Testimonials";
import PhotoMosaic from "@/components/PhotoMosaic";
import CtaVisit from "@/components/CtaVisit";
import type { Locale } from "@/lib/i18n";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const locale = (await params).lang as Locale; // sudah divalidasi di layout

  return (
    <>
      <HeroSection locale={locale} />
      <FeaturedSection locale={locale} />
      <RoastFinderSection locale={locale} />
      <SubscribeSection locale={locale} />
      <BrewGuideSection locale={locale} />
      <Testimonials locale={locale} />
      <PhotoMosaic locale={locale} />
      <CtaVisit locale={locale} />
    </>
  );
}
