import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CastleShield } from "./CastleShield";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Investment" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

interface Props {
  minimal?: boolean;
}

export function SiteHeader({ minimal = false }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        backgroundColor: "var(--color-bk-black)",
        borderBottom: "1px solid var(--color-bk-gold-antique)",
      }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Primary"
      >
        <Link to="/" className="flex items-center gap-3" aria-label="Blackwood Keep home">
          <CastleShield size={40} />
          <span
            className="hidden sm:inline"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-bk-gold-champagne)", fontSize: "18px" }}
          >
            Blackwood Keep
          </span>
        </Link>

        {!minimal && (
          <ul
            className="hidden items-center gap-8 md:flex"
            style={{ fontFamily: "var(--font-sans)", fontSize: "14px" }}
          >
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="nav-link"
                  activeProps={{ className: "nav-link is-active" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center gap-3">
          <Link
            to="/free-audit"
            className="hidden md:inline-block transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "var(--color-bk-gold)",
              color: "var(--color-bk-black)",
              borderRadius: "8px",
              padding: "10px 20px",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Book Free Audit
          </Link>
          {!minimal && (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="md:hidden"
              aria-label="Open menu"
              style={{ color: "var(--color-bk-gold)" }}
            >
              <Menu size={28} />
            </button>
          )}
        </div>
      </nav>

      {open && !minimal && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8"
          style={{ backgroundColor: "var(--color-bk-black)" }}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6"
            aria-label="Close menu"
            style={{ color: "var(--color-bk-gold)" }}
          >
            <X size={32} />
          </button>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              style={{ color: "var(--color-bk-gold-champagne)", fontSize: "20px", fontFamily: "var(--font-sans)" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/free-audit"
            onClick={() => setOpen(false)}
            style={{
              backgroundColor: "var(--color-bk-gold)",
              color: "var(--color-bk-black)",
              borderRadius: "8px",
              padding: "12px 28px",
              fontWeight: 500,
            }}
          >
            Book Free Audit
          </Link>
        </div>
      )}
    </header>
  );
}
