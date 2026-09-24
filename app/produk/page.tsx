import type { Metadata } from "next";
import Catalog from "@/components/Catalog";
import PageHero from "@/components/PageHero";
import CtaVisit from "@/components/CtaVisit";
import { roastLevels, type RoastLevel } from "@/lib/data";

export const metadata: Metadata = {
  title: "Produk",
  description: "Semua biji kopi Kopi Kita Roastery, dari sangrai terang sampai gelap. Pesan lewat WhatsApp.",
};

export default async function ProdukPage({
  searchParams,
}: {
  searchParams: Promise<{ sangrai?: string }>;
}) {
  const { sangrai } = await searchParams;
  const initial = roastLevels.some((r) => r.id === sangrai) ? (sangrai as RoastLevel) : "semua";

  return (
    <>
      <PageHero
        note="stok minggu ini"
        title="Semua kopi kami"
        text="Setiap kantong ditulis tanggal sangrainya. Pilih kopinya, lalu pesan lewat WhatsApp. Kami bantu pilihkan gilingan yang pas."
      />
      <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <Catalog initial={initial} />
      </section>
      <CtaVisit title="Tidak menemukan yang dicari?" text="Stok berganti mengikuti panen. Tanyakan kopi yang akan datang, atau minta kami pilihkan." />
    </>
  );
}
