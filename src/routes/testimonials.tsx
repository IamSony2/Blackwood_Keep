import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { ZohoPlaceholder } from "@/components/ZohoPlaceholder";
import { GoldDivider } from "@/components/GoldDivider";

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
          "Verifiable commercial results from operators across the North West.",
      },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Blackwood Keep Ltd",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "6",
          },
          review: [
            {
              "@type": "Review",
              author: { "@type": "Organization", name: "Commercial M&E Contractor, Wirral" },
              reviewRating: { "@type": "Rating", ratingValue: "5" },
              reviewBody:
                "Our inbound corporate service contracts spiked over 45% in 90 days following our map optimisation.",
            },
            {
              "@type": "Review",
              author: { "@type": "Organization", name: "Commercial Heating Firm, Liverpool" },
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

const black = "var(--color-bk-black)";
const slate = "var(--color-bk-slate)";
const gold = "var(--color-bk-gold)";
const goldPop = "var(--color-bk-gold-pop)";
const white = "var(--color-bk-white)";
const muted = "var(--muted-foreground)";
const structuralBorder = "var(--border)";

const testimonials = [
  { who: "Commercial M&E Contractor, Wirral", quote: "Our inbound corporate service contracts spiked over 45% in 90 days following our map optimisation." },
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
        style={{ backgroundColor: black, minHeight: "50vh" }}
        className="flex items-center justify-center px-6 py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 style={{ lineHeight: 1.2 }}>
            Verifiable commercial results
          </h1>
          <h2 className="mt-3" style={{ color: white, lineHeight: 1.2 }}>
            Client Growth Journeys
          </h2>
          <p className="mt-6" style={{ color: muted, fontSize: "1.0625rem", lineHeight: 1.6 }}>
            We scale regional enterprises. Explore real feedback from trades, facilities management,
            and B2B leaders who have secured their lead pipelines across the Wirral, Liverpool, and
            Cheshire using our marketing frameworks.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section style={{ backgroundColor: black }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center" style={{ color: white }}>
            What our customers say!
          </h2>
          <div className="mt-4 flex justify-center">
            <GoldDivider />
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <article
                key={i}
                style={{
                  backgroundColor: slate,
                  border: `0.5px solid ${structuralBorder}`,
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
                    fontSize: "4rem",
                    lineHeight: 0.8,
                  }}
                >
                  “
                </div>
                <p
                  className="mt-2"
                  itemProp="reviewBody"
                  style={{ color: muted, fontStyle: "italic", fontSize: "1.125rem", lineHeight: 1.7 }}
                >
                  {t.quote}
                </p>
                <div
                  className="my-4"
                  style={{ width: "30px", height: "2px", backgroundColor: gold }}
                />
                <p
                  itemProp="author"
                  style={{ color: white, fontSize: "1rem", fontWeight: 500, fontFamily: "var(--font-sans)" }}
                >
                  Verified Client
                </p>
                <p style={{ color: muted, fontSize: "0.9375rem" }}>{t.who}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* METRIC SNAPSHOT */}
      <section style={{ backgroundColor: slate }} className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 style={{ color: white }}>
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
      <section style={{ backgroundColor: black }} className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 style={{ color: white }}>Independent Verification</h2>
          <p className="mx-auto mt-4 max-w-2xl" style={{ color: muted, fontSize: "1.125rem" }}>
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
        style={{ backgroundColor: black, borderTop: `1px solid ${structuralBorder}` }}
        className="px-6 py-16"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 style={{ color: white }}>
            Command your regional territory today.
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
            Secure Your Growth Audit
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div
      style={{
        backgroundColor: black,
        border: `0.5px solid ${structuralBorder}`,
        borderRadius: "12px",
        padding: "2rem 1.5rem",
      }}
    >
      <div
        style={{
          color: gold,
          fontFamily: "var(--font-display)",
          fontSize: "3.125rem",
          lineHeight: 1,
        }}
      >
        {number}
      </div>
      <p className="mt-3" style={{ color: muted, fontSize: "1.125rem", lineHeight: 1.6 }}>
        {label}
      </p>
    </div>
  );
}
