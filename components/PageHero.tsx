import { CoffeeBranch } from "./Illustrations";

/** Hero sederhana untuk halaman selain beranda — memakai intro yang sama. */
export default function PageHero({
  note,
  title,
  text,
  children,
}: {
  note: string;
  title: string;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <section data-hero className="relative mx-auto max-w-6xl px-5 pt-10 pb-16 sm:px-8 md:pt-16 md:pb-24">
      <div data-hero-item="pop" className="pointer-events-none absolute top-6 right-6 hidden w-40 text-hutan/70 md:block">
        <CoffeeBranch className="wobble-slow" />
      </div>
      <p data-hero-item className="font-hand text-2xl">{note}</p>
      <h1 data-hero-item="split" className="font-display mt-2 max-w-4xl text-[clamp(3rem,8vw,6.5rem)]">
        {title}
      </h1>
      <p data-hero-item className="mt-6 max-w-xl text-lg leading-relaxed opacity-85">
        {text}
      </p>
      {children && (
        <div data-hero-item className="mt-8 flex flex-wrap gap-3">
          {children}
        </div>
      )}
    </section>
  );
}
