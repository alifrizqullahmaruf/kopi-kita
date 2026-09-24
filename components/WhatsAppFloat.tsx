import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Illustrations";

/** Tombol WhatsApp melayang — tampil di setiap halaman (dipasang di layout). */
export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-hutan py-3 pr-3 pl-3 text-krem shadow-[0_10px_30px_-8px_rgba(31,59,45,.6)] transition-[padding] duration-300 sm:right-6 sm:bottom-6 sm:pr-5"
      style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
      aria-label="Chat dengan kami di WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="hidden text-sm font-bold sm:inline">Chat WhatsApp</span>
    </a>
  );
}
