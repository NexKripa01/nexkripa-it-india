import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "UI/UX Design",
  description:
    "UI/UX design services by NexKripa IT INDIA for websites, dashboards and digital products.",

  alternates: {
    canonical: "/services/ui-ux",
  },
};

const deliverables = [
  ["01", "USER FLOW", "We map the journey users take so the experience feels clear from first action to completion."],
  ["02", "WIREFRAMES", "Low-fidelity layouts help us test structure, hierarchy and screen logic before polishing visuals."],
  ["03", "UI DESIGN", "We create clean, modern interfaces with strong typography, spacing, color and visual rhythm."],
  ["04", "DESIGN SYSTEM", "Reusable components, states and rules help keep the product consistent as it grows."],
  ["05", "PROTOTYPING", "Interactive prototypes help validate navigation and important interactions before development."],
  ["06", "RESPONSIVE UX", "Layouts are planned for desktop, tablet and mobile instead of shrinking one screen everywhere."],
];

const process = [
  ["01", "UNDERSTAND", "We learn the product goal, users, pain points, features and what success should look like."],
  ["02", "MAP", "We organize content, flows and screen relationships before committing to visual decisions."],
  ["03", "WIREFRAME", "We create early layouts to test hierarchy, usability and important user actions."],
  ["04", "DESIGN", "The approved direction becomes a polished interface with a cohesive visual system."],
  ["05", "PROTOTYPE", "Key screens and interactions are connected so the product can be reviewed more realistically."],
  ["06", "HANDOFF", "We prepare organized designs and specifications for a smoother transition into development."],
];

export default function UIUXPage() {
  return (
    <main className="ux-page">
      <section className="ux-hero">
        <div className="ux-hero-bg" />
        <div className="ux-hero-overlay" />

        <div className="ux-container ux-hero-inner">
          <Reveal>
            <span className="ux-kicker">SERVICES / UI & UX</span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1>
              DESIGN THAT
              <span>FEELS</span>
              <em>EFFORTLESS.</em>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="ux-hero-bottom">
              <p>
                We design digital experiences that are visually clear, easy to
                understand and enjoyable to use across websites, dashboards and
                product interfaces.
              </p>

              <Link href="/contact" className="ux-btn">
                START A UI/UX PROJECT <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="ux-intro">
        <div className="ux-container">
          <Reveal>
            <span className="ux-kicker">DESIGN FOR REAL USERS</span>
          </Reveal>

          <div className="ux-intro-grid">
            <Reveal delay={0.05}>
              <h2>
                LESS FRICTION.
                <br />
                <em>MORE CLARITY.</em>
              </h2>
            </Reveal>

            <div className="ux-intro-copy">
              <Reveal delay={0.1}>
                <p className="ux-lead">
                  Good UI attracts attention. Good UX helps people know what to
                  do next without making them think too hard.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <p>
                  We combine structure, visual hierarchy and interaction design
                  so every screen supports the user and the business goal at the
                  same time.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="ux-showcase">
        <div className="ux-showcase-image" />
        <div className="ux-showcase-copy">
          <Reveal>
            <span className="ux-kicker">INTERFACE DESIGN</span>
            <h2>
              EVERY SCREEN
              <br />
              HAS A <em>PURPOSE.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p>
              We make visual decisions around usability first — what users need
              to notice, understand and act on — then shape the interface around
              that flow.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="ux-deliverables">
        <div className="ux-container">
          <Reveal>
            <div className="ux-section-head">
              <span className="ux-kicker">WHAT WE DESIGN</span>
              <h2>
                FROM FLOW
                <br />
                TO <em>FINAL UI.</em>
              </h2>
            </div>
          </Reveal>

          <div className="ux-grid">
            {deliverables.map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.045}>
                <article className="ux-card">
                  <span>{number}</span>
                  <div className="ux-line" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ux-dashboard">
        <div className="ux-container ux-dashboard-grid">
          <Reveal>
            <div className="ux-dashboard-copy">
              <span className="ux-kicker">PRODUCT THINKING</span>
              <h2>
                COMPLEX DATA.
                <br />
                <em>CLEAR INTERFACE.</em>
              </h2>
              <p>
                Dashboards and product screens can carry a lot of information.
                We organize it into clear priorities so users can scan, compare
                and act quickly.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="ux-dashboard-image" />
          </Reveal>
        </div>
      </section>

      <section className="ux-process">
        <div className="ux-container">
          <Reveal>
            <div className="ux-section-head">
              <span className="ux-kicker">OUR PROCESS</span>
              <h2>
                THINK FIRST.
                <br />
                <em>DESIGN SECOND.</em>
              </h2>
            </div>
          </Reveal>

          <div className="ux-process-list">
            {process.map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.04}>
                <article className="ux-process-row">
                  <span className="ux-num">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <i />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ux-cta">
        <div className="ux-container">
          <Reveal>
            <span className="ux-kicker">HAVE A PRODUCT IDEA?</span>
            <h2>
              LET&apos;S MAKE IT
              <br />
              SIMPLE TO
              <br />
              <em>USE.</em>
            </h2>

            <Link href="/contact" className="ux-cta-link">
              START A PROJECT <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}