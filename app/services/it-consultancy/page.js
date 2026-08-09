import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "IT Consultancy",
  description:
    "IT consultancy services by NexKripa IT INDIA for technology strategy, systems planning, digital transformation and infrastructure decisions.",

  alternates: {
    canonical: "/services/it-consultancy",
  },
};

const capabilities = [
  ["01", "TECHNOLOGY STRATEGY", "Turn business goals into a practical technology roadmap with clear priorities and realistic next steps."],
  ["02", "SYSTEM AUDIT", "Review your current tools, workflows and infrastructure to identify gaps, duplication and avoidable complexity."],
  ["03", "DIGITAL TRANSFORMATION", "Plan smarter processes and technology adoption around the way your business actually operates."],
  ["04", "SOFTWARE GUIDANCE", "Compare platforms, tools and implementation options with a focus on fit, scalability and long-term value."],
  ["05", "INFRASTRUCTURE PLANNING", "Structure hosting, cloud, network and system requirements around performance, reliability and growth."],
  ["06", "IMPLEMENTATION SUPPORT", "Support planning, vendor coordination and execution so recommendations move from slide decks into real systems."],
];

const process = [
  ["01", "DISCOVER", "We understand your business goals, current systems, operational pain points and upcoming technology needs."],
  ["02", "ASSESS", "We review what is working, what is creating friction and where technology is underused or overcomplicated."],
  ["03", "PRIORITIZE", "We separate urgent issues from long-term opportunities and organize them by business impact."],
  ["04", "ROADMAP", "We build a phased plan covering platforms, infrastructure, workflows, integrations and implementation order."],
  ["05", "IMPLEMENT", "We can support execution through technical coordination, development and solution integration."],
  ["06", "OPTIMIZE", "As the business changes, the roadmap can be reviewed and improved around new requirements and opportunities."],
];

export default function ITConsultancyPage() {
  return (
    <main className="itc-page">
      <section className="itc-hero">
        <div className="itc-hero-bg" />
        <div className="itc-hero-overlay" />

        <div className="itc-container itc-hero-inner">
          <Reveal>
            <span className="itc-kicker">SERVICES / IT CONSULTANCY</span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1>
              MAKE BETTER
              <span>TECH</span>
              <em>DECISIONS.</em>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="itc-hero-bottom">
              <p>
                We help businesses make clearer technology decisions, reduce
                unnecessary complexity and build practical roadmaps for systems,
                infrastructure and digital growth.
              </p>

              <Link href="/contact" className="itc-btn">
                TALK TO US <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="itc-intro">
        <div className="itc-container">
          <Reveal>
            <span className="itc-kicker">TECHNOLOGY WITH DIRECTION</span>
          </Reveal>

          <div className="itc-intro-grid">
            <Reveal delay={0.05}>
              <h2>
                LESS GUESSING.
                <br />
                <em>MORE DIRECTION.</em>
              </h2>
            </Reveal>

            <div className="itc-intro-copy">
              <Reveal delay={0.1}>
                <p className="itc-lead">
                  The right technology should simplify work, support growth and
                  solve a real business problem.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <p>
                  We look at the bigger picture before recommending a tool or
                  platform — your team, current systems, budget, priorities and
                  where the business needs to go next.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="itc-showcase">
        <div className="itc-showcase-image" />

        <div className="itc-showcase-copy">
          <Reveal>
            <span className="itc-kicker">STRATEGY + EXECUTION</span>
            <h2>
              TURN COMPLEXITY
              <br />
              INTO A <em>ROADMAP.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p>
              We translate technical options into clear decisions so teams can
              understand what to prioritize, what to improve and what not to
              spend time or money on.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="itc-capabilities">
        <div className="itc-container">
          <Reveal>
            <div className="itc-section-head">
              <span className="itc-kicker">WHAT WE HELP WITH</span>
              <h2>
                ADVICE THAT
                <br />
                <em>LEADS TO ACTION.</em>
              </h2>
            </div>
          </Reveal>

          <div className="itc-grid">
            {capabilities.map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.045}>
                <article className="itc-card">
                  <span>{number}</span>
                  <div className="itc-line" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="itc-infrastructure">
        <div className="itc-container itc-infrastructure-grid">
          <Reveal>
            <div className="itc-infrastructure-copy">
              <span className="itc-kicker">VISIBILITY MATTERS</span>
              <h2>
                SEE THE SYSTEM.
                <br />
                <em>SEE THE RISK.</em>
              </h2>

              <p>
                Better technology decisions start with visibility. We help
                identify performance, infrastructure and workflow issues before
                they become bigger operational problems.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="itc-infrastructure-image" />
          </Reveal>
        </div>
      </section>

      <section className="itc-process">
        <div className="itc-container">
          <Reveal>
            <div className="itc-section-head">
              <span className="itc-kicker">OUR PROCESS</span>
              <h2>
                UNDERSTAND.
                <br />
                PLAN. <em>IMPROVE.</em>
              </h2>
            </div>
          </Reveal>

          <div className="itc-process-list">
            {process.map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.04}>
                <article className="itc-process-row">
                  <span className="itc-num">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <i />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="itc-cta">
        <div className="itc-container">
          <Reveal>
            <span className="itc-kicker">NEED A CLEARER TECHNOLOGY PLAN?</span>

            <h2>
              MAKE YOUR
              <br />
              NEXT TECH MOVE
              <br />
              <em>WITH CLARITY.</em>
            </h2>

            <Link href="/contact" className="itc-cta-link">
              START A CONVERSATION <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}