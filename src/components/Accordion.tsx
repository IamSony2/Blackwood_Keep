import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Item {
  q: string;
  a: string;
}

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderBottom: "0.5px solid var(--border)" }}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span style={{ color: "var(--color-bk-white)", fontSize: "1.125rem", fontWeight: 500 }}>
                {item.q}
              </span>
              <ChevronDown
                size={20}
                style={{
                  color: "var(--color-bk-gold-pop)",
                  transition: "transform 0.2s",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
            {isOpen && (
              <p
                className="pb-5 pr-8"
                style={{ color: "var(--muted-foreground)", fontSize: "1.0625rem", lineHeight: 1.7 }}
              >
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
