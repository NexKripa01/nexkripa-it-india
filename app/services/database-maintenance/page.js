import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Database Maintenance",
  description:
    "Database maintenance services by NexKripa IT INDIA for monitoring, backups, optimization, reliability and performance.",

  alternates: {
    canonical: "/services/database-maintenance",
  },
};

const capabilities = [
  ["01", "HEALTH MONITORING", "Track database availability, resource usage and warning signals so issues are easier to detect early."],
  ["02", "BACKUP MANAGEMENT", "Plan and review backup routines so important business data has a practical recovery path."],
  ["03", "PERFORMANCE TUNING", "Identify slow queries, indexing opportunities and configuration issues that affect application speed."],
  ["04", "DATA CLEANUP", "Review redundant, outdated or poorly structured data that can make systems harder to maintain."],
  ["05", "SECURITY REVIEW", "Support safer access patterns, permissions and operational practices around important databases."],
  ["06", "SCALING SUPPORT", "Prepare database structure and maintenance routines for increasing users, records and application demands."],
];

const process = [
  ["01", "REVIEW", "We understand the database environment, workload, application dependencies and current maintenance practices."],
  ["02", "CHECK", "We review health indicators, storage, backups, query behavior and important configuration areas."],
  ["03", "PRIORITIZE", "We separate urgent reliability issues from longer-term performance and cleanup improvements."],
  ["04", "OPTIMIZE", "We address agreed maintenance work such as query tuning, indexing, cleanup or configuration changes."],
  ["05", "MONITOR", "We establish practical checks and visibility so recurring issues are easier to spot."],
  ["06", "MAINTAIN", "Ongoing maintenance can evolve as data volume, application traffic and business requirements grow."],
];

export default function DatabaseMaintenancePage() {
  return (
    <main className="dbm-page">
      <section className="dbm-hero">
        <div className="dbm-hero-bg" />
        <div className="dbm-hero-overlay" />

        <div className="dbm-container dbm-hero-inner">
          <Reveal>
            <span className="dbm-kicker">SERVICES / DATABASE MAINTENANCE</span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1>
              KEEP YOUR
              <span>DATA</span>
              <em>HEALTHY.</em>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="dbm-hero-bottom">
              <p>
                We help keep databases organized, monitored and performance-ready
                through practical maintenance, backup planning and optimization.
              </p>

              <Link href="/contact" className="dbm-btn">
                CHECK MY DATABASE <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="dbm-intro">
        <div className="dbm-container">
          <Reveal>
            <span className="dbm-kicker">RELIABILITY BEHIND THE SCENES</span>
          </Reveal>

          <div className="dbm-intro-grid">
            <Reveal delay={0.05}>
              <h2>
                CLEAN DATA.
                <br />
                <em>STEADY SYSTEMS.</em>
              </h2>
            </Reveal>

            <div className="dbm-intro-copy">
              <Reveal delay={0.1}>
                <p className="dbm-lead">
                  A database can look fine until traffic grows, backups fail or
                  one slow query starts affecting the whole application.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <p>
                  Regular maintenance helps reduce avoidable surprises by keeping
                  performance, storage, backups and data quality visible over time.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="dbm-showcase">
        <div className="dbm-showcase-image" />

        <div className="dbm-showcase-copy">
          <Reveal>
            <span className="dbm-kicker">MONITORING + MAINTENANCE</span>
            <h2>
              SEE THE ISSUE
              <br />
              <em>BEFORE USERS DO.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p>
              Monitoring gives teams useful visibility into uptime, resource
              pressure and changing behavior so maintenance becomes proactive
              instead of purely reactive.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="dbm-capabilities">
        <div className="dbm-container">
          <Reveal>
            <div className="dbm-section-head">
              <span className="dbm-kicker">WHAT WE MAINTAIN</span>
              <h2>
                PERFORMANCE.
                <br />
                BACKUPS. <em>STABILITY.</em>
              </h2>
            </div>
          </Reveal>

          <div className="dbm-grid">
            {capabilities.map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.045}>
                <article className="dbm-card">
                  <span>{number}</span>
                  <div className="dbm-line" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dbm-insights">
        <div className="dbm-container dbm-insights-grid">
          <Reveal>
            <div className="dbm-insights-copy">
              <span className="dbm-kicker">PERFORMANCE VISIBILITY</span>
              <h2>
                KNOW WHAT
                <br />
                YOUR DATABASE IS <em>DOING.</em>
              </h2>

              <p>
                Performance work starts with evidence. We use database behavior,
                query patterns and infrastructure signals to focus effort where
                it can make the biggest practical difference.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="dbm-insights-image" />
          </Reveal>
        </div>
      </section>

      <section className="dbm-process">
        <div className="dbm-container">
          <Reveal>
            <div className="dbm-section-head">
              <span className="dbm-kicker">OUR PROCESS</span>
              <h2>
                REVIEW.
                <br />
                OPTIMIZE. <em>MAINTAIN.</em>
              </h2>
            </div>
          </Reveal>

          <div className="dbm-process-list">
            {process.map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.04}>
                <article className="dbm-process-row">
                  <span className="dbm-num">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <i />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dbm-cta">
        <div className="dbm-container">
          <Reveal>
            <span className="dbm-kicker">DATABASE SLOW OR HARD TO MANAGE?</span>

            <h2>
              KEEP YOUR
              <br />
              DATA READY
              <br />
              <em>FOR GROWTH.</em>
            </h2>

            <Link href="/contact" className="dbm-cta-link">
              START A MAINTENANCE PROJECT <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}