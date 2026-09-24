/**
 * Doodle garis tangan. File PNG di /public/doodles hanya berisi bentuk (alpha),
 * warnanya diambil dari `currentColor` lewat CSS mask — jadi warna doodle
 * cukup diatur dengan kelas teks, mis. `text-hutan` atau `text-sangrai`.
 */
const SIZES = {
  awan: [396, 238],
  buku: [391, 305],
  bulan: [260, 292],
  bunga: [308, 292],
  cangkir: [280, 338],
  kilau: [270, 296],
  kursi: [362, 331],
  laptop: [391, 312],
  matahari: [389, 390],
  wifi: [366, 279],
} as const;

export type DoodleName = keyof typeof SIZES;

export default function Doodle({ name, className = "" }: { name: DoodleName; className?: string }) {
  const [w, h] = SIZES[name];
  const url = `url(/doodles/${name}.png)`;
  return (
    <span
      aria-hidden="true"
      className={`block bg-current ${className}`}
      style={{
        aspectRatio: `${w} / ${h}`,
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}
