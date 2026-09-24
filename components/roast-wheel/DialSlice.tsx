import type { roastLevels } from "@/lib/data";
import { CORNER, INNER, TEMPS } from "./constants";

/** Satu kuadran dial (tombol radio) untuk satu tingkat sangrai. */
export default function DialSlice({
  level,
  levelIndex,
  cell,
  active,
  disabled,
  buttonRef,
  onSelect,
}: {
  level: (typeof roastLevels)[number];
  levelIndex: number;
  cell: number;
  active: boolean;
  disabled: boolean;
  buttonRef: (el: HTMLButtonElement | null) => void;
  onSelect: () => void;
}) {
  const darkText = levelIndex === 0;
  return (
    <button
      ref={buttonRef}
      type="button"
      role="radio"
      aria-checked={active}
      aria-label={`${level.label}, ${level.taste}`}
      tabIndex={active ? 0 : -1}
      disabled={disabled}
      data-rf-idx={levelIndex}
      onClick={onSelect}
      className={`rf-slice ${CORNER[cell]} flex flex-col items-center justify-center gap-1 px-3 text-center transition-colors duration-300 disabled:cursor-wait ${
        active ? (darkText ? "text-hutan" : "text-krem") : "bg-krem text-hutan hover:bg-kertas"
      }`}
      style={active ? { background: level.bean } : undefined}
    >
      <span className={`rf-slice-inner flex flex-col items-center gap-1 ${INNER[cell]}`}>
        <span
          aria-hidden="true"
          className="h-3.5 w-3.5 rounded-full ring-2 ring-current/30"
          style={{ background: level.bean }}
        />
        <span className="font-display text-[6cqw] leading-none">{level.label}</span>
        <span className="font-hand text-[4.6cqw] leading-none opacity-80">{TEMPS[levelIndex]}</span>
      </span>
    </button>
  );
}
