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
        <div>
          <h1 style={{ fontSize: "clamp(1.875rem, 4vw, 2.625rem)" }}>Blackwood Keep Ltd Customer Privacy Notice</h1>
<p className="flex justify-center"><em></em></p> 
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <h2>Registered name: Blackwood Keep Limited</h2>
          <p><em>We are the controller of your personal data. For more information on controllers and their responsibilities please see our guidance on data protection principles, definitions, and key terms.</em></p>
          <p><em>This privacy notice tells you what to expect us to do with your personal information.</em></p>
          <p>&nbsp;</p>
          <ul className="list-disc pl-6 space-y-3 italic">
            <li>
              Contact details
            </li>
            <li>
              What information we collect, use, and why
            </li>
            <li>
              Lawful bases and data protection rights
            </li>
            <li>
              Where we get personal information from
            </li>
            <li>
              How long we keep information
            </li>
            <li>
              How to complain
            </li>
          </ul>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <h2 style={{ fontSize: "1.5rem" }}>Contact details</h2>
          <ul className="list-disc pl-6 space-y-3 italic">
            <li>Telephone: <a href="tel:+447395887773" className="nav-link">07395 887 773</a></li>
            <li>Email: <a href="mailto:hello@blackwoodkeep.com" className="nav-link">hello@blackwoodkeep.com</a></li>
          </ul>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <h2 style={{ fontSize: "1.5rem" }}>What information we collect, use, and why</h2>
          <p><em>We collect or use the following information to provide and improve products and services for clients:</em></p>
          <p>&nbsp;</p>
          <ul className="list-disc pl-6 space-y-3 italic"><li>
              Names and contact details
            </li>
            <li>
              Addresses
            </li>
            <li>
              Occupation
            </li>
            <li>
              Payment details (including card or bank information for transfers and direct debits)
            </li>
            <li>
              Transaction data (including details about payments to and from you and details of products and services you have purchased)
            </li>
            <li>
              Usage data (including information about how you interact with and use our website, products and services)
            </li>
            <li>
              Information relating to compliments or complaints
            </li>
            <li>
              Video recordings
            </li>
            <li>
              Audio recordings (eg calls)
            </li>
            <li>
              Records of meetings and decisions
            </li>
            <li>
              Account access information
            </li>
          </ul>
        </div>
      </section>


      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <h2 style={{ fontSize: "1.5rem" }}>Website user information</h2>
          <p><em>We collect or use the following personal information for the operation of client or customer accounts:</em></p>
          <p>&nbsp;</p>
          <ul className="list-disc pl-6 space-y-3 italic"><li>
              Names and contact details
            </li>
            <li>
              Addresses
            </li>
            <li>
              Purchase or service history
            </li>
            <li>
              Account information, including registration details
            </li>
            <li>
              Marketing preferences
            </li>
            <li>
              Technical data, including information about browser and operating systems
            </li>
          </ul>
          <p><em>&nbsp;</em></p>
          <p><em>We collect or use the following personal information for information updates or marketing purposes:</em></p>
          <p>&nbsp;</p>
          <ul className="list-disc pl-6 space-y-3 italic"><li>
              Names and contact details
            </li>
            <li>
              Addresses
            </li>
            <li>
              Profile information
            </li>
            <li>
              Marketing preferences
            </li>
            <li>
              Purchase or account history
            </li>
            <li>
              Website and app user journey information
            </li>
            <li>
              IP addresses
            </li>
          </ul>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <h2 style={{ fontSize: "1.5rem" }}>Lawful bases and data protection rights</h2>
          <p><em>Under UK data protection law, we must have a “lawful basis” for collecting and using your personal information. There is a list of possible lawful bases in the UK GDPR. You can find out more about lawful bases on the ICO’s website. Which lawful basis we rely on may affect your data protection rights which are set out in brief below. You can find out more about your data protection rights and the exemptions which may apply on the ICO’s website:</em></p>
          <p>&nbsp;</p>
          <ul className="list-disc pl-6 space-y-3 italic"><li>
              Your right of access - You have the right to ask us for copies of your personal information. You can request other information such as details about where we get personal information from and who we share personal information with. There are some exemptions which means you may not receive all the information you ask for. Read more about the right of access.
            </li>
            <li>
              Your right to rectification - You have the right to ask us to correct or delete personal information you think is inaccurate or incomplete. Read more about the right to rectification.
            </li>
            <li>
              Your right to erasure - You have the right to ask us to delete your personal information. Read more about the right to erasure.
            </li>
            <li>
              Your right to restriction of processing - You have the right to ask us to limit how we can use your personal information. Read more about the right to restriction of processing.
            </li>
            <li>
              Your right to object to processing - You have the right to object to the processing of your personal data. Read more about the right to object to processing.
            </li>
            <li>
              Your right to data portability - You have the right to ask that we transfer the personal information you gave us to another organisation, or to you. Read more about the right to data portability.
            </li>
            <li>
              Your right to withdraw consent – When we use consent as our lawful basis you have the right to withdraw your consent at any time. Read more about the right to withdraw consent.
            </li>
          </ul>

          <p><em>&nbsp;</em></p>
          <p><em>If you make a request, we must respond to you without undue delay and in any event within one month.
