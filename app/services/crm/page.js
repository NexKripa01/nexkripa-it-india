import Link from "next/link";
import Reveal from "@/components/Reveal";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata = {
  title: "CRM Development Services in Mumbai",

  description:
    "NexKripa IT INDIA provides CRM development services in Mumbai and across India for lead management, sales pipelines, customer tracking, dashboards and custom business workflows.",

  keywords: [
    "CRM Development Services Mumbai",
    "CRM Development Company Mumbai",
    "Custom CRM Development India",
    "Lead Management CRM",
    "Sales Pipeline CRM",
    "Customer Management System",
    "CRM Dashboard Development",
    "Business CRM Solutions",
    "CRM Automation Services",
    "Custom Business CRM",
    "NexKripa CRM",
    "NexKripa IT INDIA",
  ],

  alternates: {
    canonical: "/services/crm",
  },

  openGraph: {
    title: "CRM Development Services in Mumbai | NexKripa IT INDIA",

    description:
      "Custom CRM solutions for lead management, sales pipelines, customer tracking, dashboards and business workflows.",

    url: "/services/crm",

    siteName: "NexKripa",

    type: "website",

    images: [
      {
        url: "/new-logo.png",
        width: 1200,
        height: 630,
        alt: "NexKripa IT INDIA CRM Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "CRM Development Services in Mumbai | NexKripa IT INDIA",

    description:
      "Custom CRM development for customer management, sales pipelines and business workflows.",

    images: ["/og-image.png"],
  },
};

const capabilities = [
  [
    "01",
    "LEAD MANAGEMENT",
    "Capture, organize and track leads from first contact through each stage of your sales journey.",
  ],
  [
    "02",
    "SALES PIPELINE",
    "Give your team a clear view of opportunities, deal stages, priorities and follow-up actions.",
  ],
  [
    "03",
    "CUSTOMER RECORDS",
    "Keep important contact history, notes, activities and customer information in one structured place.",
  ],
  [
    "04",
    "AUTOMATED FOLLOW-UP",
    "Reduce repetitive work with reminders, status updates, notifications and workflow automation.",
  ],
  [
    "05",
    "DASHBOARDS",
    "Turn customer and sales activity into readable metrics, summaries and management views.",
  ],
  [
    "06",
    "CUSTOM WORKFLOWS",
    "Adapt the CRM around your process instead of forcing your business into a rigid generic system.",
  ],
];

const process = [
  [
    "01",
    "MAP",
    "We understand your current sales, support or customer-management workflow and identify where information gets lost.",
  ],
  [
    "02",
    "STRUCTURE",
    "We define the records, stages, roles, permissions and actions the CRM needs to support.",
  ],
  [
    "03",
    "DESIGN",
    "We shape dashboards and interfaces around the information your team needs most often.",
  ],
  [
    "04",
    "BUILD",
    "Core CRM functions, forms, data flows and integrations are implemented around the approved structure.",
  ],
  [
    "05",
    "TEST",
    "We test workflows, permissions, responsive behavior and important business scenarios before launch.",
  ],
  [
    "06",
    "IMPROVE",
    "The system can evolve with new automation, reports, integrations and operational requirements.",
  ],
];

export default function CRMPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.nexkripa.in/",
          },
          {
            name: "Services",
            url: "https://www.nexkripa.in/services",
          },
          {
            name: "CRM Development",
            url: "https://www.nexkripa.in/services/crm",
          },
        ]}
      />

      <main className="crm-page">

        {/* HERO */}
        <section className="crm-hero">
          <div className="crm-hero-bg" aria-hidden="true" />
          <div className="crm-hero-overlay" aria-hidden="true" />

          <div className="crm-container crm-hero-inner">
            <Reveal>
              <span className="crm-kicker">
                CRM DEVELOPMENT SERVICES / MUMBAI
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1>
                KNOW YOUR
                <span>CUSTOMERS.</span>
                <em>MOVE FASTER.</em>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="crm-hero-bottom">
                <p>
                  NexKripa IT INDIA provides custom CRM development services in
                  Mumbai and across India for businesses that want to organize
                  customer data, manage leads, track sales opportunities and
                  improve daily workflows.
                </p>

                <Link href="/contact" className="crm-btn">
                  BUILD A CRM <span>↗</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* INTRO */}
        <section className="crm-intro">
          <div className="crm-container">
            <Reveal>
              <span className="crm-kicker">
                CUSTOM CRM SOLUTIONS
              </span>
            </Reveal>

            <div className="crm-intro-grid">
              <Reveal delay={0.05}>
                <h2>
                  LESS CHAOS.
                  <br />
                  <em>MORE CONTROL.</em>
                </h2>
              </Reveal>

              <div className="crm-intro-copy">
                <Reveal delay={0.1}>
                  <p className="crm-lead">
                    Customer information should not live across scattered
                    spreadsheets, messages and individual memory.
                  </p>
                </Reveal>

                <Reveal delay={0.16}>
                  <p>
                    A well-designed CRM brings important customer activity into
                    one structured workflow so teams can understand what
                    happened, what needs attention and what should happen next.
                  </p>
                </Reveal>

                <Reveal delay={0.2}>
                  <p>
                    We create CRM solutions around real business processes,
                    including lead tracking, customer records, sales pipelines,
                    follow-ups, dashboards and workflow automation.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* SHOWCASE */}
        <section
          className="crm-showcase"
          aria-label="CRM sales pipeline and customer management showcase"
        >
          <div
            className="crm-showcase-image"
            role="img"
            aria-label="Custom CRM dashboard for customer and sales pipeline management"
          />

          <div className="crm-showcase-copy">
            <Reveal>
              <span className="crm-kicker">
                SALES PIPELINE MANAGEMENT
              </span>

              <h2>
                SEE THE
                <br />
                <em>WHOLE PIPELINE.</em>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p>
                Clear CRM dashboards help teams understand lead activity, sales
                movement, follow-up requirements and the opportunities that need
                attention without digging through disconnected data.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="crm-capabilities">
          <div className="crm-container">
            <Reveal>
              <div className="crm-section-head">
                <span className="crm-kicker">
                  CRM FEATURES
                </span>

                <h2>
                  A CRM AROUND
                  <br />
                  <em>YOUR WORKFLOW.</em>
                </h2>
              </div>
            </Reveal>

            <div className="crm-grid">
              {capabilities.map(([number, title, text], index) => (
                <Reveal key={number} delay={index * 0.045}>
                  <article className="crm-card">
                    <span>{number}</span>

                    <div className="crm-line" />

                    <h3>{title}</h3>

                    <p>{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* INSIGHTS */}
        <section className="crm-insights">
          <div className="crm-container crm-insights-grid">
            <Reveal>
              <div className="crm-insights-copy">
                <span className="crm-kicker">
                  CRM REPORTING & INSIGHTS
                </span>

                <h2>
                  TURN ACTIVITY
                  <br />
                  INTO <em>INSIGHT.</em>
                </h2>

                <p>
                  A CRM should do more than store records. It should help reveal
                  patterns in leads, customer engagement, pipeline health,
                  conversions and team activity so business decisions become
                  easier.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div
                className="crm-insights-image"
                role="img"
                aria-label="CRM reporting dashboard with sales and customer insights"
              />
            </Reveal>
          </div>
        </section>

        {/* PROCESS */}
        <section className="crm-process">
          <div className="crm-container">
            <Reveal>
              <div className="crm-section-head">
                <span className="crm-kicker">
                  OUR CRM DEVELOPMENT PROCESS
                </span>

                <h2>
                  YOUR PROCESS.
                  <br />
                  <em>BETTER ORGANIZED.</em>
                </h2>
              </div>
            </Reveal>

            <div className="crm-process-list">
              {process.map(([number, title, text], index) => (
                <Reveal key={number} delay={index * 0.04}>
                  <article className="crm-process-row">
                    <span className="crm-num">{number}</span>

                    <h3>{title}</h3>

                    <p>{text}</p>

                    <i />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED / INTERNAL LINKS */}
        <section className="crm-related">
          <div className="crm-container">
            <Reveal>
              <div className="crm-section-head">
                <span className="crm-kicker">
                  EXPLORE MORE
                </span>

                <h2>
                  CONNECT YOUR
                  <br />
                  <em>BUSINESS SYSTEMS.</em>
                </h2>
              </div>
            </Reveal>

            <div className="crm-related-grid">

              <Link
                href="/services/ai-automation"
                className="crm-related-link"
              >
                <span>01</span>

                <div>
                  <h3>AI Automation</h3>

                  <p>
                    Automate lead routing, follow-ups, notifications and
                    repetitive CRM workflows.
                  </p>
                </div>

                <b>↗</b>
              </Link>

              <Link
                href="/services/database-maintenance"
                className="crm-related-link"
              >
                <span>02</span>

                <div>
                  <h3>Database Maintenance</h3>

                  <p>
                    Keep the customer and operational data behind your CRM
                    organized, reliable and maintained.
                  </p>
                </div>

                <b>↗</b>
              </Link>

              <Link
                href="/services/ui-ux"
                className="crm-related-link"
              >
                <span>03</span>

                <div>
                  <h3>UI / UX Design</h3>

                  <p>
                    Design clear dashboards and user-friendly interfaces for
                    complex business workflows.
                  </p>
                </div>

                <b>↗</b>
              </Link>

              <Link
                href="/contact"
                className="crm-related-link"
              >
                <span>04</span>

                <div>
                  <h3>Start a CRM Project</h3>

                  <p>
                    Tell us about your current customer-management process and
                    the CRM system your team needs.
                  </p>
                </div>

                <b>↗</b>
              </Link>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="crm-cta">
          <div className="crm-container">
            <Reveal>
              <span className="crm-kicker">
                READY TO ORGANIZE YOUR PIPELINE?
              </span>

              <h2>
                KEEP EVERY
                <br />
                OPPORTUNITY
                <br />
                <em>IN VIEW.</em>
              </h2>

              <Link href="/contact" className="crm-cta-link">
                START A CRM PROJECT <span>↗</span>
              </Link>
            </Reveal>
          </div>
        </section>

      </main>
    </>
  );
}