/** Foto gelas besar, terpotong di tepi bawah. */
export default function HeroPhoto() {
  return (
    <div data-hero-item="rise" className="mx-auto w-[min(100%,1040px)]">
      <div data-hero-parallax className="hero-photo">
        <img
          src="/images/seduh-closeup.png"
          alt="Segelas es kopi hitam yang diseduh dari biji Kopi Kita"
          width={1024}
          height={472}
          fetchPriority="high"
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}
