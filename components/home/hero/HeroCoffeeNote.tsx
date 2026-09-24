import Link from "next/link";
import { rupiah } from "@/lib/site";
import { BeanIcon, HandArrow } from "@/components/Illustrations";

/** Anotasi kiri: kopi apa yang dipakai di gelas ini. */
export default function HeroCoffeeNote() {
  return (
    <div data-hero-item className="absolute top-[4%] left-[1%] hidden md:block lg:left-[2%] xl:left-[4%]">
      <div className="relative">
        <Link
          href="/produk?sangrai=terang"
          className="group block w-60 -rotate-2 rounded-2xl border-2 border-hutan bg-kertas/90 p-4 transition-transform duration-300 hover:-translate-y-1"
        >
          <p className="font-hand text-lg leading-none opacity-80">diseduh dari</p>
          <p className="font-display mt-1 text-2xl leading-none">Gayo Wine</p>
          <p className="mt-2 flex items-center gap-2 text-sm">
            <span className="flex gap-0.5" aria-label="Sangrai terang, 1 dari 4">
              <BeanIcon className="text-[#B88A58]" />
              <BeanIcon className="text-hutan/20" />
              <BeanIcon className="text-hutan/20" />
              <BeanIcon className="text-hutan/20" />
            </span>
            sangrai terang
          </p>
          <p className="mt-1 text-sm opacity-80">Anggur, tape, cokelat susu</p>
          <p className="mt-3 flex items-baseline gap-2 border-t-2 border-dashed border-hutan/20 pt-2">
            <span className="font-bold whitespace-nowrap">mulai {rupiah(110000)}</span>
            <span className="rounded-full bg-hutan/10 px-2 py-0.5 text-xs font-semibold whitespace-nowrap">200 g</span>
          </p>
        </Link>
        {/* panah dari sisi kanan kartu, melengkung turun ke gelas */}
        <HandArrow className="absolute top-[42%] left-full ml-2 w-20 rotate-[8deg] text-hutan lg:w-24" />
      </div>
    </div>
  );
}
