import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "AI Automation",
  description:
    "AI automation services by NexKripa IT INDIA for workflow automation, intelligent assistants, integrations and repetitive task reduction.",

  alternates: {
    canonical: "/services/ai-automation",
  },
};

const capabilities = [
  ["01", "WORKFLOW AUTOMATION", "Automate repetitive multi-step processes so teams spend less time on manual handoffs and routine updates."],
  ["02", "AI ASSISTANTS", "Build focused assistants that can help with internal knowledge, support, lead handling and common operational tasks."],
  ["03", "SMART FORMS", "Use intelligent forms and routing logic to collect better information and send it to the right workflow automatically."],
  ["04", "DATA EXTRACTION", "Turn documents, emails and structured inputs into usable business data with less manual copy-paste work."],
  ["05", "API INTEGRATION", "Connect tools, databases and services so information can move between systems more reliably."],
  ["06", "AUTOMATED REPORTING", "Generate summaries, updates and recurring reports from the data your business already creates."],
];

const process = [
  ["01", "IDENTIFY", "We find repetitive, rules-based or time-consuming tasks that are strong candidates for automation."],
  ["02", "MAP", "We document the current workflow, data sources, decision points and the people or systems involved."],
  ["03", "DESIGN", "We define the automation logic, fallbacks, approvals and human checkpoints before implementation."],
  ["04", "BUILD", "We connect the required services, APIs, data sources and AI components into a working workflow."],
  ["05", "TEST", "We test real scenarios, edge cases and failure paths so automation remains useful instead of becoming fragile."],
  ["06", "IMPROVE", "We review performance and refine prompts, rules, integrations or steps as the workflow evolves."],
];

export default function AIAutomationPage() {
  return (
    <main className="ai-page">
      <section className="ai-hero">
        <div className="ai-hero-bg" />
        <div className="ai-hero-overlay" />

        <div className="ai-container ai-hero-inner">
          <Reveal>
            <span className="ai-kicker">SERVICES / AI AUTOMATION</span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1>
              AUTOMATE THE
              <span>REPETITIVE.</span>
              <em>FOCUS ON MORE.</em>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="ai-hero-bottom">
              <p>
                We design AI-assisted workflows that reduce repetitive work,
                connect systems and help teams move information and tasks
                forward with less manual effort.
              </p>

              <Link href="/contact" className="ai-btn">
                AUTOMATE A WORKFLOW <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="ai-intro">
        <div className="ai-container">
          <Reveal>
            <span className="ai-kicker">AUTOMATION WITH PURPOSE</span>
          </Reveal>

          <div className="ai-intro-grid">
            <Reveal delay={0.05}>
              <h2>
                LESS MANUAL WORK.
                <br />
                <em>MORE MOMENTUM.</em>
              </h2>
            </Reveal>

            <div className="ai-intro-copy">
              <Reveal delay={0.1}>
                <p className="ai-lead">
                  The best automation is not the one with the most AI. It is the
                  one that removes a real bottleneck without creating a new one.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <p>
                  We start with the workflow, then decide where rules,
                  integrations or AI can make the process faster, more
                  consistent and easier for your team to manage.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-showcase">
        <div className="ai-showcase-image" />

        <div className="ai-showcase-copy">
          <Reveal>
            <span className="ai-kicker">CONNECTED WORKFLOWS</span>
            <h2>
              SYSTEMS THAT
              <br />
              <em>WORK TOGETHER.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p>
              From enquiry routing and follow-ups to document processing and
              reporting, we connect the steps that usually require someone to
              copy, paste, check and repeat.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="ai-capabilities">
        <div className="ai-container">
          <Reveal>
            <div className="ai-section-head">
              <span className="ai-kicker">WHAT WE CAN AUTOMATE</span>
              <h2>
                SMARTER
                <br />
                <em>DAILY OPERATIONS.</em>
              </h2>
            </div>
          </Reveal>

          <div className="ai-grid">
            {capabilities.map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.045}>
                <article className="ai-card">
                  <span>{number}</span>
                  <div className="ai-line" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-logic">
        <div className="ai-container ai-logic-grid">
          <Reveal>
            <div className="ai-logic-copy">
              <span className="ai-kicker">HUMAN + AUTOMATION</span>
              <h2>
                AUTOMATE THE
                <br />
                TASK. KEEP THE <em>CONTROL.</em>
              </h2>

              <p>
                Not every decision should be automated. We can design approval
                points, alerts and human review into the workflow so the system
                stays practical and accountable.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="ai-logic-image" />
          </Reveal>
        </div>
      </section>

      <section className="ai-process">
        <div className="ai-container">
          <Reveal>
            <div className="ai-section-head">
              <span className="ai-kicker">OUR PROCESS</span>
              <h2>
                FIND THE FRICTION.
                <br />
                <em>AUTOMATE THE RIGHT PART.</em>
              </h2>
            </div>
          </Reveal>

          <div className="ai-process-list">
            {process.map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.04}>
                <article className="ai-process-row">
                  <span className="ai-num">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <i />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-cta">
        <div className="ai-container">
          <Reveal>
            <span className="ai-kicker">WHAT SHOULD YOUR TEAM STOP DOING MANUALLY?</span>

            <h2>
              LET THE
              <br />
              WORKFLOW
              <br />
              <em>MOVE ITSELF.</em>
            </h2>

            <Link href="/contact" className="ai-cta-link">
              START AN AUTOMATION PROJECT <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}