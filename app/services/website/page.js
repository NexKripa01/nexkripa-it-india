import Link from "next/link";
import Reveal from "@/components/Reveal";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata = {
  title: "Web Development Services in Mumbai",

  description:
    "NexKripa IT INDIA provides modern, responsive and performance-focused web development services in Mumbai and across India for startups, professionals and growing businesses.",

  keywords: [
    "Web Development Services Mumbai",
    "Website Development Company Mumbai",
    "Web Development Company India",
    "Responsive Website Development",
    "Business Website Development",
    "Startup Website Development",
    "Next.js Website Development",
    "React Website Development",
    "SEO Friendly Website Development",
    "NexKripa IT INDIA",
    "NexKripa Web Development",
  ],

  alternates: {
    canonical: "/services/website",
  },

  openGraph: {
    title: "Web Development Services in Mumbai | NexKripa IT INDIA",

    description:
      "Modern, responsive and performance-focused website design and development for businesses, startups and professionals.",

    url: "/services/website",

    siteName: "NexKripa",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexKripa IT INDIA Web Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Web Development Services in Mumbai | NexKripa IT INDIA",

    description:
      "Responsive, modern and performance-focused websites for businesses and startups.",

    images: ["/og-image.png"],
  },
};

const features = [
  {
    number: "01",
    title: "CUSTOM DESIGN",
    text:
      "Original layouts shaped around your brand, audience and business goals — not a generic template.",
  },
  {
    number: "02",
    title: "RESPONSIVE BUILD",
    text:
      "A consistent experience across desktop, tablet and mobile with layouts built for real-world screens.",
  },
  {
    number: "03",
    title: "FAST PERFORMANCE",
    text:
      "Clean development, optimized assets and practical performance decisions to keep the experience smooth.",
  },
  {
    number: "04",
    title: "SEO-READY STRUCTURE",
    text:
      "Semantic page structure, metadata foundations and crawl-friendly implementation prepared for search growth.",
  },
  {
    number: "05",
    title: "CMS & CONTENT",
    text:
      "Flexible content workflows can be added so your team can update key website sections more easily.",
  },
  {
    number: "06",
    title: "SUPPORT & GROWTH",
    text:
      "After launch, the website can continue evolving through improvements, integrations and new features.",
  },
];

