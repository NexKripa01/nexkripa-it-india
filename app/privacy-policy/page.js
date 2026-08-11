import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",

  description:
    "Read the NexKripa IT INDIA Privacy Policy to understand how personal information may be collected, used, stored, shared and protected when you use our website or contact us.",

  alternates: {
    canonical: "/privacy-policy",
  },

  openGraph: {
    title: "Privacy Policy | NexKripa IT INDIA",

    description:
      "Learn how NexKripa IT INDIA may collect, use and protect personal information submitted through our website and business enquiries.",

    url: "/privacy-policy",

    siteName: "NexKripa",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    number: "01",
    title: "INFORMATION WE MAY COLLECT",
    content: (
      <>
        <p>
          When you contact NexKripa IT INDIA, request information about a
          service, discuss a project, or submit a form on our website, we may
          receive information such as your name, email address, phone number,
          company or brand name, selected services and project details.
        </p>

        <p>
          We may also receive limited technical information such as browser
          type, device type, pages visited, referral information and general
          website usage information when analytics or similar technologies are
          enabled.
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
          enquiries, understand project requirements, communicate with you,
          prepare proposals, provide requested services and manage an existing
          or potential business relationship.
        </p>

        <p>
          We may also use relevant website usage information to understand how
          our website performs and identify opportunities to improve its
          usability, content and technical experience.
        </p>

        <p>
          We do not intend to use personal information for purposes that are
          unrelated to the reason it was collected without an appropriate
          basis or permission where required.
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
          Our website may use cookies, analytics technologies or similar tools
          to understand website performance, traffic and visitor interaction.
          These technologies may collect limited technical and usage
          information.
        </p>

        <p>
          If additional analytics, advertising, remarketing or third-party
          tracking technologies are introduced, this Privacy Policy may be
          updated to provide information about those services and how they are
          used.
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
          NexKripa IT INDIA does not sell personal information.
        </p>

        <p>
          Information may be shared with service providers, hosting providers,
          communication platforms or other technology partners where reasonably
          necessary to operate the website, respond to you, deliver a requested
          service or comply with applicable legal requirements.
        </p>

        <p>
          Third-party providers may process information according to their own
          privacy policies, terms and security practices.
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
          We may retain enquiry, communication and project-related information
          for as long as reasonably necessary to respond to you, manage a
          business relationship, maintain relevant business records or meet
          applicable legal and operational requirements.
        </p>

        <p>
          Where information is no longer reasonably required, we may delete,
          anonymize or otherwise dispose of it as appropriate.
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
          help protect personal information against unauthorized access, loss,
          misuse, alteration or disclosure.
        </p>

        <p>
          However, no website, network, storage system or electronic
          transmission can be guaranteed to be completely secure. Users should
          avoid submitting unnecessary sensitive or confidential information
          through general enquiry forms.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "YOUR PRIVACY RIGHTS & CHOICES",
    content: (
      <>
        <p>
          Depending on applicable law and the circumstances of the processing,
          you may have rights or choices concerning personal information
          relating to you.
        </p>

        <p>
          These may include requesting access to relevant information,
          requesting correction or updating of information, requesting
          deletion where applicable, withdrawing consent where processing is
          based on consent, or raising a privacy-related grievance or concern.
        </p>

        <p>
          Requests will be considered in accordance with applicable legal
          requirements and the circumstances of the request.
        </p>
      </>
    ),
  },

  {
    number: "08",
    title: "THIRD-PARTY SERVICES & LINKS",
    content: (
      <>
        <p>
          Our website may contain links to third-party websites, platforms or
          services.
        </p>

        <p>
          NexKripa IT INDIA does not control the privacy practices, security or
          content of websites operated by other organizations. Users should
          review the relevant privacy policies before providing personal
          information to those services.
        </p>
      </>
    ),
  },

  {
    number: "09",
    title: "CHILDREN'S PRIVACY",
    content: (
      <>
        <p>
          Our website and general business enquiry services are not designed
          for the purpose of knowingly collecting personal information from
          children.
        </p>

        <p>
          If you believe personal information relating to a child has been
          submitted to us inappropriately, please contact us so the matter can
          be reviewed.
        </p>
      </>
    ),
  },

  {
    number: "10",
    title: "INTERNATIONAL & THIRD-PARTY PROCESSING",
    content: (
      <>
        <p>
          Some technology, hosting, communication or cloud service providers
          used to operate our website or business may process information using
          infrastructure located in different regions.
        </p>

        <p>
          Where third-party services are used, their handling of information
          may also be subject to their respective privacy policies and
          applicable laws.
        </p>
      </>
    ),
  },

  {
    number: "11",
    title: "CHANGES TO THIS POLICY",
    content: (
      <>
        <p>
          We may update this Privacy Policy when our website, services,
          technologies, legal requirements or data practices change.
        </p>

        <p>
          When changes are made, the revised version may be published on this
          page together with an updated effective date.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="privacy-page">
        <div className="privacy-inner">

          {/* HERO */}
          <header className="privacy-hero">
            <span>LEGAL / NEXKRIPA IT INDIA</span>

            <h1>
              PRIVACY
              <strong>POLICY.</strong>
            </h1>

            <div className="privacy-hero-bottom">
              <p>
                This Privacy Policy explains how NexKripa IT INDIA may collect,
                use, store, share and protect personal information when you use
                our website or contact us about our services.
              </p>

              <small>
                LAST UPDATED: 11 AUGUST 2026
              </small>
            </div>
          </header>

          {/* CONTENT */}
          <div className="privacy-content">

            <aside className="privacy-sidebar">
              <span>PRIVACY POLICY</span>

              <p>
                Clear information about what data may be collected, why it may
                be used and the choices that may be available to you.
              </p>
            </aside>

            <div className="privacy-sections">

              {sections.map((section) => (
                <article
                  className="privacy-section"
                  key={section.number}
                >
                  <span className="privacy-number">
                    {section.number}
                  </span>

                  <div>
                    <h2>{section.title}</h2>

                    <div className="privacy-copy">
                      {section.content}
                    </div>
                  </div>
                </article>
              ))}

              {/* CONTACT */}
              <article className="privacy-section privacy-contact-section">
                <span className="privacy-number">
                  12
                </span>

                <div>
                  <h2>
                    PRIVACY CONTACT
                  </h2>

                  <div className="privacy-copy">
                    <p>
                      For privacy-related questions, correction requests,
                      deletion requests or other concerns, you can contact
                      NexKripa IT INDIA.
                    </p>

                    <div className="privacy-contact-card">
                      <strong>
                        NexKripa IT INDIA
                      </strong>

                      <span>
                        Mumbai, Maharashtra, India
                      </span>

                      <a href="mailto:hello@nexkripa.com">
                        hello@nexkripa.com
                      </a>
                    </div>
                  </div>
                </div>
              </article>

            </div>
          </div>

          {/* WEBSITE LINKS */}
          <div className="privacy-links">
            <Link href="/">
              HOME
            </Link>

            <Link href="/about">
              ABOUT NEXKRIPA
            </Link>

            <Link href="/services">
              SERVICES
            </Link>

            <Link href="/contact">
              CONTACT
            </Link>
          </div>

          {/* END */}
          <div className="privacy-end">
            <span>
              NEXKRIPA IT INDIA
            </span>

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