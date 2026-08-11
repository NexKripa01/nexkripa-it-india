import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "UI/UX Design Services in Mumbai",

  description:
    "NexKripa IT INDIA provides UI/UX design services in Mumbai and across India for websites, dashboards, apps and digital products with a focus on usability, clarity and responsive experiences.",

  keywords: [
    "UI UX Design Services Mumbai",
    "UI UX Design Company Mumbai",
    "UI UX Designer India",
    "Website UI UX Design",
    "Dashboard UI UX Design",
    "Product Design Services India",
    "Responsive UI Design",
    "UX Design Services Mumbai",
    "Interface Design Services",
    "User Experience Design India",
    "NexKripa UI UX",
    "NexKripa IT INDIA",
  ],

  alternates: {
    canonical: "/services/ui-ux",
  },

  openGraph: {
    title: "UI/UX Design Services in Mumbai | NexKripa IT INDIA",

    description:
      "User-focused UI/UX design for websites, dashboards and digital products with responsive, clear and modern interfaces.",

    url: "/services/ui-ux",

    siteName: "NexKripa",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexKripa IT INDIA UI UX Design Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "UI/UX Design Services in Mumbai | NexKripa IT INDIA",

    description:
      "Modern UI/UX design for websites, dashboards and digital products.",

    images: ["/og-image.png"],
  },
};

const deliverables = [
  [
    "01",
    "USER FLOW",
    "We map the journey users take so the experience feels clear from first action to completion.",
  ],
  [
    "02",
    "WIREFRAMES",
    "Low-fidelity layouts help us test structure, hierarchy and screen logic before polishing visuals.",
  ],
  [
    "03",
    "UI DESIGN",
    "We create clean, modern interfaces with strong typography, spacing, color and visual rhythm.",
  ],
  [
    "04",
    "DESIGN SYSTEM",
    "Reusable components, states and rules help keep the product consistent as it grows.",
  ],
  [
    "05",
    "PROTOTYPING",
    "Interactive prototypes help validate navigation and important interactions before development.",
  ],
  [
    "06",
    "RESPONSIVE UX",
    "Layouts are planned for desktop, tablet and mobile instead of shrinking one screen everywhere.",
  ],
];

const process = [
  [
    "01",
    "UNDERSTAND",
    "We learn the product goal, users, pain points, features and what success should look like.",
  ],
  [
    "02",
    "MAP",
    "We organize content, flows and screen relationships before committing to visual decisions.",
  ],
  [
    "03",
    "WIREFRAME",
    "We create early layouts to test hierarchy, usability and important user actions.",
  ],
  [
    "04",
    "DESIGN",
    "The approved direction becomes a polished interface with a cohesive visual system.",
  ],
  [
    "05",
    "PROTOTYPE",
    "Key screens and interactions are connected so the product can be reviewed more realistically.",
  ],
  [
    "06",
    "HANDOFF",
    "We prepare organized designs and specifications for a smoother transition into development.",
  ],
];

