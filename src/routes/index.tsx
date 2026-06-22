import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Clock,
  PoundSterling,
  TrendingUp,
  ArrowDown,
  MapPin,
  MessageSquare,
  Target,
  Workflow,
  ShieldCheck,
  Cog,
  Settings2,
  Star,
  Rocket,
  Check,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { CastleShield } from "@/components/CastleShield";
import { GoldDivider } from "@/components/GoldDivider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "B2B Enterprise & Local Trade Digital Marketing | Blackwood Keep" },
      {
        name: "description",
        content:
          "Blackwood Keep engineers high-converting marketing funnels, local SEO optimisation, and scalable acquisition strategies for trades, facilities management, and B2B enterprises across the North West. Book your pipeline audit.",
      },
      {
        property: "og:title",
        content: "B2B Enterprise & Local Trade Digital Marketing | Blackwood Keep",
      },
      {
        property: "og:description",
        content:
          "Marketing clarity. Measurable growth. Predictable pipeline for trades, FM, and B2B enterprises across the Wirral, Liverpool, and Cheshire.",
      },
      // TODO: replace with final brand social-share image once available
      { property: "og:image", content: "/og-placeholder.jpg" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Blackwood Keep Ltd",
          email: "hello@blackwoodkeep.co.uk",
          description: "Creative Design & Digital Marketing Solutions",
          areaServed: [
            "Wirral",
            "Liverpool",
            "Birkenhead",
            "Chester",
            "Cheshire West",
            "Cheshire East",
            "North Wales",
            "Merseyside",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

// 60/30/10 brand rule: black = dominant canvas, slate = structure, white = typography, gold/champagne = accents only
const black = "var(--color-bk-black)";
const slate = "var(--color-bk-slate)";
const gold = "var(--color-bk-gold)";
const champagne = "var(--color-bk-gold-champagne)";
const white = "var(--color-bk-white)";
const muted = "var(--muted-foreground)";
const structuralBorder = "var(--border)";

function Home() {
  const scrollTo = (id: string) => {
    if (typeof document === "undefined") return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageLayout>
      {/* SECTION 1 — HERO */}
      <section
        style={{ backgroundColor: black }}
        className="flex items-center justify-center px-6 py-24 md:py-32"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <CastleShield size={72} />
          <h1
            className="mt-6"
            style={{
              color: white,
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(32px, 5vw, 56px)",
              lineHeight: 1.15,
            }}
          >
            Your Stronghold for Business Growth. Predictable Pipeline and Marketing Clarity.
          </h1>
          <p
            className="mt-6"
            style={{ color: muted, fontSize: "18px", maxWidth: "720px", lineHeight: 1.6 }}
          >
            We design and deploy high-converting digital marketing systems, local market dominance
            frameworks, and multi-channel paid campaigns that convert clicks into commercial
            contracts. Built specifically for trades, facilities management, B2C and B2B enterprises
            across the Wirral, Liverpool, and Cheshire.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/free-audit"
              style={{
                backgroundColor: gold,
                color: black,
                borderRadius: "8px",
                padding: "14px 28px",
                fontWeight: 500,
                fontSize: "15px",
              }}
            >
              Book a Pipeline Audit
            </Link>
            <button
              type="button"
              onClick={() => scrollTo("how-it-works")}
              style={{
                border: `1px solid ${gold}`,
                color: gold,
                borderRadius: "8px",
                padding: "14px 28px",
                fontWeight: 500,
                fontSize: "15px",
                background: "transparent",
              }}
            >
              See How It Works
            </button>
          </div>
          <div className="mt-10">
            <GoldDivider />
          </div>
        </div>
      </section>

      {/* SECTION 2 — SEGMENTATION GATEWAY */}
      <section style={{ backgroundColor: slate }} className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 md:grid-cols-2">
          <SegmentCard
            heading="Local Trades & Facilities Management"
            body="For regional contractors, M&E engineers, and FM providers across the Wirral, Liverpool, and North Wales who require consistent local lead volume, dominant search visibility, and frictionless pipeline booking."
            bullets={[
              { icon: <MapPin size={18} />, text: "Local map pack dominance" },
              { icon: <MessageSquare size={18} />, text: "Automated text response sequences" },
              { icon: <Target size={18} />, text: "High-intent localised paid campaigns" },
            ]}
            cta="Explore Trade & FM Growth Systems"
            onClick={() => scrollTo("sectors")}
            border="right"
          />
          <SegmentCard
            heading="B2B Enterprise & Infrastructure"
            body="For high-growth commercial enterprises requiring sophisticated multi-stakeholder funnel architecture, technical enterprise SEO, and ironclad multi-touch attribution dashboards."
            bullets={[
              { icon: <Workflow size={18} />, text: "Account-Based Marketing (ABM) infrastructure" },
              { icon: <ShieldCheck size={18} />, text: "Regulatory data compliance" },
              { icon: <Cog size={18} />, text: "Advanced custom CRM configuration" },
            ]}
            cta="Explore Enterprise Solutions"
            onClick={() => scrollTo("sectors")}
          />
        </div>
      </section>

      {/* SECTION 3 — PROBLEM / SOLUTION */}
      <section style={{ backgroundColor: black }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 style={{ color: white, fontSize: "clamp(28px,3.5vw,40px)" }}>
            Does any of this sound familiar?
          </h2>
          <div className="mt-4 flex justify-center">
            <GoldDivider />
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <ProblemCard
              icon={<Clock size={28} style={{ color: champagne }} />}
              title="You're too busy on site to capture incoming inquiries"
              body="Every day your team means to handle incoming leads. Every day field logistics and jobs take over while your phone rings out."
              solution="We engineer automated capture."
            />
            <ProblemCard
              icon={<PoundSterling size={28} style={{ color: champagne }} />}
              title="You've spent heavily on ads before with zero visibility"
              body="Wasted spend on generic ad agencies who gave you clicks instead of signed commercial contracts. Sound familiar?"
              solution="We measure commercial contract wins, not clicks."
            />
            <ProblemCard
              icon={<TrendingUp size={28} style={{ color: champagne }} />}
              title="You are operating on a volatile feast-or-famine cycle"
              body="Fully booked this month, worried about pipeline health the next. No automated system smoothing your client acquisition."
              solution="We build a predictable revenue engine."
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — ONBOARDING MATRIX */}
      <section id="how-it-works" style={{ backgroundColor: black }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 style={{ color: white, fontSize: "clamp(28px,3.5vw,40px)" }}>
            The Blueprint to Predictable Growth
          </h2>
          <p
            className="mx-auto mt-4 max-w-3xl"
            style={{ color: muted, fontSize: "16px", lineHeight: 1.7 }}
          >
            A structured, dual-speed onboarding process engineered to eliminate launch friction
            while protecting enterprise compliance.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <PhaseCard
              phase="Phase 01"
              title="The Pipeline Audit"
              focus="We pinpoint exactly where your digital pipeline is leaking revenue."
              technical="A comprehensive diagnostic review of your historical ad account metrics, domain architecture, and organic search index vulnerabilities."
              deliverable="Includes a 30-minute discovery strategy session and a transparent, understandable digital growth map."
            />
            <PhaseCard
              phase="Phase 02"
              title="The Framework Deployment"
              focus="We design, build, and deploy your custom acquisition engine."
              technical="Structural integration of high-converting landing assets, automated CRM customer nurture paths, tracking pixels, and localised tracking logic."
              deliverable="A complete launch-ready asset stack, fully compliance-checked and configured to your core offerings."
            />
            <PhaseCard
              phase="Phase 03"
              title="The Velocity Scale"
              focus="We activate the campaigns and scale your inbound contract flow."
              technical="Continuous multi-variant split testing, local algorithm optimisation, automated review acquisition loops, and transparent attribution updates."
              deliverable="24/7 access to live performance metrics and recurring commercial account reviews."
            />
          </div>
          <p className="mt-10" style={{ color: muted, fontSize: "14px" }}>
            Average onboarding timeline from discovery audit to live market execution: 14 to 21
            business days.
          </p>
          <Link
            to="/free-audit"
            className="mt-8 inline-block"
            style={{
              backgroundColor: gold,
              color: black,
              borderRadius: "8px",
              padding: "14px 28px",
              fontWeight: 500,
            }}
          >
            Start with a Free Audit
          </Link>
        </div>
      </section>

      {/* SECTION 5 — SECTORS & SERVICES */}
      <section id="sectors" style={{ backgroundColor: slate }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 style={{ color: white, fontSize: "clamp(28px,3.5vw,40px)" }}>
            Engineered Growth Frameworks
          </h2>
          <p className="mx-auto mt-4 max-w-3xl" style={{ color: muted, fontSize: "16px" }}>
            Advanced digital architecture tailored to your specific commercial operations.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <SectorCard
              icon={<Settings2 size={28} style={{ color: champagne }} />}
              title="CRM Automation & Lead Nurturing"
              body="Never allow an enterprise or domestic lead to go cold. We engineer rapid automated response protocols and follow-up infrastructure so enquiries are captured instantly while you operate your daily business."
            />
            <SectorCard
              icon={<Star size={28} style={{ color: champagne }} />}
              title="Local Map Pack & Reputation Engineering"
              body="Establish absolute regional authority across the Wirral, Liverpool, and Chester. We automate five-star review loops and optimise your local search profile to guarantee you are the primary firm selected."
            />
            <SectorCard
              icon={<Rocket size={28} style={{ color: champagne }} />}
              title="Funnel Optimisation & Paid Campaigns"
              body="Eliminate marketing guesswork. We build bespoke lead capture engines and manage high-intent advertising budgets targeted directly at procurement managers and high-value domestic clients."
            />
          </div>
          <Link
            to="/services"
            className="mt-10 inline-block"
            style={{ color: gold, fontSize: "15px" }}
          >
            Explore Full Capabilities Matrix →
          </Link>
        </div>
      </section>

      {/* SECTION 6 — TESTIMONIALS STRIP */}
      <section style={{ backgroundColor: black }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 style={{ color: white, fontSize: "clamp(28px,3.5vw,40px)" }}>
            Validated Commercial Success
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <TestimonialCard
              quote="Before Blackwood Keep, we were pouring ad spend into a black hole. They built a localised funnel that streamlined our inbound inquiries completely. We finally have total clarity."
              attr="J.W., Roofing Contractor, Wirral"
            />
            <TestimonialCard
              quote="Chasing contract compliance updates and inbound procurement leads used to eat my entire week. Their CRM setup automated the follow-up loop entirely. I have my operational time back."
              attr="S.M., Facilities Manager, Chester"
            />
            <TestimonialCard
              quote="The initial pipeline audit exposed structural leaks in our website checkout that were costing us thousands. They fixed it fast, clean, and in plain English."
              attr="M.T., Enterprise Business Owner, Liverpool"
            />
          </div>
          <Link
            to="/testimonials"
            className="mt-10 inline-block"
            style={{ color: gold, fontSize: "15px" }}
          >
            Read more testimonials →
          </Link>
        </div>
      </section>

      {/* SECTION 7 — REFERRALS MENTION */}
      <section style={{ backgroundColor: slate }} className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2 style={{ color: white, fontSize: "clamp(26px,3vw,36px)" }}>
              Partner with Blackwood Keep
            </h2>
            <p
              className="mt-6"
              style={{ color: muted, fontSize: "16px", lineHeight: 1.7 }}
            >
              Our growth is anchored directly to regional trust and executive word of mouth. If you
              introduce our engineering capabilities to a regional business or facilities company
              looking to scale customer acquisition, we reward your advocacy through a transparent
              referral ecosystem.
            </p>
            <Link
              to="/referrals"
              className="mt-6 inline-block"
              style={{ color: gold, fontSize: "15px" }}
            >
              Explore our referral programme details →
            </Link>
          </div>
          <div
            style={{
              backgroundColor: black,
              border: `1px solid ${structuralBorder}`,
              borderRadius: "12px",
              padding: "1.5rem",
            }}
          >
            <h3 style={{ color: white, fontSize: "22px" }}>Strategic Alliances</h3>
            <ul className="mt-4 space-y-3" style={{ color: muted, fontSize: "15px" }}>
              <li className="flex gap-3">
                <Check size={18} style={{ color: champagne, flexShrink: 0, marginTop: 3 }} />
                <span>
                  Regional Trade Networks — Mechanical, electrical, structural, building contractors
                </span>
              </li>
              <li className="flex gap-3">
                <Check size={18} style={{ color: champagne, flexShrink: 0, marginTop: 3 }} />
                <span>Facilities & Asset Management Providers</span>
              </li>
              <li className="flex gap-3">
                <Check size={18} style={{ color: champagne, flexShrink: 0, marginTop: 3 }} />
                <span>High-Growth B2B Operations seeking automated pipeline stability</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section
        style={{ backgroundColor: black, borderTop: `1px solid ${structuralBorder}` }}
        className="px-6 py-20"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <CastleShield size={60} />
          <h2 className="mt-6" style={{ color: white, fontSize: "36px" }}>
            Eliminate Pipeline Chaos. Secure Your Growth Plan.
          </h2>
          <p className="mt-4" style={{ color: muted, fontSize: "16px", lineHeight: 1.7 }}>
            Book your comprehensive, plain-English Growth Audit today. No high-pressure sales
            scripts. Just an objective analysis of your market vulnerabilities and absolute
            pipeline opportunities.
          </p>
          <Link
            to="/free-audit"
            className="mt-8 inline-block"
            style={{
              backgroundColor: gold,
              color: black,
              padding: "14px 32px",
              borderRadius: "8px",
              fontWeight: 500,
            }}
          >
            Secure Your Free Growth Audit
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

function SegmentCard({
  heading,
  body,
  bullets,
  cta,
  onClick,
  border,
}: {
  heading: string;
  body: string;
  bullets: { icon: React.ReactNode; text: string }[];
  cta: string;
  onClick: () => void;
  border?: "right";
}) {
  return (
    <div
      className="p-8 md:p-10"
      style={{
        borderRight: border === "right" ? `0.5px solid ${structuralBorder}` : undefined,
        borderBottom: `0.5px solid ${structuralBorder}`,
      }}
    >
      <h3 style={{ color: white, fontSize: "24px" }}>{heading}</h3>
      <p className="mt-4" style={{ color: muted, fontSize: "15px", lineHeight: 1.7 }}>
        {body}
      </p>
      <ul className="mt-6 space-y-3">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-center gap-3" style={{ color: muted, fontSize: "14px" }}>
            <span style={{ color: champagne }}>{b.icon}</span>
            <span>{b.text}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={onClick}
        className="mt-8"
        style={{
          backgroundColor: gold,
          color: black,
          padding: "12px 24px",
          borderRadius: "8px",
          fontWeight: 500,
          fontSize: "14px",
        }}
      >
        {cta}
      </button>
    </div>
  );
}

function ProblemCard({
  icon,
  title,
  body,
  solution,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  solution: string;
}) {
  return (
    <div className="text-left">
      <div
        style={{
          backgroundColor: slate,
          border: `0.5px solid ${structuralBorder}`,
          borderRadius: "12px",
          padding: "1.5rem",
          minHeight: "260px",
        }}
      >
        {icon}
        <h3 className="mt-4" style={{ color: white, fontSize: "18px" }}>
          {title}
        </h3>
        <p className="mt-3" style={{ color: muted, fontSize: "14px", lineHeight: 1.6 }}>
          {body}
        </p>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <ArrowDown size={24} style={{ color: gold }} />
        <p className="mt-2 text-center" style={{ color: gold, fontSize: "15px", fontWeight: 500 }}>
          {solution}
        </p>
      </div>
    </div>
  );
}

function PhaseCard({
  phase,
  title,
  focus,
  technical,
  deliverable,
}: {
  phase: string;
  title: string;
  focus: string;
  technical: string;
  deliverable: string;
}) {
  return (
    <div
      className="flex flex-col text-left"
      style={{
        backgroundColor: slate,
        border: `0.5px solid ${structuralBorder}`,
        borderRadius: "12px",
        padding: "1.75rem",
      }}
    >
      <span
        className="self-start"
        style={{
          backgroundColor: black,
          color: champagne,
          padding: "4px 10px",
          borderRadius: "999px",
          fontSize: "11px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {phase}
      </span>
      <h3 className="mt-4" style={{ color: white, fontFamily: "var(--font-sans)", fontSize: "18px", fontWeight: 500 }}>
        {title}
      </h3>
      <p className="mt-4" style={{ color: white, fontSize: "15px", fontWeight: 500 }}>
        {focus}
      </p>
      <p className="mt-3" style={{ color: muted, fontSize: "14px", lineHeight: 1.6 }}>
        {technical}
      </p>
      <p className="mt-3" style={{ color: muted, fontSize: "13px", fontStyle: "italic" }}>
        {deliverable}
      </p>
    </div>
  );
}

function SectorCard({
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
      className="text-left"
      style={{
        backgroundColor: black,
        border: `0.5px solid ${structuralBorder}`,
        borderRadius: "12px",
        padding: "1.75rem",
      }}
    >
      {icon}
      <h3 className="mt-4" style={{ color: white, fontSize: "18px" }}>
        {title}
      </h3>
      <p className="mt-3" style={{ color: muted, fontSize: "14px", lineHeight: 1.6 }}>
        {body}
      </p>
    </div>
  );
}

function TestimonialCard({ quote, attr }: { quote: string; attr: string }) {
  return (
    <div
      className="text-left"
      style={{
        backgroundColor: slate,
        border: `0.5px solid ${structuralBorder}`,
        borderRadius: "12px",
        padding: "1.5rem",
      }}
    >
      <div
        style={{
          color: gold,
          fontFamily: "var(--font-display)",
          fontSize: "48px",
          lineHeight: 0.8,
        }}
      >
        “
      </div>
      <p
        className="mt-2"
        style={{ color: muted, fontStyle: "italic", fontSize: "14px", lineHeight: 1.7 }}
      >
        {quote}
      </p>
      <p className="mt-4" style={{ color: gold, fontSize: "13px" }}>
        — {attr}
      </p>
    </div>
  );
}
