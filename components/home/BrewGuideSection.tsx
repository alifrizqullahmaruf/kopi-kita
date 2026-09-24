import SectionHeading from "@/components/SectionHeading";
import BrewGuide from "@/components/BrewGuide";

/** Panduan seduh dengan alat rumahan. */
export default function BrewGuideSection() {
  return (
    <section aria-labelledby="judul-seduh" className="bg-daun/35 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div id="judul-seduh">
          <SectionHeading
            note="sudah punya kopinya?"
            title="Seduh dengan alat yang ada di rumah"
            text="Takaran awal yang kami pakai sendiri. Setelah itu, sesuaikan dengan lidahmu."
          />
        </div>
        <div data-reveal-group className="mt-14">
          <BrewGuide />
        </div>
      </div>
    </section>
  );
}
