import Marquee from "@/components/Marquee";

/** Pita berjalan berisi janji singkat Kopi Kita. */
export default function HeroPita() {
  return (
    <Marquee
      speed={38}
      className="font-display relative z-10 bg-hutan py-4 text-2xl text-krem sm:text-3xl"
      items={[
        "Biji utuh atau digiling",
        "Tanggal sangrai di tiap kantong",
        "Langganan bisa dijeda kapan saja",
        "Kirim ke seluruh Indonesia",
        "Pesan cukup lewat WhatsApp",
      ]}
    />
  );
}
