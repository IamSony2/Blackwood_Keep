import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Accordion } from "@/components/Accordion";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Commercial Investment Scopes | Blackwood Keep" },
      {
        name: "description",
        content:
          "Transparent, performance-driven digital marketing partnerships for Wirral, Liverpool, and Cheshire businesses. Tailored project and retainer scopes without commodity packages.",
      },
      { property: "og:title", content: "Investment Scope & Value | Blackwood Keep" },
      {
        property: "og:description",
        content: "Value-driven investment, structured for performance.",
      },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Are we tied into restrictive long-term corporate contracts?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. Our growth retainers operate on a rolling monthly framework.",
              },
            },
            {
              "@type": "Question",
              name: "What is the expected timeline for measurable pipeline impact?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Lead automated follow-ups trigger live on day 1; ranking gains typically scale over 60 to 90 days.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: PricingPage,
});

const dark = "var(--color-bk-black)";
const navy = "var(--color-bk-navy)";
const gold = "var(--color-bk-gold)";
const goldAntique = "var(--color-bk-gold-antique)";
const champagne = "var(--color-bk-gold-champagne)";
const silver = "var(--color-bk-silver)";
const white = "var(--color-bk-white)";

function PricingPage() {
  const navigate = useNavigate();
  const [sector, setSector] = useState("");
  const [region, setRegion] = useState("");
  const [budget, setBudget] = useState("");

  return (
    <PageLayout>
      {/* HERO */}
      <section
        style={{ backgroundColor: dark, minHeight: "50vh" }}
        className="flex items-center justify-center px-6 py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 style={{ color: champagne, fontSize: "clamp(30px,4.5vw,48px)", lineHeight: 1.2 }}>
            Value-driven investment. Structured for performance.
          </h1>
          <p
            className="mx-auto mt-6"
            style={{ color: silver, fontSize: "17px", maxWidth: "680px", lineHeight: 1.6 }}
          >
            We do not sell fixed, pre-packaged marketing commodities. We scope our digital
            retainers entirely around your commercial revenue targets, infrastructure footprint,
            and target geographic reach.
          </p>
        </div>
      </section>

      {/* INTENT QUALIFICATION ENGINE */}
      <section style={{ backgroundColor: white }} className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 style={{ color: navy, fontSize: "clamp(24px,3vw,32px)" }}>
              How Your Investment Scope is Determined
            </h2>
            <div className="mt-8 space-y-6">
              {[
                {
                  n: "1",
                  t: "Geospatial Intensity",
                  b: "The specific volume of postcodes or territories you wish to dominate.",
                },
                {
                  n: "2",
                  t: "Infrastructure Complexity",
                  b: "Standard lead-capture funnels vs. enterprise multi-stakeholder CRM mapping.",
                },
                {
                  n: "3",
                  t: "Media Scaling Requirements",
                  b: "The speed and depth of paid ad budget allocation required to outrank competitors.",
                },
              ].map((s) => (
                <div key={s.n} className="flex gap-4">
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center"
                    style={{
                      backgroundColor: dark,
                      color: gold,
                      borderRadius: "999px",
                      fontWeight: 500,
                    }}
                  >
                    {s.n}
                  </div>
                  <div>
                    <h3 style={{ color: navy, fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "17px" }}>
                      {s.t}
                    </h3>
                    <p className="mt-1" style={{ color: "#374151", fontSize: "14px", lineHeight: 1.6 }}>
                      {s.b}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: `0.5px solid ${silver}`,
              borderRadius: "12px",
              padding: "2.5rem",
            }}
          >
            <h3 style={{ color: navy, fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "20px" }}>
              Estimate Your Scope Requirements
            </h3>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                navigate({
                  to: "/free-audit",
                  search: { sector, region, budget } as never,
                });
              }}
            >
              <ScopeSelect
                label="Select Primary Operational Sector:"
                value={sector}
                onChange={setSector}
                options={["Local Trades & FM", "Regional SME", "B2B Enterprise"]}
              />
              <ScopeSelect
                label="Target Regional Footprint:"
                value={region}
                onChange={setRegion}
                options={[
                  "Local Postcode Radius",
                  "County Dominance",
                  "Multi-Regional NW Expansion",
                ]}
              />
              <ScopeSelect
                label="Target Monthly Marketing Allocation:"
                value={budget}
                onChange={setBudget}
                options={["£1,000–£2,500", "£2,500–£5,000", "£5,000+"]}
              />
              <button
                type="submit"
                className="w-full"
                style={{
                  backgroundColor: gold,
                  color: dark,
                  padding: "14px 24px",
                  borderRadius: "8px",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Submit Scope Criteria for Full Performance Audit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: white }} className="px-6 py-20">
        <h2 className="text-center" style={{ color: navy, fontSize: "clamp(26px,3vw,36px)" }}>
          Commercial Partnership Clarity
        </h2>
        <div className="mt-12">
          <Accordion
            items={[
              {
                q: "Are we tied into restrictive long-term corporate contracts?",
                a: "No. Our growth retainers operate on a rolling monthly framework. We believe in continuously earning your partnership through verifiable ROI—not through legal lock-ins.",
              },
              {
                q: "What is the expected timeline for measurable pipeline impact?",
                a: "Lead automated follow-ups and CRM captures trigger live on day 1 of deployment. Significant increases in localised search rankings and organic lead volume typically scale structurally over a 60 to 90-day trajectory.",
              },
              {
                q: "Can we adjust our scaling budget as seasonal demand fluctuates?",
                a: "Absolutely. Ad spending and territory targeting can be adjusted or scaled dynamically depending on your operational capacity, engineering availability, and commercial requirements.",
              },
              {
                q: "What specific geographic territories does your firm support?",
                a: "Our core local dominance engines are built for the Wirral, Liverpool, Chester, Cheshire West, Cheshire East, and North Wales. For enterprise operations, we manage nationwide digital footprints.",
              },
              {
                q: "What occurs during the initial 30-day onboarding window?",
                a: "The first month involves complete operational engineering: technical asset extraction, custom tracking pixel deployment, full CRM configuration, and initial funnel asset testing. We launch fast and clean.",
              },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ backgroundColor: dark, borderTop: `1px solid ${goldAntique}` }}
        className="px-6 py-16"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 style={{ color: champagne, fontSize: "clamp(24px,3vw,32px)" }}>
            Desire an accurate commercial scope proposal?
          </h2>
          <p className="mt-4" style={{ color: silver, fontSize: "16px", lineHeight: 1.7 }}>
            Request your free video-led Pipeline Audit. We will analyse your competitors and
            present an exact, performance-backed investment layout.
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
            Request Custom Scope Audit
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

function ScopeSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span style={{ color: navy, fontSize: "14px", fontWeight: 500 }}>{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="mt-2 w-full"
        style={{
          border: `1px solid ${silver}`,
          borderRadius: "8px",
          padding: "10px 12px",
          backgroundColor: "#FFFFFF",
          color: navy,
          fontSize: "14px",
        }}
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
