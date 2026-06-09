import { createFileRoute } from "@tanstack/react-router";
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

const dark = "#0B0B0D";
const navy = "#111827";
const gold = "#C8A45D";
const champagne = "#E5D2A0";
const silver = "#D1D5DB";
const white = "#F8F9FA";

function FreeAuditPage() {
  return (
    <PageLayout minimal>
      {/* HERO */}
      <section
        style={{ backgroundColor: dark, minHeight: "50vh" }}
        className="flex items-center justify-center px-6 py-20"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h1 style={{ color: champagne, fontSize: "clamp(28px,4vw,44px)", lineHeight: 1.2 }}>
            Secure your customised digital growth roadmap.
          </h1>
          <p
            className="mx-auto mt-6"
            style={{ color: silver, fontSize: "17px", maxWidth: "560px", lineHeight: 1.6 }}
          >
            Provide your basic business parameters below. We will deliver an elite, personal video
            breakdown detailing your regional search vulnerabilities and immediate lead
            opportunities within 24 hours. No sales scripts, no obligation.
          </p>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section style={{ backgroundColor: navy }} className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {[
            "A personalised Loom video breakdown dissecting your website and map performance",
            "Your absolute biggest operational bottleneck clearly exposed and solved",
            "A plain-English blueprint showing exactly how to outrank local competitors",
          ].map((d, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div
                className="flex h-12 w-12 items-center justify-center"
                style={{
                  borderRadius: "999px",
                  border: `1px solid ${gold}`,
                  color: gold,
                  fontFamily: "var(--font-display)",
                }}
              >
                {i + 1}
              </div>
              <p className="mt-4" style={{ color: silver, fontSize: "15px", lineHeight: 1.6 }}>
                {d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TWO-PATH CONVERSION */}
      <section style={{ backgroundColor: white }} className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
          {/* Option A */}
          <div>
            <h2
              style={{ color: navy, fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "22px" }}
            >
              Option A: Submit Profile Details
            </h2>
            <p className="mt-2" style={{ color: "#888780", fontSize: "14px" }}>
              We run the technical diagnostics and email your video blueprint within 24 hours.
            </p>
            {/* ZOHO FORM EMBED — connect Zoho Forms here */}
            <div className="mt-6">
              <ZohoPlaceholder
                label=""
                variant="light"
                minHeight={360}
              >
                <p style={{ color: navy, fontWeight: 500, marginBottom: 12 }}>
                  Zoho Forms — Growth Audit Intake
                </p>
                <p style={{ color: "#888780", fontSize: "13px", lineHeight: 1.7 }}>
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
              <button
                type="submit"
                className="w-full"
                style={{
                  backgroundColor: gold,
                  color: dark,
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Send via email
              </button>
            </form>
          </div>

          {/* Option B */}
          <div
            className="border-l-0 md:border-l md:pl-10"
            style={{ borderColor: "#D1D5DB" }}
          >
            <h2
              style={{ color: navy, fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "22px" }}
            >
              Option B: Schedule Immediate Strategy Briefing
            </h2>
            <p className="mt-2" style={{ color: "#888780", fontSize: "14px" }}>
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
        style={{ backgroundColor: white, borderTop: `0.5px solid ${silver}` }}
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
      <span style={{ color: navy, fontSize: "13px", fontWeight: 500 }}>
        {label}
        {required && <span style={{ color: "#DC2626" }}> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full"
        style={{
          border: `1px solid ${silver}`,
          borderRadius: "8px",
          padding: "10px 12px",
          fontSize: "14px",
          color: navy,
          backgroundColor: "#FFFFFF",
        }}
      />
    </label>
  );
}

function Trust({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center justify-center gap-3 text-center">
      {icon}
      <span style={{ color: "#374151", fontSize: "14px" }}>{text}</span>
    </div>
  );
}
