import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { ZohoPlaceholder } from "@/components/ZohoPlaceholder";
import { GdprCheckbox } from "@/components/GdprCheckbox";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Initiate Strategic Briefing | Blackwood Keep" },
      {
        name: "description",
        content:
          "Contact Blackwood Keep to stabilise your corporate customer acquisition. Dedicated support for Wirral, Liverpool, Chester, and North Wales operators.",
      },
      { property: "og:title", content: "Contact Blackwood Keep" },
      {
        property: "og:description",
        content: "Let's review your market opportunities.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Blackwood Keep Ltd",
          email: "hello@blackwoodkeep.co.uk",
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
  component: ContactPage,
});

const black = "var(--color-bk-black)";
const slate = "var(--color-bk-slate)";
const gold = "var(--color-bk-gold)";
const white = "var(--color-bk-white)";
const muted = "var(--muted-foreground)";
const structuralBorder = "var(--border)";

function ContactPage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section style={{ backgroundColor: black, minHeight: "40vh" }} className="flex items-center justify-center px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 style={{ color: white, fontSize: "clamp(28px,4.5vw,44px)", lineHeight: 1.2 }}>
            Let's review your market opportunities.
          </h1>
          <p className="mt-6" style={{ color: muted, fontSize: "17px", lineHeight: 1.6 }}>
            No generic sales presentations. Just an objective conversation regarding your
            acquisition pipeline and conversion targets.
          </p>
        </div>
      </section>

      {/* TWO INTAKE PLATFORMS */}
      <section style={{ backgroundColor: black }} className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
          {/* Route A */}
          <div className="md:pr-10" style={{ borderRight: `1px solid ${structuralBorder}` }}>
            <h2 style={{ color: white, fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "22px" }}>
              Route A: Direct Electronic Briefing
            </h2>
            <p className="mt-2" style={{ color: muted, fontSize: "14px" }}>
              Our engineering team responds with complete account feedback within one standard
              working day.
            </p>
            {/* GENERAL ENQUIRY FORM — connect Zoho Forms here */}
            <form
              action="mailto:hello@blackwoodkeep.co.uk"
              method="post"
              encType="text/plain"
              className="mt-6 space-y-3"
            >
              <Field name="name" label="Full name" required />
              <Field name="email" label="Email address" type="email" required />
              <Field name="phone" label="Phone number" type="tel" />
              <Field name="business" label="Business name" />
              <label className="block">
                <span style={{ color: white, fontSize: "13px", fontWeight: 500 }}>Your message</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full"
                  style={{
                    border: `1px solid ${structuralBorder}`,
                    borderRadius: "8px",
                    padding: "10px 12px",
                    fontSize: "14px",
                    color: white,
                    backgroundColor: "var(--color-bk-slate)",
                  }}
                />
              </label>
              <GdprCheckbox />
              <button
                type="submit"
                className="w-full"
                style={{
                  backgroundColor: gold,
                  color: black,
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Submit briefing
              </button>
            </form>
            {/* END GENERAL ENQUIRY FORM */}
          </div>

          {/* Route B */}
          <div>
            <h2 style={{ color: white, fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "22px" }}>
              Route B: Direct Calendar Allocation
            </h2>
            <p className="mt-2" style={{ color: muted, fontSize: "14px" }}>
              Secure an immediate strategic briefing block directly inside our active database
              scheduler.
            </p>
            {/* ZOHO BOOKINGS CALENDAR — connect here */}
            <div className="mt-6">
              <ZohoPlaceholder label="Bespoke Zoho Bookings Calendar Interface Hub" variant="light" minHeight={400} />
            </div>
            {/* END ZOHO BOOKINGS */}
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section style={{ backgroundColor: slate }} className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          <ContactItem icon={<Phone size={22} style={{ color: gold }} />}>
            <a href="tel:+44" style={{ color: white }}>[Swytch phone number]</a>
          </ContactItem>
          <ContactItem icon={<Mail size={22} style={{ color: gold }} />}>
            <a href="mailto:hello@blackwoodkeep.co.uk" style={{ color: white }}>
              hello@blackwoodkeep.co.uk
            </a>
          </ContactItem>
          <ContactItem icon={<MapPin size={22} style={{ color: gold }} />}>
            <span style={{ color: muted }}>
              Headquartered on the Wirral. Supplying technical local dominance across Liverpool,
              Chester, Cheshire, and North Wales.
            </span>
          </ContactItem>
        </div>
      </section>

      {/* PROTOCOL PROMISE */}
      <section style={{ backgroundColor: black }} className="px-6 py-10">
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 text-center">
          <Clock size={24} style={{ color: gold }} />
          <p style={{ color: muted, fontSize: "15px" }}>
            All diagnostic intakes are verified and addressed within 24 working hours. Absolute
            efficiency guaranteed.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}

function Field({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span style={{ color: white, fontSize: "13px", fontWeight: 500 }}>
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
          fontSize: "14px",
          color: white,
          backgroundColor: "var(--color-bk-slate)",
        }}
      />
    </label>
  );
}

function ContactItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {icon}
      <div style={{ fontSize: "14px", lineHeight: 1.6 }}>{children}</div>
    </div>
  );
}
