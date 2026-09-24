import Doodle from "@/components/Doodle";

/** Doodle cangkir dan matahari di kiri-kanan judul. */
export default function HeroDoodles() {
  return (
    <>
      <div
        data-hero-item="pop"
        className="absolute top-3 left-4 hidden w-14 text-hutan sm:block xl:top-32 xl:left-[max(1.5rem,calc(50%-640px))] xl:w-28"
      >
        <Doodle name="cangkir" className="doodle-hop-cup w-full" />
      </div>
      <div
        data-hero-item="pop"
        className="absolute top-1 right-4 hidden w-16 text-hutan sm:block xl:top-8 xl:right-[max(1.5rem,calc(50%-640px))] xl:w-32"
      >
        <Doodle name="matahari" className="doodle-hop-sun w-full" />
      </div>
    </>
  );
}
