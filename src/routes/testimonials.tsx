import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { ZohoPlaceholder } from "@/components/ZohoPlaceholder";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Verified Performance Reviews | Blackwood Keep" },
      {
        name: "description",
        content:
          "Review authentic commercial results from trade owners, facility directors, and B2B/B2C leaders across the Wirral, Liverpool, Chester, Cheshire West, Cheshire East, and North Wales working with Blackwood Keep.",
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
//  { who: "Commercial M&E Contractor, Wirral", quote: "Our inbound corporate service contracts spiked over 45% in 90 days following our map optimisation." },
//  { who: "Commercial Heating Firm, Liverpool", quote: "Automated SMS sequences capture leads perfectly while our guys are on tools. Essential system." },
//  { who: "Asset & Facilities Provider, Chester", quote: "We finally hold an online presence that reflects our structural capability. Completely transformed our tender process." },
//  { who: "Regional Engineering SME, Cheshire West", quote: "Absolute relief. We have full metric visibility and have eliminated thousands in wasted agency click-spend." },
//  { who: "Domestic Electrical Group, North Wales", quote: "We completely dominate our local postcode search array now. The phone simply doesn't stop ringing." },
//  { who: "Logistics Asset Provider, Birkenhead", quote: "They engineered a complex multi-touch funnel that connects beautifully with our sales team workflows." },
//    { who: "ADHD Awareness Campaigner, Knutsford", quote: "You can add this to your website"}
    { who: "Carol Gray Vaxon Labs Ltd", quote: "As someone starting out, I initially felt overwhelmed by everything that needed to be done, but Maggie made the entire process feel seamless and manageable from start to finish. In a remarkably short amount of time she developed a complete digital marketing campaign that gave me both clarity and confidence. Her work included a well-thought-out strategic marketing plan, a detailed 12-month growth roadmap with clear, actionable KPIs, and a thorough profile of my ideal client. She also created a clear and practical social media plan that I could immediately put into action. Everything was delivered to an exceptionally high standard and felt completely aligned with my business goals. What stood out most was Maggie’s ability to take the pressure off me as a new business owner. She brought structure, direction, and a real sense of momentum at a time when I needed it most. I would recommend Maggie to anyone who is looking for a strategic, efficient, and highly supportive digital marketing expert." }
];

function TestimonialsPage() {
  return (
    <PageLayout>
      <section
        style={{ backgroundColor: black, minHeight: "50vh" }}
        className="flex items-center justify-center px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 style={{ lineHeight: 1.2 }}>
            Verifiable commercial results
          </h1>
          <h2 className="mt-3" style={{ lineHeight: 1.2 }}>
            Client Growth Journeys
          </h2>
          <p className="mt-6" style={{ color: muted, fontSize: "1.0625rem", lineHeight: 1.6 }}>
            We scale regional enterprises. Explore real feedback from trades, facilities management,
            and B2B/B2C leaders who have secured their lead pipelines across the Wirral, Liverpool, Chester, Cheshire West, Cheshire East, and North Wales
            using our marketing frameworks.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: black }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center">
            Featured Case Study
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1">
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

      <section
        style={{ backgroundColor: slate, borderTop: `1px solid ${structuralBorder}` }} className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2>
            Built on structural results
          </h2>
            We don't collect superficial vanity metrics. Our focus is entirely on engineering high-converting frameworks that secure your market dominance—one enterprise at a time.
        </div>
      </section>

      <section
        style={{ backgroundColor: black, borderTop: `1px solid ${structuralBorder}` }} className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2>
            Become our next success story
          </h2>
            Want to engineer a predictable pipeline for your business? 
            <p>
              <Link to="/free-audit" className="bwk-button mt-8 inline-block">
                Start with a Free Audit
              </Link>
            </p>
        </div>
      </section>

      <section style={{ backgroundColor: slate }} className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2>Independent Verification</h2>
          <p className="mx-auto mt-4 max-w-2xl" style={{ color: muted, fontSize: "1.125rem" }}>
            Track our live independent feedback matrix directly via Google Business Profile.
          </p>
          <div className="mt-8">
            <ZohoPlaceholder label="Live API Embed — Google Reviews Stream" minHeight={220} />
          </div>
          <a href="#" className="nav-link mt-6 inline-block">
            Review our live Google corporate footprint
          </a>
        </div>
      </section>

      <section
        style={{ backgroundColor: black, borderTop: `1px solid ${structuralBorder}` }} className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2>
            Command your regional territory today
          </h2>
          <Link to="/free-audit" className="bwk-button mt-6 inline-block">
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