To make a data protection rights request, please contact us using the contact details at the top of this privacy notice.
Our lawful bases for the collection and use of your data
Our lawful bases for collecting or using personal information to provide and improve products and services for clients are:</em></p>

          <p>&nbsp;</p>
          <ul className="list-disc pl-6 space-y-3 italic"><li>
              Consent - we have permission from you after we gave you all the relevant information. All of your data protection rights may apply, except the right to object. To be clear, you do have the right to withdraw your consent at any time.
            </li>
            <li>
              Contract – we have to collect or use the information so we can enter into or carry out a contract with you. All of your data protection rights may apply except the right to object.
            </li>
          </ul>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <h2 style={{ fontSize: "1.5rem" }}></h2>
          <p><em>Our lawful bases for collecting or using personal information for the operation of client or customer accounts are:</em></p>
          <p>&nbsp;</p>
          <ul className="list-disc pl-6 space-y-3 italic"><li>
              Consent - we have permission from you after we gave you all the relevant information. All of your data protection rights may apply, except the right to object. To be clear, you do have the right to withdraw your consent at any time.
            </li>
            <li>
              Contract – we have to collect or use the information so we can enter into or carry out a contract with you. All of your data protection rights may apply except the right to object.
            </li>
          </ul>
        </div>
      </section>


      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <h2 style={{ fontSize: "1.5rem" }}></h2>
          <p><em>Our lawful bases for collecting or using personal information for information updates or marketing purposes are:</em></p>
          <p>&nbsp;</p>
          <ul className="list-disc pl-6 space-y-3 italic"><li>
              Consent - we have permission from you after we gave you all the relevant information. All of your data protection rights may apply, except the right to object. To be clear, you do have the right to withdraw your consent at any time.
            </li>
            <li>
              Contract – we have to collect or use the information so we can enter into or carry out a contract with you. All of your data protection rights may apply except the right to object.
            </li>
          </ul>
        </div>
      </section>


      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <h2 style={{ fontSize: "1.5rem" }}></h2>
          <p><em>Where we get personal information from</em></p>
          <p>&nbsp;</p>
          <ul className="list-disc pl-6 space-y-3 italic"><li>
              Directly from you
            </li>
            <li>
              Publicly available sources
            </li>
            <li>
              Providers of marketing lists and other personal information
            </li>
          </ul>
        </div>
      </section>



      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <h2 style={{ fontSize: "1.5rem" }}>How long we keep information</h2>
          <p><em>We only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including satisfying any legal, accounting, or reporting requirements.
Specific retention periods for our digital marketing and customer data include:</em></p>
          <p>&nbsp;</p>
          <ul className="list-disc pl-6 space-y-3 italic"><li>
              Marketing Subscribers & Leads: We keep your email, name, and preference data for 24 months from your last active engagement (such as opening an email or visiting our site). After this period of inactivity, your data is permanently deleted.
            </li>
            <li>
              Unsubscribe Lists: If you opt out of marketing, we retain your email address on a suppression list until you request total erasure to ensure we respect your request and do not email you again.
            </li>
            <li>
              Customer Accounts & Purchase History: We retain your account profile and transactional data for 6 years following your last purchase, in compliance with financial, tax, and consumer protection laws.
            </li>
            <li>
              Website Analytics & Pixels: Data collected via tracking cookies and pixels is retained for a maximum of 14 months before being automatically deleted or completely anonymised
            </li>
          </ul>
        </div>
      </section>



      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <h2 style={{ fontSize: "1.5rem" }}>How to complain</h2>
          <p><em>If you have any concerns about our use of your personal information, you can make a data protection complaint to us:</em></p>
          <p>&nbsp;</p>
          <ul className="list-disc pl-6 space-y-3 italic"><li>
              Online: &nbsp;
                <a 
                  href="https://www.blackwoodkeep.com" className="nav-link" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                >
              www.blackwoodkeep.com
              </a>
            </li>
            <li>
              Email: <a href="mailto:hello@blackwoodkeep.com" className="nav-link">hello@blackwoodkeep.com</a>
            </li>
          </ul>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <h2 style={{ fontSize: "1.5rem" }}>How to complain</h2>
          <p><em>If you have any concerns about our use of your personal data, you can make a complaint to us using the contact details at the top of this privacy notice.
If you remain unhappy with how we’ve used your data after raising a complaint with us, you can also complain to the ICO.</em></p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-bk-black)" }} className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <h2 style={{ fontSize: "1.5rem" }}>The ICO’s address</h2>
          <p><em>
              Information Commissioner’s Office <br />
              Wycliffe House <br />
              Water Lane <br />
              Wilmslow <br />
              Cheshire <br />
              SK9 5AF <br />
              &nbsp; <br />
              Helpline number: <a href="tel:+443031231113" className="nav-link">0303 123 1113</a> <br />
              Website:&nbsp; 
                <a 
                  href="https://www.ico.org.uk/make-a-complaint" 
                  className="nav-link"
                  target="_blank" 
                  rel="noopener noreferrer" 
                >
              www.ico.org.uk/make-a-complaint
              </a>
              <br />
          </em></p>
        </div>
      </section>
    </PageLayout>
  );
}
