import { BeanIcon } from "./Illustrations";

export default function Marquee({
  items,
  speed = 40,
  className = "",
}: {
  items: string[];
  speed?: number;
  className?: string;
}) {
  const track = (hidden: boolean) => (
    <ul className="marquee__track" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t} className="flex items-center gap-8 whitespace-nowrap">
          <span>{t}</span>
          <BeanIcon />
        </li>
      ))}
    </ul>
  );
  return (
    <div
      className={`marquee ${className}`}
      style={{ ["--marquee-speed" as string]: `${speed}s` }}
    >
      {track(false)}
      {track(true)}
    </div>
  );
}
