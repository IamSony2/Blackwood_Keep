import { createFileRoute, Link } from "@tanstack/react-router";
import { Cog, Star, Rocket, Check } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Digital Marketing Capabilities Matrix | Blackwood Keep" },
      {
        name: "description",
        content:
          "Comprehensive CRM automation, local map optimization, funnel architecture, SEO, and paid ad deployment. Master capabilities page serving the Wirral, Liverpool, and Chester.",
      },
      { property: "og:title", content: "Services & Capabilities | Blackwood Keep" },
      {
        property: "og:description",
        content:
          "High-performance digital infrastructure engineered for conversion. CRM automation, local SEO, and paid media.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const dark = "#0B0B0D";
const navy = "#111827";
const gold = "#C8A45D";
const goldAntique = "#B68B3A";
const champagne = "#E5D2A0";
const silver = "#D1D5DB";
const white = "#F8F9FA";

function ServicesPage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section
        style={{ backgroundColor: dark, minHeight: "60vh" }}
        className="flex items-center justify-center px-6 py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 style={{ color: champagne, fontSize: "clamp(30px,4.5vw,48px)", lineHeight: 1.2 }}>
            High-performance digital infrastructure. Engineered for conversion.
          </h1>
          <p className="mt-6" style={{ color: silver, fontSize: "17px", lineHeight: 1.6 }}>
            We manage and deploy your complete digital customer acquisition layout. No fragmented
            tools, no loose ends. All systems contained within a unified master framework.
          </p>
        </div>
      </section>

      {/* MASTER CORE CAPABILITIES */}
      <section style={{ backgroundColor: white }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center" style={{ color: navy, fontSize: "clamp(26px,3vw,36px)" }}>
            Core Performance Modules
          </h2>
          <div className="mt-12 space-y-10">
            <MasterPanel
              icon={<Cog size={56} style={{ color: gold }} />}
              title="CRM Automation & Lead Capture Sequences"
              body="The primary source of revenue loss for regional trades and SMEs is lead response latency. If a customer inquires and waits two hours, they call your competitor. We program complete, automated CRM data frameworks that instantly ingest, tag, and follow up with inbound opportunities the second they arrive. Keep your pipeline moving flawlessly while your engineers operate on site or your leadership sits in boardrooms."
              included={[
                "Zoho CRM, HubSpot, and custom pipeline staging",
                "Instant automated SMS & email booking triggers",
                "Multi-channel funnel capture forms",
                "Plain-English sales pipeline reporting panels",
              ]}
              target="Regional trades, facilities companies, and complex business operations looking to systematically eliminate manual lead tracking error."
            />
            <MasterPanel
              icon={<Star size={56} style={{ color: gold }} />}
              title="Local Postcode Dominance & Authority Systems"
              body="Modern B2B and regional consumers execute deep local validation before engaging. If your regional competitors display extensive verified profiles and your presence is minimal, they secure the contract. We automate elite five-star review generation loops directly from your completed jobs, while strategically optimising your geographic index to capture high-intent commercial and domestic queries across the Wirral, Liverpool, and Chester."
              included={[
                "Automated post-job review request deployment",
                "Google Business Profile geospatial optimization",
                "Active multi-platform review monitoring",
                "Monthly regional authority audit metrics",
              ]}
              target="Contractors, specialised engineering firms, and local service networks dependent on local search superiority and total corporate credibility."
            />
            <MasterPanel
              icon={<Rocket size={56} style={{ color: gold }} />}
              title="High-Intent Customer Acquisition Engines"
              body="Stop burning investment capital on broad keyword matching or vague agency traffic reports. We engineer conversion-first digital architectures backed by highly precise paid media positioning (Google Ads, Meta, LinkedIn). We zero in exclusively on targeted decision-makers and high-value search criteria, ensuring your media allocation lands in front of ready-to-buy users."
              included={[
                "Full technical SEO audit and architectural crawl fixes",
                "Granular target postcode paid ad targeting",
                "High-converting bespoke landing page deployment",
                "End-to-end multi-touch ROI attribution mapping",
              ]}
              target="B2B enterprise layers, facilities management operators, and aggressive growth firms looking for predictable, scalable inbound contract values."
            />
          </div>
        </div>
      </section>

      {/* AUXILIARY SEGMENTS */}
      <section style={{ backgroundColor: navy }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 style={{ color: champagne, fontSize: "clamp(26px,3vw,36px)" }}>
            Integrated Systems Included in All Scopes
          </h2>
          <p className="mx-auto mt-4 max-w-3xl" style={{ color: silver, fontSize: "16px" }}>
            Deployed automatically to support and secure your main customer acquisition engine.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <AuxCard
              title="Bespoke Web Development"
              body="Flat, lightning-fast UI architecture built for sub-2-second conversion speed."
            />
            <AuxCard
              title="Nurture Campaign Automation"
              body="Dynamic email retention flows engineered to stay top-of-mind with commercial procurement contacts."
            />
            <AuxCard
              title="Rigorous Competitor Benchmarking"
              body="Real-time tracking of regional search positioning to keep your firm ahead."
            />
          </div>
        </div>
      </section>

      {/* USER PERSONAS */}
      <section style={{ backgroundColor: white }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center" style={{ color: navy, fontSize: "clamp(26px,3vw,36px)" }}>
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
        style={{ backgroundColor: dark, borderTop: `1px solid ${goldAntique}` }}
        className="px-6 py-16"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 style={{ color: champagne, fontSize: "clamp(24px,3vw,32px)" }}>
            Uncertain which capabilities fit your target growth?
          </h2>
          <p className="mt-4" style={{ color: silver, fontSize: "16px", lineHeight: 1.7 }}>
            Book our strategic Pipeline Audit. We will analyze your infrastructure and define
            exactly which modules will drive immediate cash flow—and which are completely
            unnecessary.
          </p>
          <Link
            to="/free-audit"
            className="mt-8 inline-block"
            style={{
              backgroundColor: gold,
              color: dark,
              padding: "14px 28px",
              borderRadius: "8px",
              fontWeight: 500,
            }}
          >
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
        backgroundColor: "#FFFFFF",
        border: `0.5px solid ${silver}`,
        borderRadius: "12px",
      }}
    >
      <div
        className="flex items-center justify-center p-8"
        style={{ backgroundColor: dark }}
      >
        {icon}
      </div>
      <div className="p-8">
        <h3 style={{ color: gold, fontSize: "22px" }}>{title}</h3>
        <p className="mt-4" style={{ color: "#374151", fontSize: "15px", lineHeight: 1.7 }}>
          {body}
        </p>
        <div className="mt-6">
          <p style={{ color: navy, fontWeight: 500, fontSize: "14px" }}>What's included:</p>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {included.map((i) => (
              <li
                key={i}
                className="flex gap-2"
                style={{ color: "#374151", fontSize: "14px" }}
              >
                <Check size={16} style={{ color: gold, flexShrink: 0, marginTop: 4 }} />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6" style={{ color: "#6B7280", fontSize: "13px", fontStyle: "italic" }}>
          <strong style={{ color: navy }}>Target Profile:</strong> {target}
        </p>
        <Link
          to="/free-audit"
          className="mt-6 inline-block"
          style={{ color: gold, fontSize: "14px" }}
        >
          Select this module for audit framework →
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
        backgroundColor: dark,
        border: `0.5px solid ${goldAntique}`,
        borderRadius: "12px",
        padding: "1.5rem",
      }}
    >
      <h3 style={{ color: gold, fontSize: "18px" }}>{title}</h3>
      <p className="mt-3" style={{ color: silver, fontSize: "14px", lineHeight: 1.6 }}>
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
        backgroundColor: "#FFFFFF",
        border: `0.5px solid ${silver}`,
        borderRadius: "12px",
        padding: "1.5rem",
      }}
    >
      <h3 style={{ color: navy, fontSize: "20px" }}>{name}</h3>
      <p className="mt-2" style={{ color: gold, fontSize: "13px" }}>
        {who}
      </p>
      <p className="mt-4" style={{ color: "#374151", fontSize: "14px", lineHeight: 1.6 }}>
        <strong style={{ color: navy }}>Friction:</strong> {friction}
      </p>
      <p className="mt-2" style={{ color: "#374151", fontSize: "14px", lineHeight: 1.6 }}>
        <strong style={{ color: navy }}>Resolution:</strong> {resolution}
      </p>
    </div>
  );
}
