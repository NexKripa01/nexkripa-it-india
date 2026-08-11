import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Personal Branding Services in Mumbai",

  description:
    "NexKripa IT INDIA provides personal branding services in Mumbai and across India for professionals, founders and creators, including positioning, visual identity, profile presence, content direction and personal websites.",

  keywords: [
    "Personal Branding Services Mumbai",
    "Personal Branding Company Mumbai",
    "Personal Branding India",
    "Founder Branding Services",
    "Professional Personal Branding",
    "Creator Personal Branding",
    "LinkedIn Personal Branding",
    "Personal Website Development",
    "Personal Brand Strategy",
    "Visual Identity for Professionals",
    "NexKripa Personal Branding",
    "NexKripa IT INDIA",
  ],

  alternates: {
    canonical: "/services/personal-branding",
  },

  openGraph: {
    title: "Personal Branding Services in Mumbai | NexKripa IT INDIA",

    description:
      "Personal branding for professionals, founders and creators through positioning, visual identity, profile presence, content direction and personal websites.",

    url: "/services/personal-branding",
    siteName: "NexKripa",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexKripa IT INDIA Personal Branding Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Personal Branding Services in Mumbai | NexKripa IT INDIA",

    description:
      "Personal branding, visual identity, LinkedIn presence and personal websites for professionals, founders and creators.",

    images: ["/og-image.png"],
  },
};

const deliverables = [
  [
    "01",
    "POSITIONING",
    "Clarify who you are, what you stand for and how you should be remembered.",
  ],
  [
    "02",
    "VISUAL IDENTITY",
    "Create a clean visual system with typography, colors, imagery and presentation style.",
  ],
  [
    "03",
    "PROFILE PRESENCE",
    "Shape a stronger presence across LinkedIn, portfolio pages and other key digital touchpoints.",
  ],
  [
    "04",
    "CONTENT DIRECTION",
    "Define visual and messaging directions that make your posts and communication feel consistent.",
  ],
  [
    "05",
    "PERSONAL WEBSITE",
    "Build a focused personal website that presents your story, work, credibility and contact path.",
  ],
  [
    "06",
    "BRAND TOOLKIT",
    "Bring your identity together into practical assets you can reuse across your digital presence.",
  ],
];

const process = [
  [
    "01",
    "DISCOVER",
    "We understand your goals, audience, work, personality and the opportunities you want your brand to support.",
  ],
  [
    "02",
    "DEFINE",
    "We shape your positioning, tone and core message so the brand has a clear point of view.",
  ],
  [
    "03",
    "DESIGN",
    "We develop a visual direction that feels professional, recognizable and aligned with you.",
  ],
  [
    "04",
    "BUILD",
    "We apply the system to selected platforms, profile assets, website sections and content templates.",
  ],
  [
    "05",
    "REFINE",
    "We review the complete presence for consistency, clarity and stronger visual impact.",
  ],
  [
    "06",
    "LAUNCH",
    "You receive a practical system that can continue growing with your work and reputation.",
  ],
];

