import { roastLevels } from "@/lib/data";
import { Bean } from "@/components/Illustrations";

/**
 * Foto contoh sajian dengan judul rasa di atasnya. Foto sebelumnya dipakai
 * sebagai lapisan bawah agar pergantian berupa crossfade (tanpa kilatan).
 */
export default function RoastPhoto({ idx, prevPhoto }: { idx: number; prevPhoto: string }) {
  const level = roastLevels[idx];
  return (
    <div className="relative aspect-2/1 overflow-hidden rounded-[1.5rem] bg-kertas">
      <img
        data-rf-photo-prev
        src={prevPhoto}
        alt=""
        aria-hidden="true"
        width={825}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover object-[50%_42%]"
      />
      <img
        data-rf-photo
        src={level.photo}
        alt={`Contoh ${level.serve} dari kopi sangrai ${level.label.toLowerCase()}`}
        width={825}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover object-[50%_42%]"
      />

      {/* gradasi supaya judul terbaca di atas foto */}
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-hutan/85 via-hutan/25 to-transparent" />

      {/* biji kecil di pojok; warnanya dianimasikan GSAP dari RoastWheel */}
      <div data-rf-bean className="absolute top-3 right-3 grid h-14 w-14 place-items-center rounded-full bg-krem">
        <Bean className="w-7" color={roastLevels[1].bean} />
      </div>

      {roastLevels.map((r, i) => (
        <div
          key={r.id}
          data-rf-serve={i}
          aria-hidden={i !== idx}
          className={`absolute inset-x-4 bottom-4 text-krem transition-opacity sm:inset-x-5 ${
            i === idx ? "opacity-100 delay-200 duration-500" : "opacity-0 duration-200"
          }`}
        >
          <p className="font-hand text-xl leading-none opacity-90">enak diseduh jadi {r.serve}</p>
          <p className="font-display mt-1 text-3xl leading-tight sm:text-4xl">{r.taste}</p>
        </div>
      ))}
    </div>
  );
}
