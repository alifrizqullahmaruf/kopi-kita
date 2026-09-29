import Doodle from "@/components/Doodle";
import { HandArrow } from "@/components/Illustrations";

/**
 * Hiasan di sekitar dial (desktop saja):
 * matahari di sisi kuadran Terang, bulan di sisi kuadran Gelap,
 * dan catatan tangan + panah yang mengarah ke tombol Putar.
 */
export default function DialDecor({ label }: { label: string }) {
  return (
    <div aria-hidden="true" className="pointer-events-none hidden lg:block">
      {/* matahari ↔ kuadran Terang (kiri-atas) */}
      <div className="absolute top-[4%] right-full mr-3 w-12 text-krem/55">
        <Doodle name="matahari" className="doodle-hop-sun w-full" />
      </div>
      {/* bulan ↔ kuadran Gelap (kiri-bawah) */}
      <div className="absolute bottom-[4%] right-full mr-4 w-10 text-krem/55">
        <Doodle name="bulan" className="doodle-hop-cup w-full" />
      </div>

      {/* catatan tangan, panah turun ke tombol Putar */}
      <div className="absolute top-[72%] left-full ml-3 w-28 text-krem/80">
        <p className="font-hand rotate-[-6deg] text-2xl leading-none">{label}</p>
        <HandArrow className="mt-1 w-16 -scale-x-100 rotate-[10deg]" />
      </div>
    </div>
  );
}
