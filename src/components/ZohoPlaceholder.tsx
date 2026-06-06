interface Props {
  label: string;
  variant?: "light" | "dark";
  minHeight?: number;
  children?: React.ReactNode;
}

export function ZohoPlaceholder({ label, variant = "light", minHeight = 320, children }: Props) {
  const bg = variant === "light" ? "#FAFAFA" : "#111827";
  return (
    <div
      className="flex flex-col items-center justify-center px-6 py-8 text-center"
      style={{
        border: "1px dashed #B68B3A",
        borderRadius: "12px",
        backgroundColor: bg,
        minHeight: `${minHeight}px`,
        color: "#888780",
        fontSize: "13px",
      }}
    >
      {children ?? <p>{label}</p>}
    </div>
  );
}
