import { BeanIcon } from "@/components/Illustrations";

/** Kenop di tengah dial, warnanya mengikuti tingkat sangrai aktif. */
export default function DialKnob({ color }: { color: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 left-1/2 grid h-[21%] w-[21%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[3px] border-krem bg-hutan"
    >
      <span data-rf-knob className="block transition-colors duration-500" style={{ color }}>
        <BeanIcon width={26} height={34} />
      </span>
    </div>
  );
}
