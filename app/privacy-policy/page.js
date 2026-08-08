export const metadata = {
  title: "Privacy Policy | NexKripa IT INDIA",
  description:
    "Privacy Policy for NexKripa IT INDIA explaining how personal information may be collected, used and protected.",
};

const sections = [
  {
    number: "01",
    title: "INFORMATION WE MAY COLLECT",
    content: (
      <>
        <p>
          When you contact NexKripa IT INDIA, request a project, or submit a
          form on our website, we may receive information such as your name,
          email address, phone number, company or brand name, selected services,
          and project details.
        </p>
        <p>
          We may also receive basic technical information such as browser type,
          device type, pages visited, and general usage information when
          analytics or similar website tools are enabled.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "HOW WE USE INFORMATION",
    content: (
      <>
        <p>
          Information submitted through our website may be used to respond to
          enquiries, understand project requirements, prepare proposals, provide
          requested services, improve our website, and communicate about an
          existing or potential business relationship.
        </p>
        <p>
          We do not intend to use personal information for unrelated purposes
          without an appropriate reason or permission where required.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "COOKIES & ANALYTICS",
    content: (
      <>
        <p>
          Our website may use cookies or analytics technologies to understand
          website performance, traffic, and visitor interaction. These tools may
          collect limited technical and usage information.
        </p>
        <p>
          If optional analytics, advertising, or third-party tracking tools are
          added in the future, this policy should be updated to identify them
          and explain how they are used.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "SHARING OF INFORMATION",
    content: (
      <>
        <p>
          We do not sell personal information. Information may be shared with
          service providers or technology partners only where reasonably needed
          to operate the website, communicate with you, deliver a requested
          service, or meet legal obligations.
        </p>
        <p>
          Third-party providers may have their own privacy practices, and their
          services are governed by their respective terms and policies.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "DATA RETENTION",
    content: (
      <>
        <p>
          We may keep enquiry and project information for as long as reasonably
          necessary to respond to you, manage a business relationship, maintain
          relevant records, or satisfy applicable legal and operational
          requirements.
        </p>
        <p>
          Information that is no longer reasonably required should be deleted or
          anonymized where appropriate.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "DATA SECURITY",
    content: (
      <>
        <p>
          We aim to use reasonable technical and organizational safeguards to
          protect information against unauthorized access, loss, misuse,
          alteration, or disclosure.
        </p>
        <p>
          No website, network, or electronic transmission can be guaranteed to
          be completely secure, so users should avoid submitting unnecessary
          sensitive information through general enquiry forms.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "YOUR CHOICES & RIGHTS",
    content: (
      <>
        <p>
          Depending on applicable law and the circumstances, you may be able to
          request information about personal data we hold about you, ask for
          correction or deletion, withdraw consent where processing depends on
          consent, or raise a privacy-related concern.
        </p>
        <p>
          To make a request, contact us using the details provided at the end of
          this policy.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "THIRD-PARTY LINKS",
    content: (
      <p>
        Our website may contain links to third-party websites or services.
        NexKripa IT INDIA is not responsible for the privacy practices or
        content of websites operated by other organizations. Please review their
        privacy policies before providing personal information.
      </p>
    ),
  },
  {
    number: "09",
    title: "CHILDREN'S PRIVACY",
    content: (
      <p>
        Our website and business services are not intended to knowingly collect
        personal information from children through general project enquiry
        forms. If you believe information relating to a child has been provided
        to us inappropriately, please contact us so that it can be reviewed.
      </p>
    ),
  },
  {
    number: "10",
    title: "CHANGES TO THIS POLICY",
    content: (
      <p>
        We may update this Privacy Policy as our website, services, or data
        practices change. The updated version may be posted on this page with a
        revised effective date.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="privacy-page">
        <div className="privacy-inner">
          <header className="privacy-hero">
            <span>LEGAL / NEXKRIPA IT INDIA</span>

            <h1>
              PRIVACY
              <strong>POLICY.</strong>
            </h1>

            <div className="privacy-hero-bottom">
              <p>
                This policy explains how NexKripa IT INDIA may handle personal
                information when you use our website or contact us about our
                services.
              </p>

              <small>LAST UPDATED: 08 AUGUST 2026</small>
            </div>
          </header>

          <div className="privacy-content">
            <aside className="privacy-sidebar">
              <span>PRIVACY POLICY</span>
              <p>
                Clear information about what may be collected, why it may be
                used, and the choices available to you.
              </p>
            </aside>

            <div className="privacy-sections">
              {sections.map((section) => (
                <article className="privacy-section" key={section.number}>
                  <span className="privacy-number">{section.number}</span>

                  <div>
                    <h2>{section.title}</h2>
                    <div className="privacy-copy">{section.content}</div>
                  </div>
                </article>
              ))}

              <article className="privacy-section privacy-contact-section">
                <span className="privacy-number">11</span>

                <div>
                  <h2>CONTACT US</h2>

                  <div className="privacy-copy">
                    <p>
                      For privacy-related questions, requests, or concerns,
                      contact:
                    </p>

                    <div className="privacy-contact-card">
                      <strong>NexKripa IT INDIA</strong>
                      <span>Mumbai, Maharashtra, India</span>
                      <a href="mailto:hello@nexkripa.com">
                        hello@nexkripa.com
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="privacy-end">
            <span>NEXKRIPA IT INDIA</span>
            <h2>
              YOUR DATA.
              <strong>YOUR TRUST.</strong>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}