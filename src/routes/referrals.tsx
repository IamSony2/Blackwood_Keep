import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { ZohoPlaceholder } from "@/components/ZohoPlaceholder";

export const Route = createFileRoute("/referrals")({
  head: () => ({
    meta: [
      { title: "Strategic Referral Framework | Blackwood Keep" },
      {
        name: "description",
        content:
          "Refer high-potential trades, facilities providers, and regional SMEs to Blackwood Keep and benefit through our structured referral network.",
      },
      { property: "og:title", content: "Referral Programme | Blackwood Keep" },
      {
        property: "og:description",
        content: "Advocacy built on performance and trust.",
      },
      { property: "og:url", content: "/referrals" },
    ],
    links: [{ rel: "canonical", href: "/referrals" }],
  }),
  component: ReferralsPage,
});

const black = "var(--color-bk-black)";
const slate = "var(--color-bk-slate)";
const gold = "var(--color-bk-gold)";
const goldPop = "var(--color-bk-gold-pop)";
const white = "var(--color-bk-white)";
const muted = "var(--muted-foreground)";
const structuralBorder = "var(--border)";

function ReferralsPage() {
  return (
    <PageLayout>
      <section style={{ backgroundColor: black, minHeight: "50vh" }} className="flex items-center justify-center px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 style={{ lineHeight: 1.2 }}>
            Trusted Growth Partners
          </h1>
          <h2 className="mt-3" style={{ lineHeight: 1.2 }}>
            Value Commercial Introductions
          </h2>
          <p className="mt-6" style={{ color: muted, fontSize: "1.0625rem", lineHeight: 1.6 }}>
            We scale regional operations through structural results, and we intentionally reward
            professionals who guide firms to our door.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: black }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center">
            The Referral Mechanics
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { n: "1", t: "Introduce the Lead", b: "Submit a regional business leader or facilities operator struggling with lead consistency via our intake module below." },
              { n: "2", t: "We Deliver the Audit", b: "We review their setup and send them a comprehensive, high-value video Growth Audit—completely transparent and zero pressure." },
              { n: "3", t: "Lock In Your Rewards", b: "Once they sign a monthly framework contract, your referral is validated. Full program execution goes live in Q4 2026." },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <div
                  className="mx-auto flex h-14 w-14 items-center justify-center"
                  style={{ backgroundColor: gold, color: black, borderRadius: "999px", fontFamily: "var(--font-display)", fontSize: "26px" }}
                >
                  {s.n}
                </div>
                <h3 className="mt-4" style={{ color: white, fontSize: "1.375rem" }}>{s.t}</h3>
                <p className="mt-3" style={{ color: muted, fontSize: "1.125rem", lineHeight: 1.7 }}>{s.b}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center" style={{ color: muted, fontSize: "0.9375rem", fontStyle: "italic" }}>
            Formal portal access and tracking parameters launching Q4 2026. Register early intake below.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: slate }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center">
            Ideal Introductions
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { t: "Commercial Contractors", b: "Mechanical, electrical, civil, roofing, and plumbing firms across the North West." },
              { t: "Facilities & Asset Groups", b: "Commercial cleaning, safety compliance, security providers, and out-of-hours infrastructure teams." },
              { t: "Mid-Market Service SMEs", b: "Any commercial firm across Wirral, Liverpool, Chester, or North Wales seeking client tracking consistency." },
            ].map((c) => (
              <div
                key={c.t}
                style={{
                  backgroundColor: black,
                  border: `0.5px solid ${structuralBorder}`,
                  borderRadius: "12px",
                  padding: "1.5rem",
                }}
              >
                <h3 style={{ color: white, fontSize: "1.25rem" }}>{c.t}</h3>
                <p className="mt-2" style={{ color: muted, fontSize: "1.125rem", lineHeight: 1.6 }}>{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: black }} className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center">
            Submit Strategic Referral
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center" style={{ color: muted, fontSize: "1.0625rem" }}>
            Provide the corporate profile information below and our engineering team will initiate
            tracking diagnostics.
          </p>

          <div className="mt-8">
            <ZohoPlaceholder label="" variant="light" minHeight={300}>
              <p style={{ color: white, fontWeight: 500, marginBottom: 12 }}>
                Zoho Forms — Referral Intake
              </p>
              <p style={{ color: muted, fontSize: "1.0625rem", lineHeight: 1.7 }}>
                Field Inputs: Your Corporate Identity · Your Verified Email · Target Firm Name ·
                Decision Maker Identity · Target Contact Coordinates · Strategic Context Notes
              </p>
            </ZohoPlaceholder>
          </div>
          <div className="mt-6 text-center">
            <button type="button" className="bwk-button">
              Register Introduction
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
