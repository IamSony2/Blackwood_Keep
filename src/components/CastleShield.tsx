<![CDATA[interface Props {
  size?: number;
  className?: string;
}

export function CastleShield({ size = 80, className = "" }: Props) {
  const black = "var(--color-bk-black)";
  const gold = "var(--color-bk-gold)";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 110"
      width={size}
      height={(size * 110) / 100}
      className={className}
      aria-label="Blackwood Keep castle shield"
      role="img"
    >
      {/* Shield outline */}
      <path
        d="M50 4 L92 14 L92 56 C92 82 74 100 50 106 C26 100 8 82 8 56 L8 14 Z"
        style={{ fill: black, stroke: gold }}
        strokeWidth="2"
      />
      {/* Battlements top */}
      <g style={{ fill: gold }}>
        <rect x="26" y="38" width="8" height="10" />
        <rect x="38" y="38" width="8" height="10" />
        <rect x="50" y="38" width="8" height="10" />
        <rect x="62" y="38" width="8" height="10" />
      </g>
      {/* Tower body */}
      <rect x="26" y="48" width="44" height="34" style={{ fill: gold }} />
      {/* Door */}
      <path d="M44 82 L44 68 Q50 60 56 68 L56 82 Z" style={{ fill: black }} />
      {/* Windows */}
      <rect x="32" y="56" width="6" height="10" style={{ fill: black }} />
      <rect x="58" y="56" width="6" height="10" style={{ fill: black }} />
      {/* Centre tall tower */}
      <rect x="44" y="22" width="12" height="20" style={{ fill: gold }} />
      <rect x="44" y="22" width="4" height="6" style={{ fill: black }} />
      <rect x="52" y="22" width="4" height="6" style={{ fill: black }} />
      {/* Flag pole */}
      <rect x="49" y="10" width="2" height="14" style={{ fill: gold }} />
      <path d="M51 11 L60 14 L51 17 Z" style={{ fill: gold }} />
    </svg>
  );
}
]]>