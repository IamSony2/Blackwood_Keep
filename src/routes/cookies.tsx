import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | Blackwood Keep" },
      { name: "description", content: "How Blackwood Keep uses cookies and similar tracking technologies." },
      { property: "og:title", content: "Cookie Policy | Blackwood Keep" },
      { property: "og:description", content: "Our cookie usage explained." },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <PageLayout>
      <section style={{ backgroundColor: "var(--color-bk-black)", minHeight: "30vh" }} className="flex items-center justify-center px-6 py-16">
        <h1 style={{ fontSize: "clamp(1.875rem, 4vw, 2.625rem)" }}>Cookie Policy</h1>
      </section>
      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-6" style={{ color: "var(--muted-foreground)", fontSize: "1.0625rem", lineHeight: 1.8 }}>
          <p><em>Placeholder content. To be replaced with a full cookie policy.</em></p>
          <h2 style={{ fontSize: "1.5rem" }}>What are cookies?</h2>
          <p>Cookies are small text files stored on your device that help websites function and remember your preferences.</p>
          <h2 style={{ fontSize: "1.5rem" }}>How we use cookies</h2>
          <p>We use strictly necessary cookies to enable site functionality, and analytics cookies (with your consent) to understand how the site is used so we can improve it.</p>
          <h2 style={{ fontSize: "1.5rem" }}>Managing your preferences</h2>
          <p>You can manage cookie preferences in your browser settings or by clearing your local storage to re-trigger our consent banner.</p>
        </div>
      </section>
    </PageLayout>
  );
}
