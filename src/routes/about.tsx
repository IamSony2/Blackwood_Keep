import { createFileRoute, Link } from "@tanstack/react-router";
import { Lightbulb, Award, Heart, Settings, ShieldCheck } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { GoldDivider } from "@/components/GoldDivider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Strategic Digital Growth Partners | About Blackwood Keep" },
      {
        name: "description",
        content:
          "Led by Maggie Smith, Blackwood Keep engineers reliable, nonsense-free lead acquisition funnels and digital automation systems for North West businesses. Discover our operational standards.",
      },
      { property: "og:title", content: "About Blackwood Keep" },
      {
        property: "og:description",
        content:
          "Engineered for performance. Meet the principles behind Blackwood Keep.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const black = "var(--color-bk-black)";
const slate = "var(--color-bk-slate)";
const gold = "var(--color-bk-gold)";
const goldPop = "var(--color-bk-gold-pop)";
const champagne = "var(--color-bk-gold-champagne)";
const white = "var(--color-bk-white)";
const muted = "var(--muted-foreground)";
const structuralBorder = "var(--border)";

function AboutPage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section
        style={{ backgroundColor: black, minHeight: "60vh" }}
        className="flex items-center justify-center px-6 py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1
            style={{
              color: white,
              fontSize: "clamp(2.125rem, 5vw, 3.375rem)",
              lineHeight: 1.15,
            }}
          >
            Our Agency Philosophy
          </h1>
          <h2
            className="mt-2"
            style={{
              color: white,
              fontSize: "clamp(2.125rem, 5vw, 3.375rem)",
              lineHeight: 1.15,
            }}
          >
            Tired of Marketing Guesswork?
          </h2>
          <p
            className="mx-auto mt-6"
            style={{ color: muted, fontSize: "1.0625rem", maxWidth: "600px", lineHeight: 1.6 }}
          >
            Digital marketing shouldn't feel like a mystery. If you're a local trade operator,
            facilities director, or business leader, you're likely exhausted by agency jargon like
            "impressions" and "brand awareness" while your actual sales pipelines remain
            unpredictable. We built our digital marketing agency to change that, offering complete
            transparency and real financial results.
          </p>
        </div>
      </section>

      {/* OPERATIONAL STANDARDS */}
      <section style={{ backgroundColor: black }} className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center" style={{ color: white, fontSize: "clamp(1.75rem, 3vw, 2.375rem)" }}>
            A Partner, Not Just a Monthly Bill
          </h2>
          <div className="mt-4 flex justify-center">
            <GoldDivider />
          </div>
          <div className="mt-10 space-y-6" style={{ color: muted, lineHeight: 1.8, fontSize: "1.125rem" }}>
            <p>
              We don't just turn on paid ads and walk away. Before we launch anything, we work
              backward to figure out exactly what a new lead should cost your business, and we
              ensure your internal infrastructure has the capacity to handle the new client volume
              we bring in. You will never be treated as just another monthly retainer checkbox.
            </p>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: black }} className="px-6 pb-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center" style={{ color: white, fontSize: "clamp(1.75rem, 3vw, 2.375rem)" }}>
            Driving Local Growth in the Background
          </h2>
          <div className="mt-10 space-y-6" style={{ color: muted, lineHeight: 1.8, fontSize: "1.125rem" }}>
            <p>
              Operating across the Wirral, Liverpool, Chester, and North Wales, we build smart,
              data-driven lead generation systems that bring in high-quality commercial enquiries
              and build regional trust. The best part? It runs flawlessly in the background,
              leaving you free to focus on executing your day-to-day physical operations.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section style={{ backgroundColor: slate }} className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          <PullQuote
            label="Our Mission"
            quote="To give regional trades and B2B enterprises the clarity, automated systems, and confidence to capture their markets and grow—removing digital confusion so they can focus entirely on executing what they do best."
          />
          <PullQuote
            label="Our Vision"
            quote="To establish Blackwood Keep to be the leading trusted partner in high-performance digital marketing, building transparent systems that empower regional businesses to thrive with complete confidence."
          />
        </div>
      </section>

      {/* CORE PILLARS */}
      <section style={{ backgroundColor: black }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center" style={{ color: white, fontSize: "clamp(1.75rem, 3vw, 2.375rem)" }}>
            Our Non-Negotiables
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              icon={<Lightbulb size={24} style={{ color: champagne }} />}
              title="Absolute Clarity"
              body="We present every strategy in clear, actionable business terms. If a campaign metric cannot be broken down in under 30 seconds, it does not belong in our pipeline architecture."
            />
            <ValueCard
              icon={<Award size={24} style={{ color: champagne }} />}
              title="Commercial ROI Focus"
              body="We measure campaign health purely by inbound lead quality, closed commercial values, and customer acquisition efficiency—never by random social platform clicks."
            />
            <ValueCard
              icon={<Heart size={24} style={{ color: champagne }} />}
              title="Deep Strategic Alignment"
              body="We thoroughly study prospective clients before onboarding. We only initiate partnerships where our funnel development can guarantee a measurable revenue impact."
            />
            <ValueCard
              icon={<Settings size={24} style={{ color: champagne }} />}
              title="Systems Architecture"
              body="We specialise in hands-off infrastructure, developing methodical, automated automation protocols that liberate your management layer from data entry tasks."
            />
            <ValueCard
              icon={<ShieldCheck size={24} style={{ color: champagne }} />}
              title="Direct Candour"
              body="We remain conscientiously realistic regarding target timelines, required media budgets, and market realities. No inflated projections—just predictable execution."
            />
          </div>
        </div>
      </section>

      {/* ALLIANCE HIGHLIGHT */}
      <section style={{ backgroundColor: slate }} className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 style={{ color: white, fontSize: "clamp(1.625rem, 3vw, 2.125rem)" }}>
            Built on Performance, Not Advertising.
          </h2>
          <p className="mt-6" style={{ color: muted, fontSize: "1.125rem", lineHeight: 1.7 }}>
            The core of our client portfolio is constructed through intentional industry referrals
            and long-term asset performance. If your business requires transparent growth, we invite
            you to experience our strategic process directly.
          </p>
          <Link to="/referrals" className="mt-6 inline-block" style={{ color: gold }}>
            Review our referral guidelines →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ backgroundColor: black, borderTop: `1px solid ${structuralBorder}` }}
        className="px-6 py-16"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 style={{ color: white, fontSize: "clamp(1.625rem, 3vw, 2.125rem)" }}>
            Evaluate your current marketing spend efficiency.
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
            Request Free Pipeline Audit
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

function PullQuote({ label, quote }: { label: string; quote: string }) {
  return (
    <div
      style={{
        borderLeft: `3px solid ${gold}`,
        backgroundColor: black,
        borderRadius: "0 12px 12px 0",
        padding: "1.5rem",
      }}
    >
      <p
        style={{
          color: champagne,
          fontSize: "0.8125rem",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
        }}
      >
        {label}
      </p>
      <p
        className="mt-4"
        style={{
          color: white,
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "1.125rem",
          lineHeight: 1.6,
        }}
      >
        “{quote}”
      </p>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div
      style={{
        backgroundColor: slate,
        border: `0.5px solid ${structuralBorder}`,
        borderRadius: "12px",
        padding: "1.25rem",
      }}
    >
      {icon}
      <h3 className="mt-4" style={{ color: white, fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "1.1875rem" }}>
        {title}
      </h3>
      <p className="mt-2" style={{ color: muted, fontSize: "1.0625rem", lineHeight: 1.6 }}>
        {body}
      </p>
    </div>
  );
}
