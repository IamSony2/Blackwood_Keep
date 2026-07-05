<![CDATA[import { createFileRoute, Link } from "@tanstack/react-router";
import { Cog, Star, Rocket, Check } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Digital Marketing Capabilities Matrix | Blackwood Keep" },
      {
        name: "description",
        content:
          "Comprehensive CRM automation, local map optimisation, funnel architecture, SEO, and paid ad deployment. Master capabilities page serving the Wirral, Liverpool, and Chester.",
      },
      { property: "og:title", content: "Services & Capabilities | Blackwood Keep" },
      {
        property: "og:description",
        content:
          "High-performance digital infrastructure. CRM automation, local SEO, and paid media.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const black = "var(--color-bk-black)";
const slate = "var(--color-bk-slate)";
const gold = "var(--color-bk-gold)";
const goldPop = "var(--color-bk-gold-pop)";
const champagne = "var(--color-bk-gold-champagne)";
const white = "var(--color-bk-white)";
const muted = "var(--muted-foreground)";
const structuralBorder = "var(--border)";

function ServicesPage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section
        style={{ backgroundColor: black, minHeight: "60vh" }}
        className="flex items-center justify-center px-6 py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 style={{ lineHeight: 1.2 }}>
            Acquisition Systems &amp; Pipeline Architecture
          </h1>
          <h2 className="mt-3" style={{ lineHeight: 1.2 }}>
            Unified Acquisition Framework
          </h2>
          <p className="mt-6" style={{ color: muted, fontSize: "1.1875rem", lineHeight: 1.6 }}>
            We design, deploy, and manage your complete digital marketing and customer acquisition
            systems. By eliminating fragmented tools and loose ends, we build a seamless,
            high-performance ecosystem engineered solely to scale revenue for trades, facilities
            management, and B2B enterprises across the Wirral, Liverpool, Cheshire and North Wales.
          </p>
        </div>
      </section>

      {/* MASTER CORE CAPABILITIES */}
      <section style={{ backgroundColor: black }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center">
            Core Performance Modules
          </h2>
          <div className="mt-12 space-y-10">
            <MasterPanel
              icon={<Cog size={56} className="bwk-icon-accent" />}
              title="CRM Automation & Lead Capture Sequences"
              body="The primary source of revenue loss for regional trades and SMEs is lead response latency. If a customer inquires and waits two hours, they call your competitor. We program complete, automated CRM data frameworks that instantly ingest, tag, and follow up with inbound opportunities the second they arrive. Keep your pipeline moving flawlessly while your engineers operate on site and your leadership team drives strategic growth."
              included={[
                "Blackwood CRM and custom pipeline staging",
                "Instant automated SMS & email booking triggers",
                "Multi-channel funnel capture forms",
                "Plain-English sales pipeline reporting panels",
              ]}
              target="Regional trades, facilities companies, and complex business operations looking to systematically eliminate manual lead tracking error."
            />
            <MasterPanel
              icon={<Star size={56} className="bwk-icon-accent" />}
              title="Local Postcode Dominance & Authority Systems"
              body="Modern B2B and regional consumers execute deep local validation before engaging. If your regional competitors display extensive verified profiles and your presence is minimal, they secure the contract. We automate elite five-star review generation loops directly from your completed jobs, while strategically optimising your geographic index to capture high-intent commercial and domestic queries across the Wirral, Liverpool, and Chester."
              included={[
                "Automated post-job review request deployment",
                "Google Business Profile geospatial optimisation",
                "Active multi-platform review monitoring",
                "Monthly regional authority audit metrics",
              ]}
              target="Contractors, specialised engineering companies, and local service networks dependent on local search superiority and total corporate credibility."
            />
            <MasterPanel
              icon={<Rocket size={56} className="bwk-icon-accent" />}
              title="High-Intent Customer Acquisition Engines"
              body="Stop burning investment capital on broad keyword matching or vague agency traffic reports. We engineer conversion-first digital architectures backed by highly precise paid media positioning (Google Ads, Meta, LinkedIn). We zero in exclusively on targeted decision-makers and high-value search criteria, ensuring your media allocation lands in front of ready-to-buy users."
              included={[
                "Full technical SEO audit and architectural crawl fixes",
                "Granular target postcode paid ad targeting",
                "High-converting bespoke landing page deployment",
                "End-to-end multi-touch ROI attribution mapping",
              ]}
              target="B2B enterprise layers, facilities management operators, and aggressive growth companies looking for predictable, scalable inbound contract values."
            />
          </div>
        </div>
      </section>

      {/* AUXILIARY SEGMENTS */}
      <section style={{ backgroundColor: slate }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2>
            Integrated Systems Included in All Scopes
          </h2>
          <p className="mx-auto mt-4 max-w-3xl" style={{ color: muted, fontSize: "1.125rem" }}>
            Deployed automatically to support and secure your main customer acquisition engine.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <AuxCard
              title="Bespoke Web Development"
              body="Clean, lightning-fast website funnel designed to load instantly so your visitors never get frustrated and leave before reaching out."
            />
            <AuxCard
              title="Nurture Campaign Automation"
              body="Dynamic email retention flows engineered to stay top-of-mind with commercial procurement contacts."
            />
            <AuxCard
              title="Rigorous Competitor Benchmarking"
              body="Real-time tracking of regional search positioning to keep your company ahead."
            />
          </div>
        </div>
      </section>

      {/* USER PERSONAS */}
      <section style={{ backgroundColor: black }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center">
            Who We Engineer For
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <PersonaCard
              name="The Busy Contractor"
              who="Regional trade firms across Wirral & Merseyside"
              friction="Losing lucrative jobs due to slow lead handling"
              resolution="Absolute local search dominance and hands-free text follow-ups."
            />
            <PersonaCard
              name="The Facilities & Asset Director"
              who="FM operators across Cheshire, Liverpool, & North Wales"
              friction="Underperforming web assets making them look small in procurement tenders"
              resolution="Corporate authority layout and deep enterprise CRM workflows."
            />
            <PersonaCard
              name="The Ambitious Business Owner"
              who="Mid-market regional SMEs"
              friction="Wasting budget across disjointed marketing channels with no attribution"
              resolution="A single, synchronised system built and run transparently."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ backgroundColor: black, borderTop: `1px solid ${structuralBorder}` }}
        className="px-6 py-16"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2>
            Uncertain which capabilities fit your target growth?
          </h2>
          <p className="mt-4" style={{ color: muted, fontSize: "1.125rem", lineHeight: 1.7 }}>
            Book our strategic Pipeline Audit. We will analyse your infrastructure and define
            exactly which modules will drive immediate cash flow—and which are completely
            unnecessary.
          </p>
          <Link to="/free-audit" className="bwk-button mt-8 inline-block">
            Book Free Pipeline Audit
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

function MasterPanel({
  icon,
  title,
  body,
  included,
  target,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  included: string[];
  target: string;
}) {
  return (
    <article
      className="grid grid-cols-1 gap-8 overflow-hidden md:grid-cols-[200px_1fr]"
      style={{
        backgroundColor: slate,
        border: `0.5px solid ${structuralBorder}`,
        borderRadius: "12px",
      }}
    >
      <div
        className="flex items-center justify-center p-8"
        style={{ backgroundColor: black }}
      >
        {icon}
      </div>
      <div className="p-8">
        <h3 style={{ color: white, fontSize: "1.5rem" }}>{title}</h3>
        <p className="mt-4" style={{ color: muted, fontSize: "1.0625rem", lineHeight: 1.7 }}>
          {body}
        </p>
        <div className="mt-6">
          <p style={{ color: white, fontWeight: 500, fontSize: "1rem" }}>What's included:</p>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {included.map((i) => (
              <li
                key={i}
                className="flex gap-2"
                style={{ color: muted, fontSize: "1rem" }}
              >
                <Check size={16} className="bwk-icon-accent" style={{ flexShrink: 0, marginTop: 4 }} />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6" style={{ color: muted, fontSize: "0.9375rem", fontStyle: "italic" }}>
          <strong style={{ color: white }}>Target Profile:</strong> {target}
        </p>
        <Link to="/free-audit" className="nav-link mt-6 inline-block" style={{ fontSize: "1rem" }}>
          Select this module for audit framework
        </Link>
      </div>
    </article>
  );
}

function AuxCard({ title, body }: { title: string; body: string }) {
  return (
    <div
      className="text-left"
      style={{
        backgroundColor: black,
        border: `0.5px solid ${structuralBorder}`,
        borderRadius: "12px",
        padding: "1.5rem",
      }}
    >
      <h3 style={{ color: white, fontSize: "1.25rem" }}>{title}</h3>
      <p className="mt-3" style={{ color: muted, fontSize: "1rem", lineHeight: 1.6 }}>
        {body}
      </p>
    </div>
  );
}

function PersonaCard({
  name,
  who,
  friction,
  resolution,
}: {
  name: string;
  who: string;
  friction: string;
  resolution: string;
}) {
  return (
    <div
      style={{
        backgroundColor: slate,
        border: `0.5px solid ${structuralBorder}`,
        borderRadius: "12px",
        padding: "1.5rem",
      }}
    >
      <h3 style={{ color: white, fontSize: "1.375rem" }}>{name}</h3>
      <p className="mt-2" style={{ color: champagne, fontSize: "0.9375rem" }}>
        {who}
      </p>
      <p className="mt-4" style={{ color: muted, fontSize: "1rem", lineHeight: 1.6 }}>
        <strong style={{ color: white }}>Friction:</strong> {friction}
      </p>
      <p className="mt-2" style={{ color: muted, fontSize: "1rem", lineHeight: 1.6 }}>
        <strong style={{ color: white }}>Resolution:</strong> {resolution}
      </p>
    </div>
  );
}
]]>