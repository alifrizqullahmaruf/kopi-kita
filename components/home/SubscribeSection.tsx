import Link from "next/link";
import { subscribeSteps } from "@/lib/data";
import Steps from "@/components/Steps";
import ParcelLabel from "@/components/ParcelLabel";

/** Ringkasan langganan: langkah-langkah + label paket. */
export default function SubscribeSection() {
  return (
    <section aria-labelledby="judul-langganan" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <div className="grid gap-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-hand text-2xl">tidak perlu ingat beli lagi</p>
          <h2 id="judul-langganan" data-split className="font-display mt-2 text-[clamp(2.6rem,6vw,4.75rem)]">
            Kopi datang sendiri tiap bulan
          </h2>
          <div className="mt-10">
            <Steps steps={subscribeSteps} />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/langganan" className="btn btn-solid">
              Lihat paket langganan
            </Link>
          </div>
        </div>
        <div data-reveal-group>
          <ParcelLabel />
        </div>
      </div>
    </section>
  );
}
