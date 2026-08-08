import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About | NexKripa IT INDIA",
  description:
    "Learn about NexKripa IT INDIA, a digital technology studio focused on websites, digital products, AI-powered solutions and meaningful brand experiences.",
};

const capabilities = [
  {
    number: "01",
    title: "THINK",
    text: "We understand the problem, audience and business goal before choosing the solution.",
  },
  {
    number: "02",
    title: "DESIGN",
    text: "We shape clear, modern interfaces and brand experiences that feel intentional.",
  },
  {
    number: "03",
    title: "BUILD",
    text: "We turn ideas into responsive websites and digital products with reliable technology.",
  },
  {
    number: "04",
    title: "GROW",
    text: "We improve what is built through automation, AI-led workflows and continuous iteration.",
  },
];

const values = [
  ["CLARITY", "Less noise. Better decisions."],
  ["CRAFT", "Details should feel considered."],
  ["OWNERSHIP", "We care about the outcome, not only the output."],
  ["PROGRESS", "Build, learn, improve and keep moving."],
];

export default function AboutPage() {
  return (
    <>
      <section className="nk-about-hero">
        <div className="nk-about-hero-grid">
          <div className="nk-about-hero-copy">
            <span className="nk-about-kicker">ABOUT NEXKRIPA IT INDIA</span>

            <h1>
              <span>WE BUILD</span>
              <span>
                WITH <em>INTENT.</em>
              </span>
            </h1>

            <p>
              A digital technology studio combining design, development and
              intelligent solutions to turn ambitious ideas into useful digital
              experiences.
            </p>
          </div>

          <div className="nk-about-mark" aria-hidden="true">
            <div className="nk-about-orbit nk-about-orbit-one" />
            <div className="nk-about-orbit nk-about-orbit-two" />
            <div className="nk-about-orbit nk-about-orbit-three" />
            <strong>GV</strong>
            <span>DIGITAL · TECHNOLOGY · INDIA</span>
          </div>
        </div>

        <div className="nk-about-hero-bottom">
          <span>01 / ABOUT</span>
          <span className="nk-about-scroll">SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="nk-about-story section-pad">
        <Reveal>
          <div className="nk-about-section-index">01</div>
        </Reveal>

        <div className="nk-about-story-content">
          <Reveal>
            <span className="nk-about-kicker">WHY NEXKRIPA</span>
            <h2 className="nk-about-two-line-title">
              <span>Technology should feel</span>
              <em>clear, useful & human.</em>
            </h2>
          </Reveal>

          <div className="nk-about-story-copy">
            <Reveal delay={0.08}>
              <p className="nk-about-lead">
                NexKripa IT INDIA brings strategy, visual design and technology
                into one focused process.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <p>
                We start by understanding what a business actually needs. Then
                we simplify the problem, shape the right experience and build
                the solution with attention to usability, performance and
                future growth.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p>
                From websites and digital products to AI-assisted workflows, our
                goal is simple: create work that looks distinctive, works
                reliably and helps the business move forward.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="nk-about-statement">
        <div className="nk-about-statement-track">
          <span>IDEA</span>
          <i>→</i>
          <span>STRATEGY</span>
          <i>→</i>
          <span>DESIGN</span>
          <i>→</i>
          <span>BUILD</span>
          <i>→</i>
          <span>GROW</span>
        </div>
      </section>

      <section className="nk-about-capabilities section-pad">
        <Reveal>
          <div className="nk-about-capability-head">
            <span className="nk-about-kicker">HOW WE WORK</span>
            <h2 className="nk-about-two-line-title">
              <span>One process.</span>
              <em>Four moves.</em>
            </h2>
          </div>
        </Reveal>

        <div className="nk-about-capability-grid">
          {capabilities.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.06}>
              <article className="nk-about-capability-card">
                <span className="nk-about-capability-number">{item.number}</span>
                <div className="nk-about-capability-line" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="nk-about-values">
        <div className="nk-about-values-inner">
          <Reveal>
            <div className="nk-about-values-heading">
              <span className="nk-about-kicker">OUR PRINCIPLES</span>
              <h2 className="nk-about-two-line-title">
                <span>The way we</span>
                <em>choose to work.</em>
              </h2>
            </div>
          </Reveal>

          <div className="nk-about-values-list">
            {values.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.05}>
                <div className="nk-about-value-row">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}