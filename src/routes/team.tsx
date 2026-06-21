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

const dark = "var(--color-bk-black)";
const navy = "var(--color-bk-navy)";
const gold = "var(--color-bk-gold)";
const goldAntique = "var(--color-bk-gold-antique)";
const champagne = "var(--color-bk-gold-champagne)";
const silver = "var(--color-bk-silver)";
const subtle = "var(--color-bk-subtle)";
const slate = "var(--color-bk-slate)";
const white = "var(--color-bk-white)";

function TeamPage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section
        style={{ backgroundColor: dark, minHeight: "50vh" }}
        className="flex items-center justify-center px-6 py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 style={{ color: champagne, fontSize: "clamp(30px,4.5vw,48px)", lineHeight: 1.2 }}>
            Dedicated digital growth engineers. Nothing is outsourced.
          </h1>
          <p className="mt-6" style={{ color: silver, fontSize: "17px", lineHeight: 1.6 }}>
            We operate as a highly focused engineering group. We don't employ account handlers or
            generic salespeople; you collaborate directly with deep technical specialists.
          </p>
        </div>
      </section>

      {/* ETHOS */}
      <section style={{ backgroundColor: white }} className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center" style={{ color: navy, fontSize: "clamp(26px,3vw,36px)" }}>
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
      <section style={{ backgroundColor: navy }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center" style={{ color: champagne, fontSize: "clamp(26px,3vw,36px)" }}>
            The Code We Execute Daily
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Principle icon={<Lightbulb size={24} style={{ color: gold }} />} title="Technical Clarity" body="No creative verbosity. We communicate in costs, lead values, conversion percentages, and closed revenue values." />
            <Principle icon={<ShieldCheck size={24} style={{ color: gold }} />} title="Radical Honesty" body="If a campaign is underperforming or a postcode territory is oversaturated, we declare it immediately." />
            <Principle icon={<Settings size={24} style={{ color: gold }} />} title="Process Automation" body="We build programmatic systems designed to function seamlessly without demanding human maintenance." />
            <Principle icon={<Heart size={24} style={{ color: gold }} />} title="Client Ownership" body="We treat your client pipeline as a mission-critical asset. When you win market territory, we win." />
          </div>
        </div>
      </section>

      {/* FOUNDERS & ENGINEERS */}
      <section
        style={{ backgroundColor: white }}
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center" style={{ color: navy }}>Founders & Engineers</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { initials: "MS", name: "Maggie Smith", role: "Founder & Strategic Director", bio: "Architect of the Blackwood Keep growth methodology. Leads diagnostic audits and account strategy across all engagements." },
              { initials: "IS", name: "Ian the Engineering Lead", role: "Funnel & CRM Engineering", bio: "Owns deployment of automated CRM and tracking infrastructure across client portfolios." },
              { initials: "JS", name: "James the Media Lead", role: "Paid Acquisition & SEO", bio: "Manages localised paid campaigns and technical SEO across the North West client base." },
            ].map((m) => (
              <div
                key={m.name}
                style={{
                  backgroundColor: dark,
                  border: `0.5px solid ${goldAntique}`,
                  borderRadius: "12px",
                  padding: "1.75rem",
                  textAlign: "center",
                }}
              >
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center"
                  style={{ backgroundColor: slate, color: gold, borderRadius: "999px", fontFamily: "var(--font-display)", fontSize: "20px" }}
                >
                  {m.initials}
                </div>
                <h3 className="mt-4" style={{ color: champagne, fontSize: "20px" }}>{m.name}</h3>
                <p style={{ color: silver, fontSize: "14px" }}>{m.role}</p>
                <p className="mt-3" style={{ color: subtle, fontSize: "13px", lineHeight: 1.6 }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: dark, borderTop: `1px solid ${goldAntique}` }} className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 style={{ color: champagne, fontSize: "clamp(24px,3vw,32px)" }}>
            Partner with dedicated operations experts.
          </h2>
          <Link
            to="/free-audit"
            className="mt-6 inline-block"
            style={{
              backgroundColor: gold,
              color: dark,
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
      <h3 style={{ color: navy, fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "18px" }}>
        {title}
      </h3>
      <p className="mt-2" style={{ color: "#374151", fontSize: "15px", lineHeight: 1.7 }}>
        {body}
      </p>
    </div>
  );
}

function Principle({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div
      style={{
        backgroundColor: dark,
        border: `0.5px solid ${goldAntique}`,
        borderRadius: "12px",
        padding: "1.5rem",
      }}
    >
      {icon}
      <h3 className="mt-4" style={{ color: gold, fontSize: "16px" }}>{title}</h3>
      <p className="mt-2" style={{ color: silver, fontSize: "13px", lineHeight: 1.6 }}>{body}</p>
    </div>
  );
}