export default function PersonalBrandingPage() {
  return (
    <main className="pb-page">

      {/* HERO */}
      <section className="pb-hero">
        <div className="pb-hero-bg" aria-hidden="true" />
        <div className="pb-hero-overlay" aria-hidden="true" />

        <div className="pb-container pb-hero-inner">
          <Reveal>
            <span className="pb-kicker">
              PERSONAL BRANDING SERVICES / MUMBAI
            </span>
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
                NexKripa IT INDIA provides personal branding services in Mumbai
                and across India for professionals, founders and creators who
                want a clear, credible and consistent digital presence.
              </p>

              <Link href="/contact" className="pb-btn">
                BUILD MY BRAND <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="pb-intro">
        <div className="pb-container">
          <Reveal>
            <span className="pb-kicker">
              PERSONAL BRAND STRATEGY
            </span>
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
                  Your profiles, website, visuals and content all contribute to
                  that first impression.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <p>
                  We bring those pieces together into one clear personal brand
                  identity so your professional presence feels intentional
                  instead of fragmented.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p>
                  Our personal branding approach can cover positioning, visual
                  identity, LinkedIn and profile presence, content direction
                  and a professional personal website based on your goals.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section
        className="pb-showcase"
        aria-label="Personal branding identity showcase"
      >
        <div
          className="pb-showcase-image"
          role="img"
          aria-label="Professional personal branding and visual identity by NexKripa IT INDIA"
        />

        <div className="pb-showcase-copy">
          <Reveal>
            <span className="pb-kicker">
              PERSONAL BRAND SYSTEM
            </span>

            <h2>
              ONE PERSON.
              <br />
              <em>ONE CLEAR STORY.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p>
              We create a consistent system for how you present yourself —
              from profile imagery and visual language to your website,
              professional content and important digital touchpoints.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="pb-deliverables">
        <div className="pb-container">
          <Reveal>
            <div className="pb-section-head">
              <span className="pb-kicker">
                PERSONAL BRANDING DELIVERABLES
              </span>

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

      {/* DIGITAL PRESENCE */}
      <section className="pb-digital">
        <div className="pb-container pb-digital-grid">
          <Reveal>
            <div className="pb-digital-copy">
              <span className="pb-kicker">
                DIGITAL PERSONAL BRAND
              </span>

              <h2>
                ONE IDENTITY.
                <br />
                EVERY <em>PLATFORM.</em>
              </h2>

              <p>
                A strong personal brand should feel recognizable across your
                website, LinkedIn profile, social presence, presentation
                assets and every place your audience encounters you.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div
              className="pb-digital-image"
              role="img"
              aria-label="Consistent personal brand across website social media and professional profiles"
            />
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="pb-process">
        <div className="pb-container">
          <Reveal>
            <div className="pb-section-head">
              <span className="pb-kicker">
                OUR PERSONAL BRANDING PROCESS
              </span>

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

      {/* RELATED / INTERNAL LINKS */}
      <section className="pb-related">
        <div className="pb-container">
          <Reveal>
            <div className="pb-section-head">
              <span className="pb-kicker">
                EXPLORE MORE
              </span>

              <h2>
                BUILD YOUR
                <br />
                <em>COMPLETE PRESENCE.</em>
              </h2>
            </div>
          </Reveal>

          <div className="pb-related-grid">

            <Link
              href="/services/website"
              className="pb-related-link"
            >
              <span>01</span>

              <div>
                <h3>Personal Website</h3>

                <p>
                  Build a professional website that presents your story,
                  work, experience and contact details clearly.
                </p>
              </div>

              <b>↗</b>
            </Link>

            <Link
              href="/services/ui-ux"
              className="pb-related-link"
            >
              <span>02</span>

              <div>
                <h3>UI / UX Design</h3>

                <p>
                  Create a polished digital experience around your personal
                  website and professional presence.
                </p>
              </div>

              <b>↗</b>
            </Link>

            <Link
              href="/services/corporate-branding"
              className="pb-related-link"
            >
              <span>03</span>

              <div>
                <h3>Corporate Branding</h3>

                <p>
                  Explore full business branding if you are also building a
                  company, startup or organization.
                </p>
              </div>

              <b>↗</b>
            </Link>

            <Link
              href="/contact"
              className="pb-related-link"
            >
              <span>04</span>

              <div>
                <h3>Start Your Personal Brand</h3>

                <p>
                  Tell us about your goals, work and the professional image
                  you want to build.
                </p>
              </div>

              <b>↗</b>
            </Link>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-cta">
        <div className="pb-container">
          <Reveal>
            <span className="pb-kicker">
              READY TO SHOW UP DIFFERENTLY?
            </span>

            <h2>
              BUILD A BRAND
              <br />
              THAT FEELS
              <br />
              <em>LIKE YOU.</em>
            </h2>

            <Link href="/contact" className="pb-cta-link">
              START A PERSONAL BRANDING PROJECT <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  );
}