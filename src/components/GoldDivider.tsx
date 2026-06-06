export function GoldDivider({ width = 40 }: { width?: number }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: `${width}px`,
        height: "2px",
        backgroundColor: "#C8A45D",
        margin: "0 auto",
      }}
    />
  );
}
