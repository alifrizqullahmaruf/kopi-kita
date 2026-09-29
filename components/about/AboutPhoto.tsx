/** Foto dengan bingkai, efek parallax, dan keterangan tulisan tangan. */
export default function AboutPhoto({
  src,
  alt,
  caption,
  width,
  height,
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <figure data-reveal-item className={`group relative overflow-hidden rounded-[1.75rem] border-2 border-hutan bg-kertas ${className}`}>
      <div data-parallax className="absolute inset-x-0 -top-[8%] -bottom-[8%]">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <figcaption className="font-hand absolute bottom-3 left-3 rounded-full bg-krem px-4 py-1 text-lg">{caption}</figcaption>
    </figure>
  );
}
