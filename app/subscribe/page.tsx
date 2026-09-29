import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaVisit from "@/components/CtaVisit";
import { WhatsAppIcon } from "@/components/Illustrations";
import PlansSection from "@/components/subscribe/PlansSection";
import HowItWorksSection from "@/components/subscribe/HowItWorksSection";
import FaqSection from "@/components/subscribe/FaqSection";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Subscribe",
  description: "A monthly coffee subscription from Kopi Kita Roastery. Swap coffees or pause whenever you like.",
};

export default function SubscribePage() {
  return (
    <>
      <PageHero
        note="monthly subscription"
        title="Fresh coffee you never have to remember to buy"
        text="Pick a plan, and we'll roast and ship it in the first week of every month. Want a different coffee, or a month off? Just tell us on WhatsApp."
      >
        <a href={waLink("Hi Kopi Kita Roastery, I'd like to start a subscription.")} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
          <WhatsAppIcon className="h-5 w-5" />
          Start my subscription
        </a>
      </PageHero>
      <PlansSection />
      <HowItWorksSection />
      <FaqSection />
      <CtaVisit title="Ready when you are." />
    </>
  );
}
