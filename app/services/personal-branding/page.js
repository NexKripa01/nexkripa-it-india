import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Personal Branding",
  description:
    "Personal branding services by NexKripa IT INDIA for professionals, founders and creators.",

  alternates: {
    canonical: "/services/personal-branding",
  },
};

const deliverables = [
  ["01", "POSITIONING", "Clarify who you are, what you stand for and how you should be remembered."],
  ["02", "VISUAL IDENTITY", "Create a clean visual system with typography, colors, imagery and presentation style."],
  ["03", "PROFILE PRESENCE", "Shape a stronger presence across LinkedIn, portfolio pages and other key digital touchpoints."],
  ["04", "CONTENT DIRECTION", "Define visual and messaging directions that make your posts and communication feel consistent."],
  ["05", "PERSONAL WEBSITE", "Build a focused personal website that presents your story, work, credibility and contact path."],
  ["06", "BRAND TOOLKIT", "Bring your identity together into practical assets you can reuse across your digital presence."],
];

const process = [
  ["01", "DISCOVER", "We understand your goals, audience, work, personality and the opportunities you want your brand to support."],
  ["02", "DEFINE", "We shape your positioning, tone and core message so the brand has a clear point of view."],
  ["03", "DESIGN", "We develop a visual direction that feels professional, recognizable and aligned with you."],
  ["04", "BUILD", "We apply the system to selected platforms, profile assets, website sections and content templates."],
  ["05", "REFINE", "We review the complete presence for consistency, clarity and stronger visual impact."],
  ["06", "LAUNCH", "You receive a practical system that can continue growing with your work and reputation."],
];

export default function PersonalBrandingPage() {
  return (
    <main className="pb-page">
      <section className="pb-hero">
        <div className="pb-hero-bg" />
        <div className="pb-hero-overlay" />

        <div className="pb-container pb-hero-inner">
          <Reveal>
            <span className="pb-kicker">SERVICES / PERSONAL BRANDING</span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1>
              MAKE YOUR
              <span>NAME</span>
              <em>MEMORABLE.</em>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="pb-hero-bottom">
              <p>
                We help professionals, founders and creators build a personal
                brand that feels clear, credible and consistent across the places
                that matter.
              </p>

              <Link href="/contact" className="pb-btn">
                BUILD MY BRAND <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-intro">
        <div className="pb-container">
          <Reveal>
            <span className="pb-kicker">YOUR DIGITAL REPUTATION</span>
          </Reveal>

          <div className="pb-intro-grid">
            <Reveal delay={0.05}>
              <h2>
                YOUR WORK
                <br />
                NEEDS A <em>FACE.</em>
              </h2>
            </Reveal>

            <div className="pb-intro-copy">
              <Reveal delay={0.1}>
                <p className="pb-lead">
                  People often discover you online before they ever meet you.
                  Your profile, website, visuals and content all shape that first
                  impression.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <p>
                  We bring those pieces together into one clear identity so your
                  personal brand feels intentional instead of fragmented.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-showcase">
        <div className="pb-showcase-image" />
        <div className="pb-showcase-copy">
          <Reveal>
            <span className="pb-kicker">PERSONAL BRAND SYSTEM</span>
            <h2>
              ONE PERSON.
              <br />
              <em>ONE CLEAR STORY.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p>
              We create a consistent system for how you present yourself — from
              profile imagery and visual language to your website, content and
              professional touchpoints.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-deliverables">
        <div className="pb-container">
          <Reveal>
            <div className="pb-section-head">
              <span className="pb-kicker">WHAT WE BUILD</span>
              <h2>
                YOUR PERSONAL
                <br />
                <em>BRAND TOOLKIT.</em>
              </h2>
            </div>
          </Reveal>

          <div className="pb-grid">
            {deliverables.map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.045}>
                <article className="pb-card">
                  <span>{number}</span>
                  <div className="pb-line" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-digital">
        <div className="pb-container pb-digital-grid">
          <Reveal>
            <div className="pb-digital-copy">
              <span className="pb-kicker">CONSISTENT EVERYWHERE</span>
              <h2>
                ONE IDENTITY.
                <br />
                EVERY <em>PLATFORM.</em>
              </h2>
              <p>
                A strong personal brand should feel recognizable on your website,
                social profiles, presentation assets and wherever your audience
                encounters you.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="pb-digital-image" />
          </Reveal>
        </div>
      </section>

      <section className="pb-process">
        <div className="pb-container">
          <Reveal>
            <div className="pb-section-head">
              <span className="pb-kicker">OUR PROCESS</span>
              <h2>
                FROM YOU
                <br />
                TO <em>YOUR BRAND.</em>
              </h2>
            </div>
          </Reveal>

          <div className="pb-process-list">
            {process.map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.04}>
                <article className="pb-process-row">
                  <span className="pb-num">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <i />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-cta">
        <div className="pb-container">
          <Reveal>
            <span className="pb-kicker">READY TO SHOW UP DIFFERENTLY?</span>
            <h2>
              BUILD A BRAND
              <br />
              THAT FEELS
              <br />
              <em>LIKE YOU.</em>
            </h2>

            <Link href="/contact" className="pb-cta-link">
              START A PROJECT <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  );
}