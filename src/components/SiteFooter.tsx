import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { CastleShield } from "./CastleShield";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Investment" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/team", label: "Team" },
  { to: "/referrals", label: "Referrals" },
  { to: "/contact", label: "Contact" },
  { to: "/free-audit", label: "Free Audit" },
] as const;

interface Props {
  minimal?: boolean;
}

// TikTok inline SVG (no lucide equivalent)
function TikTok({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.86a8.16 8.16 0 0 0 4.77 1.52V6.93a4.85 4.85 0 0 1-1.84-.24Z" />
    </svg>
  );
}

export function SiteFooter({ minimal = false }: Props) {
  if (minimal) {
    return (
      <footer
        style={{ backgroundColor: "#0B0B0D", borderTop: "1px solid #B68B3A" }}
        className="px-6 py-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 text-center">
          <CastleShield size={36} />
          <p style={{ color: "#888780", fontSize: "12px" }}>
            © 2026 Blackwood Keep Ltd · Registered in England and Wales
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer
      style={{ backgroundColor: "#0B0B0D", borderTop: "1px solid #B68B3A" }}
      className="px-6 py-12"
    >
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Row 1 */}
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          <div className="flex justify-center md:justify-start">
            <Link to="/" aria-label="Blackwood Keep home">
              <CastleShield size={48} />
            </Link>
          </div>
          <p
            className="text-center"
            style={{ color: "#E5D2A0", fontFamily: "var(--font-display)", fontSize: "16px" }}
          >
            Creative Design &amp; Digital Marketing Solutions
          </p>
          <div className="flex justify-center gap-4 md:justify-end" style={{ color: "#C8A45D" }}>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="TikTok"><TikTok /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Row 2 */}
        <nav aria-label="Footer">
          <ul
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            style={{ color: "#D1D5DB", fontSize: "14px" }}
          >
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-[#C8A45D]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Row 3 */}
        <div
          className="flex flex-wrap justify-center gap-x-6 gap-y-2"
          style={{ color: "#C8A45D", fontSize: "14px" }}
        >
          <a href="mailto:hello@blackwoodkeep.co.uk">hello@blackwoodkeep.co.uk</a>
          <span>·</span>
          <span>[Swytch phone number]</span>
        </div>

        {/* Row 4 */}
        <p className="text-center" style={{ color: "#D1D5DB", fontSize: "13px" }}>
          Serving businesses across the Wirral, Liverpool, Chester, Cheshire West, Cheshire East,
          and North Wales
        </p>

        {/* Row 5 */}
        <div
          className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-center"
          style={{ color: "#888780", fontSize: "12px" }}
        >
          <span>© 2026 Blackwood Keep Ltd</span>
          <span>·</span>
          <span>Registered in England and Wales</span>
          <span>·</span>
          <Link to="/privacy">Privacy Policy</Link>
          <span>·</span>
          <Link to="/cookies">Cookie Policy</Link>
          <span>·</span>
          <span>ICO Registration</span>
        </div>
      </div>
    </footer>
  );
}
