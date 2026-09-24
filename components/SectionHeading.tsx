/**
 * Pola judul section: judul besar rata kiri, paragraf pendek di kanan
 * yang sejajar dengan baris bawah judul. Menumpuk di layar kecil.
 */
export default function SectionHeading({
  note,
  title,
  text,
  action,
  as: Tag = "h2",
  className = "",
}: {
  note?: string;
  title: string;
  text?: string;
  action?: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-12 ${className}`}>
      <div className="max-w-2xl">
        {note && <p className="font-hand mb-2 text-2xl opacity-85">{note}</p>}
        <Tag data-split className="font-display text-[clamp(2.6rem,6vw,4.75rem)]">
          {title}
        </Tag>
      </div>
      {(text || action) && (
        <div className="max-w-sm md:pb-2">
          {text && <p className="text-[1.05rem] leading-relaxed opacity-85">{text}</p>}
          {action && <div className="mt-4">{action}</div>}
        </div>
      )}
    </div>
  );
}
