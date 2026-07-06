import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Clock,
  PoundSterling,
  TrendingUp,
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

const black = "var(--color-bk-black)";
const slate = "var(--color-bk-slate)";

function Home() {
  const scrollTo = (id: string) => {
    if (typeof document === "undefined") return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageLayout>
      <section
        style={{ backgroundColor: black }}
        className="flex items-center justify-center px-6 py-24 md:py-32"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1 style={{ lineHeight: 1.15 }}>Digital Marketing &amp; Lead Generation</h1>
          <CastleShield size={72} className="mt-5" />
          <h2 className="mt-3">Commercial growth engineered</h2>
          <p className="mt-6 text-muted-foreground" style={{ fontSize: "1.125rem", maxWidth: "720px", lineHeight: 1.6 }}>
            Get marketing clarity, a predictable pipeline, and measurable growth. We build
            high-converting digital marketing systems and multi-channel paid campaigns that turn
            clicks into commercial contracts. Proudly serving trades, facilities management, and
            B2B/B2C enterprises across the Wirral, Liverpool, Cheshire, and North Wales.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/free-audit" className="bwk-button">
              Book a Pipeline Audit
            </Link>
            <button type="button" onClick={() => scrollTo("how-it-works")} className="bwk-button">
              See How It Works
            </button>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: slate }} className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 md:grid-cols-2 md:items-stretch">
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

      <section style={{ backgroundColor: black }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2>Does any of this sound familiar?</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
            <ProblemCard
              icon={<Clock size={28} className="bwk-icon-accent" />}
              title="You're too busy on site to capture incoming inquiries"
              body="Every day your team means to handle incoming leads, but field logistics and operational challenges take over while your phone rings out."
              solution="We engineer automated capture."
            />
            <ProblemCard
              icon={<PoundSterling size={28} className="bwk-icon-accent" />}
              title="You've spent heavily on ads before with zero visibility"
              body="Wasted spend on generic ad agencies who gave you clicks instead of signed commercial contracts. Sound familiar?"
              solution="We measure commercial contract wins, not clicks."
            />
            <ProblemCard
              icon={<TrendingUp size={28} className="bwk-icon-accent" />}
              title="You are operating on a volatile feast-or-famine cycle"
              body="Fully booked this month, worried about pipeline health the next. No automated system smoothing your client acquisition."
              solution="We build a predictable revenue engine."
            />
          </div>
        </div>
      </section>

      <section id="how-it-works" style={{ backgroundColor: black }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2>The blueprint to predictable growth</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground" style={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
            A structured, dual-speed onboarding process engineered to eliminate launch friction
            while protecting enterprise compliance.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
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
          <p className="mt-10 text-muted-foreground" style={{ fontSize: "1rem" }}>
            Average onboarding timeline from discovery audit to live market execution: 14 to 21
            business days.
          </p>
          <Link to="/free-audit" className="bwk-button mt-8 inline-block">
            Start with a Free Audit
          </Link>
        </div>
      </section>

      <section id="sectors" style={{ backgroundColor: slate }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2>Engineered growth frameworks</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground" style={{ fontSize: "1.125rem" }}>
            Advanced digital architecture tailored to your specific commercial operations.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
            <SectorCard
              icon={<Settings2 size={28} className="bwk-icon-accent" />}
              title="CRM Automation & Lead Nurturing"
              body="Never allow an enterprise or domestic lead to go cold. We engineer rapid automated response protocols and follow-up infrastructure so enquiries are captured instantly while you operate your daily business."
            />
            <SectorCard
              icon={<Star size={28} className="bwk-icon-accent" />}
              title="Local Map Pack & Reputation Engineering"
              body="Establish absolute regional authority across the Wirral, Liverpool, and Chester. We automate five-star review loops and optimise your local search profile to guarantee you are the primary firm selected."
            />
            <SectorCard
              icon={<Rocket size={28} className="bwk-icon-accent" />}
              title="Funnel Optimisation & Paid Campaigns"
              body="Eliminate marketing guesswork. We build bespoke lead capture engines and manage high-intent advertising budgets targeted directly at procurement managers and high-value domestic clients."
            />
          </div>
          <Link to="/services" className="bwk-button mt-10 inline-block">
            Explore Full Capabilities Matrix
          </Link>
        </div>
      </section>

      <section style={{ backgroundColor: black }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2>Validated commercial success</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
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
          <Link to="/testimonials" className="bwk-button mt-10 inline-block">
            Read More Testimonials
          </Link>
        </div>
      </section>

      <section style={{ backgroundColor: slate }} className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2>Partner with Blackwood Keep</h2>
            <p className="mt-6 text-muted-foreground" style={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
              Our growth is anchored directly to regional trust and executive word of mouth. If you
              introduce our engineering capabilities to a regional business or facilities company
              looking to scale customer acquisition, we reward your advocacy through a transparent
              referral ecosystem.
            </p>
            <Link to="/referrals" className="bwk-button mt-6 inline-block">
              Explore Our Referral Programme Details
            </Link>
          </div>
          <div className="bwk-card">
            <h3 style={{ fontSize: "1.5rem" }}>Strategic Alliances</h3>
            <ul className="mt-4 space-y-3 text-muted-foreground" style={{ fontSize: "1.0625rem" }}>
              <li className="flex gap-3">
                <Check size={18} className="bwk-icon-accent" style={{ flexShrink: 0, marginTop: 3 }} />
                <span>
                  Regional Trade Networks — Mechanical, electrical, structural, building contractors
                </span>
              </li>
              <li className="flex gap-3">
                <Check size={18} className="bwk-icon-accent" style={{ flexShrink: 0, marginTop: 3 }} />
                <span>Facilities &amp; Asset Management Providers</span>
              </li>
              <li className="flex gap-3">
                <Check size={18} className="bwk-icon-accent" style={{ flexShrink: 0, marginTop: 3 }} />
                <span>High-Growth B2B Operations seeking automated pipeline stability</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        style={{ backgroundColor: black, borderTop: "1px solid var(--border)" }}
        className="px-6 py-20"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <CastleShield size={60} />
          <h2 className="mt-6">Eliminate pipeline chaos — secure your growth plan</h2>
          <p className="mt-4 text-muted-foreground" style={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
            Book your comprehensive, plain-English Growth Audit today. No high-pressure sales
            scripts. Just an objective analysis of your market vulnerabilities and absolute
            pipeline opportunities.
          </p>
          <Link to="/free-audit" className="bwk-button mt-8 inline-block">
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
    <div className={`bwk-segment-card ${border === "right" ? "bwk-segment-card--right" : ""}`}>
      <h3 style={{ fontSize: "1.625rem" }}>{heading}</h3>
      <div className="bwk-card-fill">
        <p className="mt-4 text-muted-foreground" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
          {body}
        </p>
        <ul className="mt-6 space-y-3">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-3 text-muted-foreground" style={{ fontSize: "1rem" }}>
              <span className="bwk-icon-accent">{b.icon}</span>
              <span>{b.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <button type="button" onClick={onClick} className="bwk-button bwk-button--sm mt-8" style={{ alignSelf: "flex-start" }}>
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
    <div className="flex flex-col text-left">
      <div className="bwk-card">
        {icon}
        <h3 className="mt-4" style={{ fontSize: "1.25rem" }}>
          {title}
        </h3>
        <p className="mt-3 text-muted-foreground" style={{ fontSize: "1rem", lineHeight: 1.6 }}>
          {body}
        </p>
      </div>
      <p className="bwk-solution-text mt-4 text-center">{solution}</p>
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
    <div className="bwk-card">
      <span className="bwk-badge">{phase}</span>
      <h3 className="mt-4" style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", fontWeight: 500 }}>
        {title}
      </h3>
      <p className="mt-4" style={{ fontSize: "1.0625rem", fontWeight: 500 }}>
        {focus}
      </p>
      <p className="mt-3 text-muted-foreground" style={{ fontSize: "1rem", lineHeight: 1.6 }}>
        {technical}
      </p>
      <p className="mt-3 text-muted-foreground" style={{ fontSize: "0.9375rem", fontStyle: "italic" }}>
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
    <div className="bwk-card bwk-card--on-black">
      {icon}
      <h3 className="mt-4" style={{ fontSize: "1.25rem" }}>
        {title}
      </h3>
      <p className="mt-3 text-muted-foreground" style={{ fontSize: "1rem", lineHeight: 1.6 }}>
        {body}
      </p>
    </div>
  );
}

function TestimonialCard({ quote, attr }: { quote: string; attr: string }) {
  return (
    <div className="bwk-card">
      <div className="bwk-quote-mark">"</div>
      <p className="mt-2 text-muted-foreground" style={{ fontStyle: "italic", fontSize: "1rem", lineHeight: 1.7 }}>
        {quote}
      </p>
      <p className="bwk-attr mt-4">— {attr}</p>
    </div>
  );
}
