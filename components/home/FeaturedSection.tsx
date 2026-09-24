import Link from "next/link";
import { products } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import { BentoPhoto } from "@/components/ProductCards";

/** Produk unggulan dalam susunan bento. */
export default function FeaturedSection() {
  const featured = products.filter((p) => p.featured);

  return (
    <section aria-labelledby="judul-produk" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <div id="judul-produk">
        <SectionHeading
          note="di mesin sangrai minggu ini"
          title="Kopi yang sedang kami sangrai"
          text="Empat kopi yang paling sering dipesan ulang. Semuanya bisa biji utuh atau digiling sesuai alat seduhmu."
          action={
            <Link href="/produk" className="font-semibold underline underline-offset-4">
              Lihat semua kopi
            </Link>
          }
        />
      </div>
      <div data-reveal-group className="mt-14 grid gap-5 md:grid-cols-4 md:grid-rows-[auto_auto]">
        <BentoPhoto p={featured[0]} size="large" />
        <BentoPhoto p={featured[1]} size="wide" />
        <BentoPhoto p={featured[2]} size="small" />
        <BentoPhoto p={featured[3]} size="small" />
      </div>
    </section>
  );
}
