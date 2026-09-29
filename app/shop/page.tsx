import type { Metadata } from "next";
import Catalog from "@/components/Catalog";
import PageHero from "@/components/PageHero";
import CtaVisit from "@/components/CtaVisit";
import { roastLevels, type RoastLevel } from "@/lib/data";

export const metadata: Metadata = {
  title: "Shop",
  description: "Every coffee Kopi Kita Roastery is roasting right now, from light to dark. Order on WhatsApp.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ roast?: string }>;
}) {
  const { roast } = await searchParams;
  const initial = roastLevels.some((r) => r.id === roast) ? (roast as RoastLevel) : "all";

  return (
    <>
      <PageHero
        note="in stock this week"
        title="All our coffee"
        text="Every bag has its roast date written on it. Pick a coffee, send us a message, and we'll help you choose the right grind for your brewer."
      />
      <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <Catalog initial={initial} />
      </section>
      <CtaVisit
        title="Can't find what you're after?"
        text="What we have changes with the harvest. Ask us what's coming next, or let us pick something for you."
      />
    </>
  );
}
