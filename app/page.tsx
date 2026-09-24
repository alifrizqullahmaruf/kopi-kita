import HeroSection from "@/components/home/HeroSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import RoastFinderSection from "@/components/home/RoastFinderSection";
import SubscribeSection from "@/components/home/SubscribeSection";
import BrewGuideSection from "@/components/home/BrewGuideSection";
import Testimonials from "@/components/Testimonials";
import PhotoMosaic from "@/components/PhotoMosaic";
import CtaVisit from "@/components/CtaVisit";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <RoastFinderSection />
      <SubscribeSection />
      <BrewGuideSection />
      <Testimonials />
      <PhotoMosaic />
      <CtaVisit />
    </>
  );
}
