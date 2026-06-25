import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Blackwood Keep" },
      { name: "description", content: "How Blackwood Keep collects, uses, and protects your personal data." },
      { property: "og:title", content: "Privacy Policy | Blackwood Keep" },
      { property: "og:description", content: "Our GDPR-aligned privacy practices." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <PageLayout>
      <section style={{ backgroundColor: "var(--color-bk-black)", minHeight: "30vh" }} className="flex items-center justify-center px-6 py-16">
        <h1 style={{ color: "var(--color-bk-white)", fontSize: "clamp(1.875rem, 4vw, 2.625rem)" }}>Privacy Policy</h1>
      </section>
      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-6" style={{ color: "var(--muted-foreground)", fontSize: "1.0625rem", lineHeight: 1.8 }}>
          <p><em>Placeholder content. To be replaced with a full GDPR-aligned privacy policy.</em></p>
          <h2 style={{ color: "var(--color-bk-white)", fontSize: "1.5rem" }}>Data we collect</h2>
          <p>When you submit an enquiry, audit request, or referral via Blackwood Keep, we collect the personal and corporate details you provide (name, email, phone, business details) for the sole purpose of responding to your request.</p>
          <h2 style={{ color: "var(--color-bk-white)", fontSize: "1.5rem" }}>How we use it</h2>
          <p>We use your details to contact you about Blackwood Keep services. We never sell or share your data with unrelated third parties.</p>
          <h2 style={{ color: "var(--color-bk-white)", fontSize: "1.5rem" }}>Your rights</h2>
          <p>You may request access, correction, or deletion of your data at any time by emailing hello@blackwoodkeep.co.uk.</p>
          <h2 style={{ color: "var(--color-bk-white)", fontSize: "1.5rem" }}>ICO</h2>
          <p>Blackwood Keep Ltd is registered with the UK Information Commissioner's Office.</p>
        </div>
      </section>
    </PageLayout>
  );
}
