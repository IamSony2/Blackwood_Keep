export function GoldDivider({ width = 40 }: { width?: number }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: `${width}px`,
        height: "2px",
        backgroundColor: "var(--color-bk-gold)",
        margin: "0 auto",
      }}
    />
  );
}