export default function UIUXPage() {
  return (
    <main className="ux-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="ux-hero">
        <div
          className="ux-hero-bg"
          aria-hidden="true"
        />

        <div
          className="ux-hero-overlay"
          aria-hidden="true"
        />

        <div className="ux-container ux-hero-inner">
          <Reveal>
            <span className="ux-kicker">
              UI/UX DESIGN SERVICES / MUMBAI
            </span>
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
                NexKripa IT INDIA provides UI/UX design services in Mumbai
                and across India for websites, dashboards, apps and digital
                products. We create interfaces that are visually clear,
                responsive and easy to use.
              </p>

              <Link
                href="/contact"
                className="ux-btn"
              >
                START A UI/UX PROJECT
                <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="ux-intro">
        <div className="ux-container">
          <Reveal>
            <span className="ux-kicker">
              USER EXPERIENCE DESIGN
            </span>
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
                  Good UI attracts attention. Good UX helps people understand
                  what to do next without making the experience feel
                  complicated.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <p>
                  We combine information architecture, user flows, interface
                  design and interaction thinking so every screen supports
                  both the user and the business goal.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p>
                  From business websites and SaaS dashboards to digital
                  products, our UI/UX process focuses on usability,
                  responsive layouts, visual consistency and clear actions.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SHOWCASE
      ===================================================== */}
      <section
        className="ux-showcase"
        aria-label="UI UX interface design showcase"
      >
        <div
          className="ux-showcase-image"
          role="img"
          aria-label="Modern mobile user interface and user experience design by NexKripa IT INDIA"
        />

        <div className="ux-showcase-copy">
          <Reveal>
            <span className="ux-kicker">
              INTERFACE DESIGN
            </span>

            <h2>
              EVERY SCREEN
              <br />
              HAS A <em>PURPOSE.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p>
              We make visual decisions around usability first — what users
              need to notice, understand and act on — then shape typography,
              spacing, hierarchy and interaction around that flow.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          DELIVERABLES
      ===================================================== */}
      <section className="ux-deliverables">
        <div className="ux-container">
          <Reveal>
            <div className="ux-section-head">
              <span className="ux-kicker">
                UI/UX DESIGN DELIVERABLES
              </span>

              <h2>
                FROM FLOW
                <br />
                TO <em>FINAL UI.</em>
              </h2>
            </div>
          </Reveal>

          <div className="ux-grid">
            {deliverables.map(([number, title, text], index) => (
              <Reveal
                key={number}
                delay={index * 0.045}
              >
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

      {/* =====================================================
          DASHBOARD / PRODUCT DESIGN
      ===================================================== */}
      <section className="ux-dashboard">
        <div className="ux-container ux-dashboard-grid">
          <Reveal>
            <div className="ux-dashboard-copy">
              <span className="ux-kicker">
                PRODUCT & DASHBOARD DESIGN
              </span>

              <h2>
                COMPLEX DATA.
                <br />
                <em>CLEAR INTERFACE.</em>
              </h2>

              <p>
                Dashboards and product interfaces can contain a lot of
                information. We organize content into clear priorities so
                users can scan, compare, understand and act efficiently.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div
              className="ux-dashboard-image"
              role="img"
              aria-label="Dashboard UI UX design created by NexKripa IT INDIA"
            />
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="ux-process">
        <div className="ux-container">
          <Reveal>
            <div className="ux-section-head">
              <span className="ux-kicker">
                OUR UI/UX PROCESS
              </span>

              <h2>
                THINK FIRST.
                <br />
                <em>DESIGN SECOND.</em>
              </h2>
            </div>
          </Reveal>

          <div className="ux-process-list">
            {process.map(([number, title, text], index) => (
              <Reveal
                key={number}
                delay={index * 0.04}
              >
                <article className="ux-process-row">
                  <span className="ux-num">
                    {number}
                  </span>

                  <h3>{title}</h3>

                  <p>{text}</p>

                  <i />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERNAL LINKS / RELATED SERVICES
      ===================================================== */}
      <section className="ux-related">
        <div className="ux-container">
          <Reveal>
            <div className="ux-section-head">
              <span className="ux-kicker">
                EXPLORE MORE
              </span>

              <h2>
                DESIGN CONNECTED
                <br />
                TO <em>TECHNOLOGY.</em>
              </h2>
            </div>
          </Reveal>

          <div className="ux-related-grid">

            <Link
              href="/services/website"
              className="ux-related-link"
            >
              <span>01</span>

              <div>
                <h3>Web Development</h3>

                <p>
                  Turn your UI/UX direction into a responsive,
                  production-ready website.
                </p>
              </div>

              <b>↗</b>
            </Link>

            <Link
              href="/services/crm"
              className="ux-related-link"
            >
              <span>02</span>

              <div>
                <h3>CRM Development</h3>

                <p>
                  Build clear business interfaces and customer management
                  systems around real workflows.
                </p>
              </div>

              <b>↗</b>
            </Link>

            <Link
              href="/portfolio"
              className="ux-related-link"
            >
              <span>03</span>

              <div>
                <h3>Our Portfolio</h3>

                <p>
                  Explore digital experiences and projects created by
                  NexKripa IT INDIA.
                </p>
              </div>

              <b>↗</b>
            </Link>

            <Link
              href="/contact"
              className="ux-related-link"
            >
              <span>04</span>

              <div>
                <h3>Start a UI/UX Project</h3>

                <p>
                  Tell us about your website, dashboard, app or product
                  design requirements.
                </p>
              </div>

              <b>↗</b>
            </Link>

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="ux-cta">
        <div className="ux-container">
          <Reveal>
            <span className="ux-kicker">
              HAVE A PRODUCT IDEA?
            </span>

            <h2>
              LET&apos;S MAKE IT
              <br />
              SIMPLE TO
              <br />
              <em>USE.</em>
            </h2>

            <Link
              href="/contact"
              className="ux-cta-link"
            >
              START A PROJECT
              <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  );
}