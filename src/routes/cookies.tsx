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
        <div>
          <h1 style={{ fontSize: "clamp(1.875rem, 4vw, 2.625rem)" }}>Cookie Policy</h1>
          <p className="flex justify-center"><em>Last Updated: July 2026</em></p> 
        </div>
      </section>
      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <p><em>This Cookie Policy explains how we use cookies and similar tracking technologies when you visit our website. In keeping with our commitment to transparency and objective data, this policy outlines what these technologies are, why we use them, and your rights to control our use of them.</em></p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <h2 style={{ fontSize: "1.5rem" }}>1. What Are Cookies?</h2>
          <p><em>Cookies are small text files placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites function efficiently, improve user experience, and provide analytical data to website owners.</em></p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <h2 style={{ fontSize: "1.5rem" }}>2. How We Use Cookies</h2>
          <p><em>We use cookies to optimise our digital marketing systems, track the performance of our multi-channel paid campaigns, and ensure our regional audit tools function seamlessly.</em></p>
          <p><em>Specifically, we use cookies to:</em></p>
          <p>&nbsp;</p>
          <ul className="list-disc pl-6 space-y-3 italic">
            <li>
              Ensure the core security, performance, and stability of our website.
            </li>
            <li>
              Analyse how visitors interact with our content so we can refine our pipeline architecture.
            </li>
            <li>
              Measure the commercial effectiveness of our regional marketing campaigns across the Wirral, Liverpool, Chester, Cheshire, and North Wales.
            </li>
          </ul>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <h2 style={{ fontSize: "1.5rem" }}>3. The Types of Cookies We Use</h2>
          <p><em>We categorise our cookies into three functional tiers:</em></p>
          <p>&nbsp;</p>

          <div style={{ backgroundColor: "var(--color-bk-slate)", border: "0.5px solid var(--color-bk-gold)", borderRadius: "12px", padding: "1.25rem"}}>
            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr_1.5fr] gap-4 p-4 border-b font-semibold text-sm">
              <div>Cookie Type</div>
              <div>Purpose</div>
              <div>Necessity</div>
            </div>

            <div className="divide-y text-sm">
              <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr_1.5fr] gap-4 p-4 items-center">
                <div className="font-semibold">Essential / Strictly Necessary</div>
                <div>Required for the website to load safely, handle secure form submissions (like your audit requests), and maintain basic functionality.</div>
                <div className="font-medium md:italic"><b>Mandatory</b><br></br>(Cannot be turned off)</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr_1.5fr] gap-4 p-4 items-center">
                <div className="font-semibold">Analytics / Performance</div>
                <div>Help us gather verifiable data on how visitors find us and move through the site. This allows us to measure traffic and optimise performance.</div>
                <div className="font-medium md:italic"><b>Optional</b><br></br>(Requires your consent)</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr_1.5fr] gap-4 p-4 items-center">
                <div className="font-semibold">Marketing / Tracking</div>
                <div>Used to monitor the conversion rates of our paid media campaigns and deliver relevant insights to regional enterprises.</div>
                <div className="font-medium md:italic"><b>Optional</b><br></br>(Requires your consent)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <h2 style={{ fontSize: "1.5rem" }}>4. Third-Party Cookies</h2>
          <p><em>In some cases, we use cookies provided by trusted third parties. For example:</em></p>
          <p>&nbsp;</p>
          <ul className="list-disc pl-6 space-y-3 italic">
            <li>
               Google Analytics: To help us understand how traffic navigates our site, allowing us to engineer a smoother end-user experience.
            </li>
            <li>
               Paid Media Conversion Pixels: To accurately track when a click turns into an active inquiry, contract request, or audit application.
            </li>
          </ul>

        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <h2 style={{ fontSize: "1.5rem" }}>5. Controlling Your Cookie Choices</h2>
          <p><em>You have the absolute right to decide whether to accept or reject optional cookies.</em></p>
          <p>&nbsp;</p>
          <ul className="list-disc pl-6 space-y-3 italic">
            <li>
              Our Cookie Consent Banner: When you first visit our site, you can choose to accept all cookies or customize your settings to reject marketing and analytics tracking.
            </li>
            <li>
              Your Browser Settings: You can configure your internet browser to refuse cookies or alert you when cookies are being sent. Note that disabling essential cookies may impact your ability to use certain features, such as our online audit forms.
            </li>
          </ul>

        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <h2 style={{ fontSize: "1.5rem" }}>6. Updates to This Policy</h2>
          <p><em>We may periodically update this Cookie Policy to reflect changes in the tracking technologies we deploy or for broader legal and operational reasons. Any updates will be posted directly to this page with an updated revision date.</em></p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <h2 style={{ fontSize: "1.5rem" }}>7. Contact Us</h2>
          <p><em>If you have any objective questions regarding our cookie practices or your data privacy, please contact us through our Pipeline Consultation page.</em></p>
          <p>&nbsp;</p>
      </div>
      <p>&nbsp;</p>
      </section>
    </PageLayout>
  );
}
