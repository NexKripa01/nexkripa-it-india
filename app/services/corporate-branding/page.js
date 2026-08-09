import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Corporate Branding",
  description:
    "Corporate branding services by NexKripa IT INDIA — visual identity, brand systems, guidelines and digital brand experiences.",

  alternates: {
    canonical: "/services/corporate-branding",
  },
};

const deliverables = [
  {
    number: "01",
    title: "BRAND STRATEGY",
    text: "We define positioning, audience, personality and the core direction your brand should communicate.",
  },
  {
    number: "02",
    title: "LOGO SYSTEM",
    text: "A flexible logo system with primary, secondary and responsive variations for consistent use.",
  },
  {
    number: "03",
    title: "COLOR & TYPE",
    text: "A focused visual language built through purposeful color, typography and hierarchy.",
  },
  {
    number: "04",
    title: "BRAND GUIDELINES",
    text: "Clear rules for logo usage, spacing, colors, typography, imagery and everyday brand application.",
  },
  {
    number: "05",
    title: "BUSINESS COLLATERAL",
    text: "Identity applied across business cards, letterheads, presentation material and selected brand touchpoints.",
  },
  {
    number: "06",
    title: "DIGITAL IDENTITY",
    text: "A visual system designed to stay consistent across websites, social media and digital communication.",
  },
];

const process = [
  ["01", "DISCOVER", "We understand your business, market, audience, competitors and what you want the brand to represent."],
  ["02", "POSITION", "We define a clear strategic direction so the visual identity has purpose instead of decoration."],
  ["03", "EXPLORE", "We develop visual territories through typography, color, composition and identity concepts."],
  ["04", "REFINE", "The strongest direction is refined into a cohesive, recognizable brand system."],
  ["05", "SYSTEMIZE", "We establish guidelines and repeatable rules so the identity remains consistent everywhere."],
  ["06", "APPLY", "The system is translated into practical digital and physical brand touchpoints."],
];

export default function CorporateBrandingPage() {
  return (
    <main className="cb-page">
      <section className="cb-hero">
        <div className="cb-hero-bg" aria-hidden="true" />
        <div className="cb-hero-overlay" aria-hidden="true" />

        <div className="cb-container cb-hero-inner">
          <Reveal>
            <span className="cb-kicker">SERVICES / CORPORATE BRANDING</span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1>
              BUILD A BRAND
              <span>PEOPLE</span>
              <em>REMEMBER.</em>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="cb-hero-bottom">
              <p>
                We create visual identity systems that help businesses look
                consistent, communicate clearly and build recognition across
                every important touchpoint.
              </p>

              <Link href="/contact" className="cb-btn">
                START A BRAND PROJECT <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cb-intro">
        <div className="cb-container">
          <Reveal>
            <span className="cb-kicker">WHY BRANDING MATTERS</span>
          </Reveal>

          <div className="cb-intro-grid">
            <Reveal delay={0.05}>
              <h2>
                MORE THAN
                <br />
                <em>A LOGO.</em>
              </h2>
            </Reveal>

            <div>
              <Reveal delay={0.1}>
                <p className="cb-lead">
                  A corporate identity should make your business feel
                  recognizable before someone reads a full paragraph about it.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <p>
                  We build brand systems around clarity, consistency and
                  relevance — so your visual identity can work across websites,
                  social channels, presentations, printed material and future
                  campaigns without losing its character.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="cb-showcase">
        <div className="cb-showcase-image" />
        <div className="cb-showcase-copy">
          <Reveal>
            <span className="cb-kicker">IDENTITY SYSTEM</span>
            <h2>
              ONE BRAND.
              <br />
              <em>ONE LANGUAGE.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p>
              From logo behavior and color to typography and layouts, every
              part should feel connected. We build systems that make that
              consistency easier to maintain.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="cb-deliverables">
        <div className="cb-container">
          <Reveal>
            <div className="cb-section-head">
              <span className="cb-kicker">WHAT WE CREATE</span>
              <h2>
                A COMPLETE
                <br />
                <em>BRAND SYSTEM.</em>
              </h2>
            </div>
          </Reveal>

          <div className="cb-grid">
            {deliverables.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.045}>
                <article className="cb-card">
                  <span>{item.number}</span>
                  <div className="cb-line" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cb-identity">
        <div className="cb-container cb-identity-grid">
          <Reveal>
            <div className="cb-identity-copy">
              <span className="cb-kicker">CONSISTENCY EVERYWHERE</span>
              <h2>
                FROM SCREEN
                <br />
                TO <em>STATIONERY.</em>
              </h2>
              <p>
                The same identity should feel intentional whether someone sees
                your website, a business card, a presentation or a social post.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="cb-identity-image" />
          </Reveal>
        </div>
      </section>

      <section className="cb-process">
        <div className="cb-container">
          <Reveal>
            <div className="cb-section-head">
              <span className="cb-kicker">OUR PROCESS</span>
              <h2>
                STRATEGY FIRST.
                <br />
                <em>DESIGN WITH PURPOSE.</em>
              </h2>
            </div>
          </Reveal>

          <div className="cb-process-list">
            {process.map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.04}>
                <article className="cb-process-row">
                  <span className="cb-num">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <i />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cb-studio">
        <div className="cb-studio-bg" />
        <div className="cb-studio-overlay" />

        <div className="cb-container cb-studio-copy">
          <Reveal>
            <span className="cb-kicker">VISUAL THINKING</span>
            <h2>
              DETAILS CREATE
              <br />
              <em>RECOGNITION.</em>
            </h2>
          </Reveal>
        </div>
      </section>

      <section className="cb-cta">
        <div className="cb-container">
          <Reveal>
            <span className="cb-kicker">READY TO BUILD YOUR IDENTITY?</span>
            <h2>
              MAKE YOUR
              <br />
              BRAND
              <br />
              <em>UNMISTAKABLE.</em>
            </h2>

            <Link href="/contact" className="cb-cta-link">
              START A PROJECT <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  );
}