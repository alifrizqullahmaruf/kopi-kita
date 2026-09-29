import SectionHeading from "@/components/SectionHeading";
import BrewGuide from "@/components/BrewGuide";

/** Panduan seduh dengan alat rumahan. */
export default function BrewGuideSection() {
  return (
    <section aria-labelledby="judul-seduh" className="bg-daun/35 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div id="judul-seduh">
          <SectionHeading
            note="got your beans?"
            title="Brew with whatever you have at home"
            text="These are the starting recipes we use ourselves. From there, adjust to your own taste."
          />
        </div>
        <div data-reveal-group className="mt-14">
          <BrewGuide />
        </div>
      </div>
    </section>
  );
}
