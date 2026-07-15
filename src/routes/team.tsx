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
          "Meet the specialised strategic consultants driving performance and revenue for local trades and B2B/B2C enterprise clients at Blackwood Keep.",
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
      <section
        style={{ backgroundColor: black, minHeight: "50vh" }}
        className="flex items-center justify-center px-6 py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 style={{ lineHeight: 1.2 }}>
            Meet Our Specialists
          </h1>
          <h2 className="mt-3" style={{ lineHeight: 1.2 }}>
            Dedicated digital growth engineers
          </h2>
          <p className="mt-6" style={{ color: muted, fontSize: "1.1875rem", lineHeight: 1.6 }}>
            We operate as a highly focused digital marketing and lead generation engineering group. We do not employ generic account handlers or salespeople; you collaborate directly with deep technical specialists who build your acquisition systems.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: black }} className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center">
            What Informs Our Work
          </h2>
          <div className="mt-10 space-y-6">
            <EthosBlock
              title="Direct Operational Experience"
              body="We have managed complex physical businesses. We understand that an inquiry is worthless unless it converts cleanly into an invoice."
            />
            <EthosBlock
              title="Rigorous Selective Boarding"
              body="We intentionally limit client intake parameters across the Wirral, Liverpool, Chester, Cheshire West, Cheshire East, and North Wales. If our diagnostic evaluation reveals an internal infrastructure gap in your pipeline, we resolve that first before launching campaigns."
            />
            <EthosBlock
              title="Obsession with Hard Attribution"
              body="If a marketing strategy cannot be validated inside a data dashboard, we do not build it. Every pound of your media budget spent must have an explicit, trackable path to revenue."
            />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: slate }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center">
            The Code We Execute Daily
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Principle icon={<Lightbulb size={24} className="bwk-icon-accent" />} title="Technical Clarity" body="No creative verbosity. We communicate in costs, lead values, conversion percentages, and closed revenue values." />
            <Principle icon={<ShieldCheck size={24} className="bwk-icon-accent" />} title="Radical Honesty" body="If a paid ad campaign is underperforming or a postcode territory is oversaturated, we declare it immediately." />
            <Principle icon={<Settings size={24} className="bwk-icon-accent" />} title="Process Automation" body="We build programmatic marketing systems and automated lead engines designed to function seamlessly without demanding human maintenance." />
            <Principle icon={<Heart size={24} className="bwk-icon-accent" />} title="Client Ownership" body="We treat your regional client pipeline as a mission-critical asset. When you win market territory across your target zones, we win." />
          </div>
        </div>
      </section>

      <section
        style={{ backgroundColor: black }}
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center">Founders &amp; Partners</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { initials: "MS", name: "Maggie", role: "Founder & Strategic Director", bio: "Architect of the Blackwood Keep growth methodology. Leads client diagnostic audits, 12-month commercial roadmaps, and cross-channel strategy to transform search vulnerabilities into immediate lead opportunities." },
              { initials: "IS", name: "Ian", role: "IT Director", bio: "Owns the technical deployment of automated CRM systems, analytical tracking infrastructure, and SaaS optimisation. Integrates backend technical frameworks to ensure client acquisition pipelines operate seamlessly." },
              { initials: "JS", name: "Resources", role: "Specialist Delivery Network", bio: "Backed by a vetted ecosystem of agile media buyers, technical SEO professionals, and creative assets. We deploy specialised external talent precisely when your campaign objectives or ad budgets require deep scale." },
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
                <h2 className="mt-4" style={{ color: white, fontSize: "1.375rem" }}>{m.name}</h2>
                <h3>{m.role}</h3>
                <p className="mt-3" style={{ color: muted, fontSize: "0.9375rem", lineHeight: 1.6 }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: black, borderTop: `1px solid ${structuralBorder}` }} className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2>
            Partner with dedicated operations experts
          </h2>
          <Link to="/free-audit" className="bwk-button mt-6 inline-block">
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
