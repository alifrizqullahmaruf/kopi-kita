import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

/** Kantong kopi dengan label. Dipakai sebagai "foto produk" sampai foto asli tersedia. */
export function CoffeeBag({
  title,
  origin,
  label = "#E9DFC8",
  bean = "#5F3B22",
  roastIndex = 2,
  date = "12/05",
  ...props
}: P & {
  title: string;
  origin: string;
  label?: string;
  bean?: string;
  roastIndex?: number; // 0..3
  date?: string;
}) {
  const words = title.split(" ");
  const half = Math.ceil(words.length / 2);
  const lines =
    title.length > 12 ? [words.slice(0, half).join(" "), words.slice(half).join(" ")] : [title];

  return (
    <svg viewBox="0 0 200 280" role="img" aria-label={`Kemasan ${title}`} {...props}>
      {/* lipatan atas bergerigi */}
      <path
        d="M22 18 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l6 6 V44 H22 Z"
        fill="#16291f"
      />
      {/* badan kantong */}
      <path
        d="M22 44 H178 L186 258 Q187 272 173 272 H27 Q13 272 14 258 Z"
        fill="#1F3B2D"
      />
      {/* lipatan samping */}
      <path d="M40 48 L34 266" stroke="#2c5140" strokeWidth="3" strokeLinecap="round" />
      <path d="M160 48 L166 266" stroke="#16291f" strokeWidth="3" strokeLinecap="round" />
      {/* katup satu arah */}
      <circle cx="100" cy="76" r="10" fill="none" stroke="#9db596" strokeWidth="2.5" />
      <circle cx="100" cy="76" r="3" fill="#9db596" />
      {/* label */}
      <rect x="38" y="104" width="124" height="136" rx="10" fill={label} />
      <text
        x="100"
        y={lines.length > 1 ? 136 : 146}
        textAnchor="middle"
        fill="#1F3B2D"
        style={{ font: "760 20px var(--font-display)", fontVariationSettings: '"wdth" 78' }}
      >
        {lines.map((l, i) => (
          <tspan key={i} x="100" dy={i === 0 ? 0 : 20}>
            {l}
          </tspan>
        ))}
      </text>
      <text
        x="100"
        y="178"
        textAnchor="middle"
        fill="#1F3B2D"
        opacity="0.75"
        style={{ font: "600 9.5px var(--font-body)" }}
      >
        {origin}
      </text>
      {/* indikator tingkat sangrai: 4 biji */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${76 + i * 16} 196) rotate(-25)`}>
          <ellipse
            rx="5.5"
            ry="7.5"
            fill={i <= roastIndex ? bean : "none"}
            stroke={bean}
            strokeWidth="1.5"
          />
          <path d="M0 -6 Q-2.5 0 0 6" stroke={i <= roastIndex ? label : bean} strokeWidth="1.2" fill="none" />
        </g>
      ))}
      <text
        x="100"
        y="228"
        textAnchor="middle"
        fill="#5F3B22"
        style={{ font: "600 15px var(--font-hand)" }}
      >
        disangrai {date}
      </text>
    </svg>
  );
}

export function Bean({ color = "#5F3B22", ...props }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 40 52" aria-hidden="true" {...props}>
      <ellipse cx="20" cy="26" rx="16" ry="22" fill={color} data-bean-fill />
      <path
        d="M20 6 Q12 18 20 26 Q28 34 20 46"
        fill="none"
        stroke="rgba(0,0,0,.28)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BeanIcon(props: P) {
  return (
    <svg viewBox="0 0 20 26" width="14" height="18" aria-hidden="true" {...props}>
      <ellipse cx="10" cy="13" rx="8" ry="11" fill="currentColor" />
      <path d="M10 3 Q6 9 10 13 Q14 17 10 23" fill="none" stroke="var(--color-krem)" strokeWidth="1.6" />
    </svg>
  );
}

/** Ranting kopi dengan buah ceri — gaya garis tangan */
export function CoffeeBranch(props: P) {
  return (
    <svg viewBox="0 0 160 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M8 104 C50 86 92 62 150 18" />
      <path d="M52 84 C44 60 58 44 78 40 C80 60 70 76 52 84Z" />
      <path d="M96 54 C104 34 124 30 138 36 C130 54 114 60 96 54Z" />
      <path d="M78 70 C88 84 104 88 118 84 C108 70 94 66 78 70Z" />
      <circle cx="36" cy="100" r="7" />
      <circle cx="48" cy="104" r="6" />
      <circle cx="122" cy="44" r="6" />
    </svg>
  );
}

/** Cangkir dengan uap */
export function SteamCup(props: P) {
  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M22 56 H86 V74 C86 92 72 104 54 104 C36 104 22 92 22 74 Z" />
      <path d="M86 62 H94 C102 62 106 68 106 74 C106 82 100 86 92 86 H86" />
      <path d="M14 110 H96" />
      <path d="M40 44 C34 36 46 30 40 20" />
      <path d="M56 44 C50 34 62 28 56 14" />
      <path d="M72 44 C66 36 78 30 72 20" />
    </svg>
  );
}

/** Panah coretan tangan */
export function HandArrow(props: P) {
  return (
    <svg viewBox="0 0 120 70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M6 12 C40 4 86 14 106 52" />
      <path d="M92 50 L107 55 L110 38" />
    </svg>
  );
}

export function WhatsAppIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}
