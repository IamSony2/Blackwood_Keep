import { useEffect, useState } from "react";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem("bk-cookie-accepted")) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 px-6 py-4"
      style={{ backgroundColor: "var(--color-bk-black)", borderTop: "1px solid var(--border)" }}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 md:flex-row">
        <p style={{ color: "var(--muted-foreground)", fontSize: "0.9375rem" }} className="text-center md:text-left">
          We use cookies to improve your browsing experience and analyse site performance. See our{" "}
          <a href="/cookies" style={{ color: "var(--color-bk-gold)" }}>
            Cookie Policy
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            localStorage.setItem("bk-cookie-accepted", "1");
            setShow(false);
          }}
          style={{
            backgroundColor: "var(--color-bk-gold)",
            color: "var(--color-bk-black)",
            borderRadius: "8px",
            padding: "10px 22px",
            fontWeight: 500,
            fontSize: "1rem",
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
