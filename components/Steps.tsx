/** Langkah berurutan — nomor dipakai karena isinya memang urutan. */
export default function Steps({
  steps,
  dark = false,
}: {
  steps: { title: string; text: string }[];
  dark?: boolean;
}) {
  return (
    <ol data-reveal-group className="space-y-6">
      {steps.map((s, i) => (
        <li key={s.title} data-reveal-item className="grid grid-cols-[auto_1fr] gap-5">
          <span
            aria-hidden="true"
            className={`font-display grid h-14 w-14 place-items-center rounded-full border-2 text-2xl ${
              dark ? "border-krem" : "border-hutan"
            }`}
          >
            {i + 1}
          </span>
          <div className="pt-1">
            <h3 className="text-xl font-bold">{s.title}</h3>
            <p className="mt-1 leading-relaxed opacity-85">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
