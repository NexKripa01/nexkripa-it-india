import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "CRM Solutions",
  description:
    "CRM solutions by NexKripa IT INDIA for lead management, sales pipelines, customer tracking and business workflows.",

  alternates: {
    canonical: "/services/crm",
  },
};

const capabilities = [
  ["01", "LEAD MANAGEMENT", "Capture, organize and track leads from first contact through each stage of your sales journey."],
  ["02", "SALES PIPELINE", "Give your team a clear view of opportunities, deal stages, priorities and follow-up actions."],
  ["03", "CUSTOMER RECORDS", "Keep important contact history, notes, activities and customer information in one structured place."],
  ["04", "AUTOMATED FOLLOW-UP", "Reduce repetitive work with reminders, status updates, notifications and workflow automation."],
  ["05", "DASHBOARDS", "Turn customer and sales activity into readable metrics, summaries and management views."],
  ["06", "CUSTOM WORKFLOWS", "Adapt the CRM around your process instead of forcing your business into a rigid generic system."],
];

const process = [
  ["01", "MAP", "We understand your current sales, support or customer-management workflow and identify where information gets lost."],
  ["02", "STRUCTURE", "We define the records, stages, roles, permissions and actions the CRM needs to support."],
  ["03", "DESIGN", "We shape dashboards and interfaces around the information your team needs most often."],
  ["04", "BUILD", "Core CRM functions, forms, data flows and integrations are implemented around the approved structure."],
  ["05", "TEST", "We test workflows, permissions, responsive behavior and important business scenarios before launch."],
  ["06", "IMPROVE", "The system can evolve with new automation, reports, integrations and operational requirements."],
];

export default function CRMPage() {
  return (
    <main className="crm-page">
      <section className="crm-hero">
        <div className="crm-hero-bg" />
        <div className="crm-hero-overlay" />

        <div className="crm-container crm-hero-inner">
          <Reveal>
            <span className="crm-kicker">SERVICES / CRM</span>
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
                We build CRM experiences that help teams organize customer data,
                manage leads, follow opportunities and make day-to-day work
                easier to track.
              </p>

              <Link href="/contact" className="crm-btn">
                BUILD A CRM <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="crm-intro">
        <div className="crm-container">
          <Reveal>
            <span className="crm-kicker">ONE SOURCE OF TRUTH</span>
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
                  Customer information should not live across scattered sheets,
                  messages and individual memory.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <p>
                  A well-designed CRM brings important customer activity into one
                  workflow so teams can understand what happened, what needs
                  attention and what should happen next.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="crm-showcase">
        <div className="crm-showcase-image" />

        <div className="crm-showcase-copy">
          <Reveal>
            <span className="crm-kicker">SALES VISIBILITY</span>
            <h2>
              SEE THE
              <br />
              <em>WHOLE PIPELINE.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p>
              Clear dashboards help teams understand lead activity, sales
              movement and the deals that need attention without digging through
              disconnected data.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="crm-capabilities">
        <div className="crm-container">
          <Reveal>
            <div className="crm-section-head">
              <span className="crm-kicker">WHAT WE CAN BUILD</span>
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

      <section className="crm-insights">
        <div className="crm-container crm-insights-grid">
          <Reveal>
            <div className="crm-insights-copy">
              <span className="crm-kicker">DATA YOU CAN USE</span>
              <h2>
                TURN ACTIVITY
                <br />
                INTO <em>INSIGHT.</em>
              </h2>

              <p>
                A CRM should not only store records. It should help reveal
                patterns in leads, customer engagement, pipeline health and team
                activity so decisions become easier.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="crm-insights-image" />
          </Reveal>
        </div>
      </section>

      <section className="crm-process">
        <div className="crm-container">
          <Reveal>
            <div className="crm-section-head">
              <span className="crm-kicker">OUR PROCESS</span>
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

      <section className="crm-cta">
        <div className="crm-container">
          <Reveal>
            <span className="crm-kicker">READY TO ORGANIZE YOUR PIPELINE?</span>
            <h2>
              KEEP EVERY
              <br />
              OPPORTUNITY
              <br />
              <em>IN VIEW.</em>
            </h2>

            <Link href="/contact" className="crm-cta-link">
              START A PROJECT <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}