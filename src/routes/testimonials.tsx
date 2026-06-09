import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { ZohoPlaceholder } from "@/components/ZohoPlaceholder";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Verified Performance Reviews | Blackwood Keep" },
      {
        name: "description",
        content:
          "Review authentic commercial results from trade owners, facility directors, and B2B leaders across the Wirral, Liverpool, and Chester working with Blackwood Keep.",
      },
      { property: "og:title", content: "Verified Client Testimonials | Blackwood Keep" },
      {
        property: "og:description",
        content:
          "Undeniable proof. Verifiable commercial results from operators across the North West.",
      },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organisation",
          name: "Blackwood Keep Ltd",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "6",
          },
          review: [
            {
              "@type": "Review",
              author: { "@type": "Organisation", name: "Commercial M&E Contractor, Wirral" },
              reviewRating: { "@type": "Rating", ratingValue: "5" },
              reviewBody:
                "Our inbound corporate service contracts spiked over 45% in 90 days following our map optimisation.",
            },
            {
              "@type": "Review",
              author: { "@type": "Organisation", name: "Commercial Heating Firm, Liverpool" },
              reviewRating: { "@type": "Rating", ratingValue: "5" },
              reviewBody:
                "Automated SMS sequences capture leads perfectly while our guys are on tools. Essential system.",
            },
          ],
        }),
      },
    ],
  }),
  component: TestimonialsPage,
});

const dark = "#0B0B0D";
const navy = "#111827";
const gold = "#C8A45D";
const goldAntique = "#B68B3A";
const champagne = "#E5D2A0";
const silver = "#D1D5DB";
const white = "#F8F9FA";

const testimonials = [
  { who: "Commercial M&E Contractor, Wirral", quote: "Our inbound corporate service contracts spiked over 45% in 90 days following our map optimization." },
  { who: "Commercial Heating Firm, Liverpool", quote: "Automated SMS sequences capture leads perfectly while our guys are on tools. Essential system." },
  { who: "Asset & Facilities Provider, Chester", quote: "We finally hold an online presence that reflects our structural capability. Completely transformed our tender process." },
  { who: "Regional Engineering SME, Cheshire West", quote: "Absolute relief. We have full metric visibility and have eliminated thousands in wasted agency click-spend." },
  { who: "Domestic Electrical Group, North Wales", quote: "We completely dominate our local postcode search array now. The phone simply doesn't stop ringing." },
  { who: "Logistics Asset Provider, Birkenhead", quote: "They engineered a complex multi-touch funnel that connects beautifully with our sales team workflows." },
];

function TestimonialsPage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section
        style={{ backgroundColor: dark, minHeight: "50vh" }}
        className="flex items-center justify-center px-6 py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 style={{ color: champagne, fontSize: "clamp(30px,4.5vw,48px)", lineHeight: 1.2 }}>
            Undeniable proof. Verifiable commercial results.
          </h1>
          <p className="mt-6" style={{ color: silver, fontSize: "17px", lineHeight: 1.6 }}>
            We scale businesses. Explore real feedback from operators who have secured their lead
            pipelines with our frameworks.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section style={{ backgroundColor: white }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center" style={{ color: navy, fontSize: "clamp(26px,3vw,36px)" }}>
            Client Growth Journeys
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <article
                key={i}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: `0.5px solid ${silver}`,
                  borderRadius: "12px",
                  padding: "1.5rem",
                }}
                itemScope
                itemType="https://schema.org/Review"
              >
                <div
                  style={{
                    color: gold,
                    fontFamily: "var(--font-display)",
                    fontSize: "64px",
                    lineHeight: 0.8,
                  }}
                >
                  “
                </div>
                <p
                  className="mt-2"
                  itemProp="reviewBody"
                  style={{ color: "#374151", fontStyle: "italic", fontSize: "14px", lineHeight: 1.7 }}
                >
                  {t.quote}
                </p>
                <div
                  className="my-4"
                  style={{ width: "30px", height: "2px", backgroundColor: gold }}
                />
                <p
                  itemProp="author"
                  style={{ color: navy, fontSize: "14px", fontWeight: 500, fontFamily: "var(--font-sans)" }}
                >
                  Verified Client
                </p>
                <p style={{ color: gold, fontSize: "13px" }}>{t.who}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* METRIC SNAPSHOT */}
      <section style={{ backgroundColor: navy }} className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 style={{ color: champagne, fontSize: "clamp(26px,3vw,36px)" }}>
            The Performance Delta
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Stat number="67%" label="Average baseline increase in monthly inbound enquiries" />
            <Stat number="5.0 Stars" label="Average Google Review rating generated across client asset portfolios" />
            <Stat number="94%" label="Long-term client account retention rate based on performance" />
          </div>
        </div>
      </section>

      {/* GOOGLE VALIDATION */}
      <section style={{ backgroundColor: white }} className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 style={{ color: navy, fontSize: "clamp(26px,3vw,36px)" }}>Independent Verification</h2>
          <p className="mx-auto mt-4 max-w-2xl" style={{ color: "#374151", fontSize: "16px" }}>
            Track our live independent feedback matrix directly via Google Business Profile.
          </p>
          <div className="mt-8">
            <ZohoPlaceholder label="Live API Embed — Google Reviews Stream" minHeight={220} />
          </div>
          <a href="#" className="mt-6 inline-block" style={{ color: gold }}>
            Review our live Google corporate footprint →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ backgroundColor: dark, borderTop: `1px solid ${goldAntique}` }}
        className="px-6 py-16"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 style={{ color: champagne, fontSize: "clamp(24px,3vw,32px)" }}>
            Command your regional territory today.
          </h2>
          <a
            href="/free-audit"
            className="mt-6 inline-block"
            style={{
              backgroundColor: gold,
              color: dark,
              padding: "14px 28px",
              borderRadius: "8px",
              fontWeight: 500,
            }}
          >
            Secure Your Growth Audit
          </a>
        </div>
      </section>
    </PageLayout>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div
      style={{
        backgroundColor: dark,
        border: `0.5px solid ${goldAntique}`,
        borderRadius: "12px",
        padding: "2rem 1.5rem",
      }}
    >
      <div
        style={{
          color: gold,
          fontFamily: "var(--font-display)",
          fontSize: "48px",
          lineHeight: 1,
        }}
      >
        {number}
      </div>
      <p className="mt-3" style={{ color: silver, fontSize: "14px", lineHeight: 1.6 }}>
        {label}
      </p>
    </div>
  );
}
