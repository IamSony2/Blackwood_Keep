interface Props {
  label: string;
  variant?: "light" | "dark";
  minHeight?: number;
  children?: React.ReactNode;
}

export function ZohoPlaceholder({ label, variant = "light", minHeight = 320, children }: Props) {
  // Both variants now sit on the dark canvas; "light" gets the slightly lighter slate tone
  // for separation from a pure-black section, "dark" matches the canvas for slate sections.
  const bg = variant === "light" ? "var(--color-bk-slate)" : "var(--color-bk-black)";
  return (
    <div
      className="flex flex-col items-center justify-center px-6 py-8 text-center"
      style={{
        border: "1px dashed var(--color-bk-gold-antique)",
        borderRadius: "12px",
        backgroundColor: bg,
        minHeight: `${minHeight}px`,
        color: "var(--muted-foreground)",
        fontSize: "13px",
      }}
    >
      {children ?? <p style={{ color: "var(--color-bk-white)" }}>{label}</p>}
    </div>
  );
}
