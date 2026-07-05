<![CDATA[import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Clock, Lightbulb } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { ZohoPlaceholder } from "@/components/ZohoPlaceholder";
import { GdprCheckbox } from "@/components/GdprCheckbox";

export const Route = createFileRoute("/free-audit")({
  head: () => ({
    meta: [
      { title: "Free Video Pipeline Audit | Blackwood Keep" },
      {
        name: "description",
        content:
          "Submit your digital profile for a comprehensive video audit. We expose exactly where your website is dropping leads—providing complete transparency, with no obligation.",
      },
      { property: "og:title", content: "Free Pipeline Audit | Blackwood Keep" },
      {
        property: "og:description",
        content:
          "Personalised video breakdown of your digital pipeline within 24 hours. No obligation.",
      },
      { property: "og:url", content: "/free-audit" },
    ],
    links: [{ rel: "canonical", href: "/free-audit" }],
  }),
  component: FreeAuditPage,
  validateSearch: (search: Record<string, unknown>) => ({
    sector: (search.sector as string) ?? "",
    region: (search.region as string) ?? "",
    budget: (search.budget as string) ?? "",
  }),
});

const black = "var(--color-bk-black)";
const slate = "var(--color-bk-slate)";
const gold = "var(--color-bk-gold)";
const goldPop = "var(--color-bk-gold-pop)";
const white = "var(--color-bk-white)";
const muted = "var(--muted-foreground)";
const structuralBorder = "var(--border)";

function FreeAuditPage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section
        style={{ backgroundColor: black, minHeight: "50vh" }}
        className="flex items-center justify-center px-6 py-20"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h1 style={{ lineHeight: 1.2 }}>
            Secure your customised digital growth roadmap
          </h1>
          <h2 className="mt-3" style={{ lineHeight: 1.2 }}>
            Reveal your opportunities
          </h2>
          <p
            className="mx-auto mt-6"
            style={{ color: muted, fontSize: "1.0625rem", maxWidth: "560px", lineHeight: 1.6 }}
          >
            Provide your basic business parameters below. We will deliver an elite, personal video
            breakdown detailing your regional search vulnerabilities and immediate lead
            opportunities within 24 hours. No sales scripts, no obligation.
          </p>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section style={{ backgroundColor: slate }} className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {[
            "A personalised video breakdown dissecting your website and map performance",
            "Your absolute biggest operational bottleneck clearly exposed and solved",
            "A plain-English blueprint showing exactly how to outrank local competitors",
          ].map((d, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div
                className="flex h-12 w-12 items-center justify-center"
                style={{
                  borderRadius: "999px",
                  border: `2px solid ${gold}`,
                  color: gold,
                  fontFamily: "var(--font-display)",
                }}
              >
                {i + 1}
              </div>
              <p className="mt-4" style={{ color: muted, fontSize: "1.125rem", lineHeight: 1.6 }}>
                {d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TWO-PATH CONVERSION */}
      <section style={{ backgroundColor: black }} className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
          {/* Option A */}
          <div>
            <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}>
              Option A: Submit Profile Details
            </h2>
            <p className="mt-2" style={{ color: muted, fontSize: "1.125rem" }}>
              We run the technical diagnostics and email your video blueprint within 24 hours.
            </p>
            {/* ZOHO FORM EMBED — connect Zoho Forms here */}
            <div className="mt-6">
              <ZohoPlaceholder
                label=""
                variant="light"
                minHeight={360}
              >
                <p style={{ color: white, fontWeight: 500, marginBottom: 12 }}>
                  Zoho Forms — Growth Audit Intake
                </p>
                <p style={{ color: muted, fontSize: "1.0625rem", lineHeight: 1.7 }}>
                  Intake Fields: Full Name · Corporate Email · Phone Number · Company URL ·
                  Primary Competitor · Monthly Budget Target
                </p>
              </ZohoPlaceholder>
            </div>
            {/* END ZOHO FORM */}

            {/* HTML fallback form */}
            <form
              action="mailto:hello@blackwoodkeep.co.uk"
              method="post"
              encType="text/plain"
              className="mt-6 space-y-3"
            >
              <FieldInput name="name" label="Full name" required />
              <FieldInput name="email" label="Corporate email" type="email" required />
              <FieldInput name="phone" label="Phone number" type="tel" />
              <FieldInput name="company" label="Company URL" />
              <FieldInput name="competitor" label="Primary competitor" />
              <FieldInput name="budget" label="Monthly budget target" />
              <GdprCheckbox />
              <button type="submit" className="bwk-button w-full">
                Send via email
              </button>
            </form>
          </div>

          {/* Option B */}
          <div
            className="border-l-0 md:border-l md:pl-10"
            style={{ borderColor: structuralBorder }}
          >
            <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}>
              Option B: Schedule Immediate Strategy Briefing
            </h2>
            <p className="mt-2" style={{ color: muted, fontSize: "1.125rem" }}>
              Select a live call window to map out your architecture directly with our leadership
              team.
            </p>
            {/* ZOHO BOOKINGS CALENDAR EMBED — connect Zoho Bookings here */}
            <div className="mt-6">
              <ZohoPlaceholder
                label="Integrated Zoho Bookings Interface — Select Discovery Slot"
                variant="light"
                minHeight={500}
              />
            </div>
            {/* END ZOHO BOOKINGS */}
          </div>
        </div>
      </section>

      {/* REASSURANCE */}
      <section
        style={{ backgroundColor: black, borderTop: `0.5px solid ${structuralBorder}` }}
        className="px-6 py-12"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          <Trust icon={<ShieldCheck style={{ color: gold }} size={22} />} text="Zero Sales Pressure — Explicit Promise" />
          <Trust icon={<Clock style={{ color: gold }} size={22} />} text="Requires Under 3 Minutes to Process" />
          <Trust icon={<Lightbulb style={{ color: gold }} size={22} />} text="Highly Actionable Asset Independent of Collaboration" />
        </div>
      </section>
    </PageLayout>
  );
}

function FieldInput({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span style={{ color: white, fontSize: "0.9375rem", fontWeight: 500 }}>
        {label}
        {required && <span style={{ color: "var(--destructive)" }}> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full"
        style={{
          border: `1px solid ${structuralBorder}`,
          borderRadius: "8px",
          padding: "10px 12px",
          fontSize: "1rem",
          color: white,
          backgroundColor: "var(--color-bk-slate)",
        }}
      />
    </label>
  );
}

function Trust({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center justify-center gap-3 text-center">
      {icon}
      <span style={{ color: muted, fontSize: "1.125rem" }}>{text}</span>
    </div>
  );
}
]]>