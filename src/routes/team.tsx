import { createFileRoute, Link } from "@tanstack/react-router";
import { Lightbulb, ShieldCheck, Settings, Heart } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Digital Growth Architects | Team Blackwood Keep" },
      {
        name: "description",
        content:
          "Meet the specialised strategic consultants driving performance and revenue for local trades and B2B enterprise clients at Blackwood Keep.",
      },
      { property: "og:title", content: "Our Team | Blackwood Keep" },
      {
        property: "og:description",
        content:
          "Dedicated digital growth engineers. No outsourced fluff.",
      },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

const black = "var(--color-bk-black)";
const slate = "var(--color-bk-slate)";
const gold = "var(--color-bk-gold)";
const goldPop = "var(--color-bk-gold-pop)";
const champagne = "var(--color-bk-gold-champagne)";
const white = "var(--color-bk-white)";
const muted = "var(--muted-foreground)";
const structuralBorder = "var(--border)";

function TeamPage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section
        style={{ backgroundColor: black, minHeight: "50vh" }}
        className="flex items-center justify-center px-6 py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 style={{ color: white, fontSize: "clamp(2.0625rem, 4.5vw, 3.125rem)", lineHeight: 1.2 }}>
            Meet Our Specialists
          </h1>
          <h2 className="mt-2" style={{ color: white, fontSize: "clamp(2.0625rem, 4.5vw, 3.125rem)", lineHeight: 1.2 }}>
            Dedicated digital growth engineers.
          </h2>
          <p className="mt-6" style={{ color: muted, fontSize: "1.1875rem", lineHeight: 1.6 }}>
            Everything we build is handled entirely in-house—nothing is outsourced. We operate as a
            highly focused digital marketing and lead generation engineering group. We don't employ
            generic account handlers or salespeople; you collaborate directly with deep technical
            specialists who build your acquisition systems.
          </p>
        </div>
      </section>

      {/* ETHOS */}
      <section style={{ backgroundColor: black }} className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center" style={{ color: white, fontSize: "clamp(1.75rem, 3vw, 2.375rem)" }}>
            What Informs Our Work
          </h2>
          <div className="mt-10 space-y-6">
            <EthosBlock
              title="Direct Operational Experience."
              body="We have managed complex physical businesses. We understand that an inquiry is worthless unless it converts cleanly into an invoice."
            />
            <EthosBlock
              title="Rigorous Selective Boarding."
              body="We intentionally limit client intake parameters. If our diagnostic evaluation reveals an infrastructure gap, we resolve that first."
            />
            <EthosBlock
              title="Obsession with Hard Attribution."
              body="If a strategy cannot be validated inside a data dashboard, we do not build it. Every pound spent must have an explicit tracking path."
            />
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section style={{ backgroundColor: slate }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center" style={{ color: white, fontSize: "clamp(1.75rem, 3vw, 2.375rem)" }}>
            The Code We Execute Daily
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Principle icon={<Lightbulb size={24} style={{ color: champagne }} />} title="Technical Clarity" body="No creative verbosity. We communicate in costs, lead values, conversion percentages, and closed revenue values." />
            <Principle icon={<ShieldCheck size={24} style={{ color: champagne }} />} title="Radical Honesty" body="If a campaign is underperforming or a postcode territory is oversaturated, we declare it immediately." />
            <Principle icon={<Settings size={24} style={{ color: champagne }} />} title="Process Automation" body="We build programmatic systems designed to function seamlessly without demanding human maintenance." />
            <Principle icon={<Heart size={24} style={{ color: champagne }} />} title="Client Ownership" body="We treat your client pipeline as a mission-critical asset. When you win market territory, we win." />
          </div>
        </div>
      </section>

      {/* FOUNDERS & ENGINEERS */}
      <section
        style={{ backgroundColor: black }}
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center" style={{ color: white }}>Founders & Engineers</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { initials: "MS", name: "Maggie Smith", role: "Founder & Strategic Director", bio: "Architect of the Blackwood Keep growth methodology. Leads diagnostic audits and account strategy across all engagements." },
              { initials: "IS", name: "Ian the Engineering Lead", role: "Funnel & CRM Engineering", bio: "Owns deployment of automated CRM and tracking infrastructure across client portfolios." },
              { initials: "JS", name: "James the Media Lead", role: "Paid Acquisition & SEO", bio: "Manages localised paid campaigns and technical SEO across the North West client base." },
            ].map((m) => (
              <div
                key={m.name}
                style={{
                  backgroundColor: slate,
                  border: `0.5px solid ${structuralBorder}`,
                  borderRadius: "12px",
                  padding: "1.75rem",
                  textAlign: "center",
                }}
              >
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center"
                  style={{ backgroundColor: black, color: gold, borderRadius: "999px", fontFamily: "var(--font-display)", fontSize: "1.375rem" }}
                >
                  {m.initials}
                </div>
                <h3 className="mt-4" style={{ color: white, fontSize: "1.375rem" }}>{m.name}</h3>
                <p style={{ color: muted, fontSize: "1rem" }}>{m.role}</p>
                <p className="mt-3" style={{ color: muted, fontSize: "0.9375rem", lineHeight: 1.6 }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: black, borderTop: `1px solid ${structuralBorder}` }} className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 style={{ color: white, fontSize: "clamp(1.625rem, 3vw, 2.125rem)" }}>
            Partner with dedicated operations experts.
          </h2>
          <Link
            to="/free-audit"
            className="mt-6 inline-block"
            style={{
              backgroundColor: gold,
              color: black,
              padding: "14px 28px",
              borderRadius: "8px",
              fontWeight: 500,
            }}
          >
            Request Custom Strategic Audit
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

function EthosBlock({ title, body }: { title: string; body: string }) {
  return (
    <div style={{ borderLeft: `3px solid ${gold}`, paddingLeft: "1.25rem" }}>
      <h3 style={{ color: white, fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "1.25rem" }}>
        {title}
      </h3>
      <p className="mt-2" style={{ color: muted, fontSize: "1.0625rem", lineHeight: 1.7 }}>
        {body}
      </p>
    </div>
  );
}

function Principle({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div
      style={{
        backgroundColor: black,
        border: `0.5px solid ${structuralBorder}`,
        borderRadius: "12px",
        padding: "1.5rem",
      }}
    >
      {icon}
      <h3 className="mt-4" style={{ color: white, fontSize: "1.125rem" }}>{title}</h3>
      <p className="mt-2" style={{ color: muted, fontSize: "0.9375rem", lineHeight: 1.6 }}>{body}</p>
    </div>
  );
}
