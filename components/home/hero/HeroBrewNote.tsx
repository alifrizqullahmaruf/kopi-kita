import { BeanIcon } from "@/components/Illustrations";

/** Anotasi kanan: cara seduh. */
export default function HeroBrewNote() {
  return (
    <div data-hero-item className="absolute top-[10%] right-[4%] hidden items-start gap-2 md:flex lg:right-[8%]">
      <span className="mt-1 flex -rotate-12 gap-0.5 text-sangrai">
        <BeanIcon />
        <BeanIcon className="translate-y-1" />
      </span>
      <p className="font-hand w-40 rotate-[4deg] text-xl leading-tight">
        diseduh V60, lalu dituang ke atas es
      </p>
    </div>
  );
}
