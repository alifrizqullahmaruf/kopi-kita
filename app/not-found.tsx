import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-32 sm:px-8">
      <p className="font-hand text-2xl">page not found</p>
      <h1 className="font-display mt-2 text-6xl">The coffee’s still here. This page isn’t.</h1>
      <p className="mt-5 max-w-md text-lg">The link you followed doesn’t go anywhere. Head back home, or have a look at our coffee.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-solid">Back home</Link>
        <Link href="/shop" className="btn btn-ghost">See our coffee</Link>
      </div>
    </section>
  );
}
