import type { KeyboardEvent, RefObject } from "react";
import type { Content } from "@/lib/i18n";
import { CELL_ORDER } from "./constants";
import DialSlice from "./DialSlice";
import DialNeedle from "./DialNeedle";
import DialKnob from "./DialKnob";
import SpinControls from "./SpinControls";

/** Dial sangrai: 4 kuadran, jarum, kenop tengah, dan tombol putar. */
export default function RoastDial({
  c,
  idx,
  spinning,
  needleRef,
  buttonsRef,
  onSelect,
  onKeyDown,
  onSpin,
}: {
  c: Content;
  idx: number;
  spinning: boolean;
  needleRef: RefObject<HTMLDivElement | null>;
  buttonsRef: RefObject<(HTMLButtonElement | null)[]>;
  onSelect: (i: number) => void;
  onKeyDown: (e: KeyboardEvent) => void;
  onSpin: () => void;
}) {
  return (
    <div className="mx-auto w-full max-w-[440px] lg:max-w-[340px]">
      <div className="relative aspect-square [container-type:inline-size]">
        <div
          role="radiogroup"
          aria-label={c.t.roastWheel.groupAria}
          onKeyDown={onKeyDown}
          className="grid h-full w-full grid-cols-2 gap-[3px] overflow-hidden rounded-full bg-hutan ring-[3px] ring-krem/25"
        >
          {CELL_ORDER.map((li, cell) => (
            <DialSlice
              key={c.roastLevels[li].id}
              level={c.roastLevels[li]}
              levelIndex={li}
              cell={cell}
              active={li === idx}
              disabled={spinning}
              buttonRef={(el) => {
                buttonsRef.current[li] = el;
              }}
              onSelect={() => onSelect(li)}
            />
          ))}
        </div>

        <DialNeedle ref={needleRef} />
        <DialKnob color={c.roastLevels[idx].bean} />
      </div>

      <SpinControls c={c} spinning={spinning} onSpin={onSpin} />
    </div>
  );
}
