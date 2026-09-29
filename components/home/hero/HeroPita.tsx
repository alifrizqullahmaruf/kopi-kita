import Marquee from "@/components/Marquee";

/** Pita berjalan berisi janji singkat Kopi Kita. */
export default function HeroPita() {
  return (
    <Marquee
      speed={38}
      className="font-display relative z-10 bg-hutan py-4 text-2xl text-krem sm:text-3xl"
      items={[
        "Whole bean or ground",
        "Roast date on every bag",
        "Pause your subscription anytime",
        "Shipping across Indonesia",
        "Order with one WhatsApp message",
      ]}
    />
  );
}
