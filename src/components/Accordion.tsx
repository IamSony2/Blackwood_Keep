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
          <div key={i} style={{ borderBottom: "0.5px solid #D1D5DB" }}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span style={{ color: "#111827", fontSize: "16px", fontWeight: 500 }}>
                {item.q}
              </span>
              <ChevronDown
                size={20}
                style={{
                  color: "#C8A45D",
                  transition: "transform 0.2s",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
            {isOpen && (
              <p
                className="pb-5 pr-8"
                style={{ color: "#374151", fontSize: "15px", lineHeight: 1.7 }}
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
