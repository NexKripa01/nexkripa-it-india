import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Website Design & Development",
  description:
    "Modern, responsive and performance-focused website design and development services by NexKripa IT INDIA.",

  alternates: {
    canonical: "/services/website",
  },
};

const features = [
  {
    number: "01",
    title: "CUSTOM DESIGN",
    text: "Original layouts shaped around your brand, audience and business goals — not a generic template.",
  },
  {
    number: "02",
    title: "RESPONSIVE BUILD",
    text: "A consistent experience across desktop, tablet and mobile with layouts built for real-world screens.",
  },
  {
    number: "03",
    title: "FAST PERFORMANCE",
    text: "Clean development, optimized assets and practical performance decisions to keep the experience smooth.",
  },
  {
    number: "04",
    title: "SEO-READY STRUCTURE",
    text: "Semantic page structure, metadata foundations and crawl-friendly implementation prepared for search growth.",
  },
  {
    number: "05",
    title: "CMS & CONTENT",
    text: "Flexible content workflows can be added so your team can update key website sections more easily.",
  },
  {
    number: "06",
    title: "SUPPORT & GROWTH",
    text: "After launch, the website can continue evolving through improvements, integrations and new features.",
  },
];

const process = [
  ["01", "DISCOVER", "We understand your business, audience, goals, content and the actions you want visitors to take."],
  ["02", "STRUCTURE", "We plan the pages, user flow, hierarchy and content direction before visual design begins."],
  ["03", "DESIGN", "We create a clear visual system with typography, spacing, imagery and interaction states."],
  ["04", "DEVELOP", "The approved direction is built into a responsive, production-ready website."],
  ["05", "TEST", "We review responsiveness, links, forms, core interactions and important performance details."],
  ["06", "LAUNCH", "The final website is deployed and prepared for future iteration, content and growth."],
];

const tech = [
  "NEXT.JS",
  "REACT",
  "JAVASCRIPT",
  "HTML",
  "CSS",
  "TAILWIND",
  "NODE.JS",
  "API INTEGRATION",
];

export default function WebsiteServicePage() {
  return (
    <>
      <main className="web-service-page">
        {/* HERO */}
        <section className="web-service-hero">
          <div className="web-service-hero-bg" aria-hidden="true" />
          <div className="web-service-hero-shade" aria-hidden="true" />

          <div className="web-service-hero-inner">
            <Reveal>
              <span className="web-service-kicker">SERVICES / WEBSITE</span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1>
                WEBSITES
                <span>BUILT TO</span>
                <em>MOVE.</em>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="web-service-hero-bottom">
                <p>
                  We design and develop modern websites that balance visual
                  identity, usability, speed and business purpose.
                </p>

                <Link href="/contact" className="web-service-primary-btn">
                  START A PROJECT <span>↗</span>
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="web-service-scroll-cue">
            <span>SCROLL</span>
            <i />
          </div>
        </section>

        {/* INTRO */}
        <section className="web-service-intro">
          <div className="web-service-container">
            <Reveal>
              <span className="web-service-kicker">WHAT WE DO</span>
            </Reveal>

            <div className="web-service-intro-grid">
              <Reveal delay={0.05}>
                <h2>
                  YOUR WEBSITE IS
                  <br />
                  <em>MORE THAN A PAGE.</em>
                </h2>
              </Reveal>

              <div className="web-service-intro-copy">
                <Reveal delay={0.1}>
                  <p className="web-service-lead">
                    It is often the first place where a potential customer
                    decides whether your business feels credible, relevant and
                    worth exploring.
                  </p>
                </Reveal>

                <Reveal delay={0.16}>
                  <p>
                    NexKripa IT INDIA combines strategy, visual design and
                    development to create websites that communicate clearly and
                    feel intentional from the first screen to the final call to
                    action.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE FEATURE */}
        <section className="web-service-showcase">
          <div className="web-service-showcase-image web-service-image-one">
            <div className="web-service-image-number">01</div>
          </div>

          <div className="web-service-showcase-copy">
            <Reveal>
              <span className="web-service-kicker">DESIGN + DEVELOPMENT</span>
              <h2>
                FROM IDEA TO
                <br />
                <em>REAL EXPERIENCE.</em>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p>
                We focus on the complete experience — how the site looks, how
                information is organized, how quickly users understand it and
                how naturally they move toward the next action.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FEATURES */}
        <section className="web-service-features">
          <div className="web-service-container">
            <Reveal>
              <div className="web-service-section-head">
                <span className="web-service-kicker">WHAT YOU GET</span>
                <h2>
                  EVERYTHING YOUR
                  <br />
                  <em>WEBSITE NEEDS.</em>
                </h2>
              </div>
            </Reveal>

            <div className="web-service-feature-grid">
              {features.map((item, index) => (
                <Reveal key={item.number} delay={index * 0.045}>
                  <article className="web-service-feature-card">
                    <span>{item.number}</span>
                    <div className="web-service-feature-line" />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* RESPONSIVE IMAGE */}
        <section className="web-service-responsive-section">
          <div className="web-service-container web-service-responsive-grid">
            <div className="web-service-responsive-copy">
              <Reveal>
                <span className="web-service-kicker">RESPONSIVE BY DEFAULT</span>
                <h2>
                  ONE WEBSITE.
                  <br />
                  <em>EVERY SCREEN.</em>
                </h2>
              </Reveal>

              <Reveal delay={0.08}>
                <p>
                  Your audience will not visit from one device. We build layouts
                  that adapt intentionally across desktop, tablet and mobile
                  instead of treating mobile as an afterthought.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="web-service-responsive-image" />
            </Reveal>
          </div>
        </section>

        {/* PROCESS */}
        <section className="web-service-process">
          <div className="web-service-container">
            <Reveal>
              <div className="web-service-section-head">
                <span className="web-service-kicker">OUR PROCESS</span>
                <h2>
                  CLEAR STEPS.
                  <br />
                  <em>BETTER OUTCOMES.</em>
                </h2>
              </div>
            </Reveal>

            <div className="web-service-process-list">
              {process.map(([number, title, text], index) => (
                <Reveal key={number} delay={index * 0.04}>
                  <article className="web-service-process-row">
                    <span className="web-service-process-number">{number}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <span className="web-service-process-dot" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section className="web-service-tech">
          <div className="web-service-container">
            <Reveal>
              <span className="web-service-kicker">TECHNOLOGY</span>
              <h2>
                MODERN TOOLS.
                <br />
                <em>RIGHT FIT.</em>
              </h2>
            </Reveal>

            <div className="web-service-tech-list">
              {tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}