const process = [
  [
    "01",
    "DISCOVER",
    "We understand your business, audience, goals, content and the actions you want visitors to take.",
  ],
  [
    "02",
    "STRUCTURE",
    "We plan the pages, user flow, hierarchy and content direction before visual design begins.",
  ],
  [
    "03",
    "DESIGN",
    "We create a clear visual system with typography, spacing, imagery and interaction states.",
  ],
  [
    "04",
    "DEVELOP",
    "The approved direction is built into a responsive, production-ready website.",
  ],
  [
    "05",
    "TEST",
    "We review responsiveness, links, forms, core interactions and important performance details.",
  ],
  [
    "06",
    "LAUNCH",
    "The final website is deployed and prepared for future iteration, content and growth.",
  ],
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
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.nexkripa.in/",
          },
          {
            name: "Services",
            url: "https://www.nexkripa.in/services",
          },
          {
            name: "Web Development",
            url: "https://www.nexkripa.in/services/website",
          },
        ]}
      />

      <main className="web-service-page">

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="web-service-hero">
          <div
            className="web-service-hero-bg"
            aria-hidden="true"
          />

          <div
            className="web-service-hero-shade"
            aria-hidden="true"
          />

          <div className="web-service-hero-inner">
            <Reveal>
              <span className="web-service-kicker">
                WEB DEVELOPMENT SERVICES / MUMBAI
              </span>
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
                  NexKripa IT INDIA provides modern web development services
                  in Mumbai and across India for businesses, startups and
                  professionals. We build responsive websites that balance
                  brand identity, usability, performance and business goals.
                </p>

                <Link
                  href="/contact"
                  className="web-service-primary-btn"
                >
                  START A WEB PROJECT
                  <span>↗</span>
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="web-service-scroll-cue">
            <span>SCROLL</span>
            <i />
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}
        <section className="web-service-intro">
          <div className="web-service-container">
            <Reveal>
              <span className="web-service-kicker">
                WEBSITE DESIGN & DEVELOPMENT
              </span>
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
                    Your website is often the first place where a potential
                    customer decides whether your business feels credible,
                    relevant and worth exploring.
                  </p>
                </Reveal>

                <Reveal delay={0.16}>
                  <p>
                    NexKripa IT INDIA combines website strategy, UI/UX design
                    and modern web development to create responsive digital
                    experiences that communicate clearly and guide visitors
                    toward meaningful actions.
                  </p>
                </Reveal>

                <Reveal delay={0.2}>
                  <p>
                    Our website development approach focuses on responsive
                    layouts, clear navigation, SEO-ready structure, performance
                    and scalable technology so businesses can continue growing
                    after launch.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            IMAGE FEATURE
        ===================================================== */}
        <section
          className="web-service-showcase"
          aria-label="Website design and development showcase"
        >
          <div
            className="web-service-showcase-image web-service-image-one"
            role="img"
            aria-label="Modern website design and development workspace by NexKripa IT INDIA"
          >
            <div className="web-service-image-number">
              01
            </div>
          </div>

          <div className="web-service-showcase-copy">
            <Reveal>
              <span className="web-service-kicker">
                DESIGN + DEVELOPMENT
              </span>

              <h2>
                FROM IDEA TO
                <br />
                <em>REAL EXPERIENCE.</em>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p>
                We focus on the complete website experience — how it looks,
                how information is organized, how quickly users understand the
                business and how naturally they move toward enquiries,
                purchases or other important actions.
              </p>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            FEATURES
        ===================================================== */}
        <section className="web-service-features">
          <div className="web-service-container">
            <Reveal>
              <div className="web-service-section-head">
                <span className="web-service-kicker">
                  WHAT YOU GET
                </span>

                <h2>
                  EVERYTHING YOUR
                  <br />
                  <em>WEBSITE NEEDS.</em>
                </h2>
              </div>
            </Reveal>

            <div className="web-service-feature-grid">
              {features.map((item, index) => (
                <Reveal
                  key={item.number}
                  delay={index * 0.045}
                >
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

        {/* =====================================================
            RESPONSIVE
        ===================================================== */}
        <section className="web-service-responsive-section">
          <div className="web-service-container web-service-responsive-grid">
            <div className="web-service-responsive-copy">
              <Reveal>
                <span className="web-service-kicker">
                  RESPONSIVE WEBSITE DEVELOPMENT
                </span>

                <h2>
                  ONE WEBSITE.
                  <br />
                  <em>EVERY SCREEN.</em>
                </h2>
              </Reveal>

              <Reveal delay={0.08}>
                <p>
                  Customers visit websites from phones, tablets and desktops.
                  We build responsive websites that adapt intentionally across
                  screen sizes instead of treating mobile as an afterthought.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div
                className="web-service-responsive-image"
                role="img"
                aria-label="Responsive website design displayed across desktop tablet and mobile devices"
              />
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}
        <section className="web-service-process">
          <div className="web-service-container">
            <Reveal>
              <div className="web-service-section-head">
                <span className="web-service-kicker">
                  OUR WEB DEVELOPMENT PROCESS
                </span>

                <h2>
                  CLEAR STEPS.
                  <br />
                  <em>BETTER OUTCOMES.</em>
                </h2>
              </div>
            </Reveal>

            <div className="web-service-process-list">
              {process.map(([number, title, text], index) => (
                <Reveal
                  key={number}
                  delay={index * 0.04}
                >
                  <article className="web-service-process-row">
                    <span className="web-service-process-number">
                      {number}
                    </span>

                    <h3>{title}</h3>

                    <p>{text}</p>

                    <span className="web-service-process-dot" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            TECHNOLOGY
        ===================================================== */}
        <section className="web-service-tech">
          <div className="web-service-container">
            <Reveal>
              <span className="web-service-kicker">
                WEB TECHNOLOGY
              </span>

              <h2>
                MODERN TOOLS.
                <br />
                <em>RIGHT FIT.</em>
              </h2>
            </Reveal>

            <div className="web-service-tech-list">
              {tech.map((item) => (
                <span key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            SEO / INTERNAL LINKS
        ===================================================== */}
        <section className="web-service-related">
          <div className="web-service-container">
            <Reveal>
              <div className="web-service-section-head">
                <span className="web-service-kicker">
                  EXPLORE MORE
                </span>

                <h2>
                  BUILD THE COMPLETE
                  <br />
                  <em>DIGITAL EXPERIENCE.</em>
                </h2>
              </div>
            </Reveal>

            <div className="web-service-related-grid">

              <Link
                href="/services/ui-ux"
                className="web-service-related-link"
              >
                <span>01</span>

                <div>
                  <h3>UI / UX Design</h3>

                  <p>
                    Explore user-focused interface and experience design
                    services.
                  </p>
                </div>

                <b>↗</b>
              </Link>

              <Link
                href="/services/e-commerce"
                className="web-service-related-link"
              >
                <span>02</span>

                <div>
                  <h3>E-Commerce Development</h3>

                  <p>
                    Build modern online stores designed for product discovery
                    and business growth.
                  </p>
                </div>

                <b>↗</b>
              </Link>

              <Link
                href="/portfolio"
                className="web-service-related-link"
              >
                <span>03</span>

                <div>
                  <h3>Our Portfolio</h3>

                  <p>
                    Explore websites and digital experiences created by
                    NexKripa IT INDIA.
                  </p>
                </div>

                <b>↗</b>
              </Link>

              <Link
                href="/contact"
                className="web-service-related-link"
              >
                <span>04</span>

                <div>
                  <h3>Start a Project</h3>

                  <p>
                    Tell us about your website idea, business requirements and
                    project goals.
                  </p>
                </div>

                <b>↗</b>
              </Link>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}