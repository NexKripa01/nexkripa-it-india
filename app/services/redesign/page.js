import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata = {
  title: "Website Redesign Services in Mumbai",

  description:
    "NexKripa provides website redesign services in Mumbai and across India for businesses that need a modern design, better UI/UX, improved mobile experience, faster performance and stronger conversions.",

  alternates: {
    canonical: "/services/redesign",
  },

  openGraph: {
    title: "Website Redesign Services in Mumbai | NexKripa",

    description:
      "Modern website redesign services focused on UI/UX, responsive design, performance, structure and business conversions.",

    url: "/services/redesign",

    siteName: "NexKripa",

    type: "website",

    images: [
      {
        url: "/services/redesign/website-redesign-before-after.png",
        width: 1200,
        height: 630,
        alt: "Website redesign before and after by NexKripa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Website Redesign Services in Mumbai | NexKripa",

    description:
      "Transform an outdated website into a modern, responsive and conversion-focused digital experience.",

    images: [
      "/services/redesign/website-redesign-before-after.png",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const capabilities = [
  [
    "01",
    "UI REDESIGN",
    "Refresh outdated layouts with modern typography, spacing, visual hierarchy and interface patterns.",
  ],

  [
    "02",
    "UX IMPROVEMENT",
    "Improve navigation, page structure and user journeys so visitors can understand and use the website more easily.",
  ],

  [
    "03",
    "MOBILE REDESIGN",
    "Rework layouts for smartphones and tablets so the experience feels intentional on every screen.",
  ],

  [
    "04",
    "PERFORMANCE",
    "Optimize images, layouts, components and development decisions to improve website loading and responsiveness.",
  ],

  [
    "05",
    "SEO STRUCTURE",
    "Improve technical page structure, metadata foundations, headings, internal links and crawl-friendly implementation.",
  ],

  [
    "06",
    "CONVERSION FLOW",
    "Strengthen calls-to-action, contact paths and important user journeys around your real business goals.",
  ],
];

const process = [
  [
    "01",
    "AUDIT",
    "We review the existing website, its structure, design, mobile experience, content and important business journeys.",
  ],

  [
    "02",
    "IDENTIFY",
    "We identify usability problems, outdated visual patterns, weak sections and opportunities for improvement.",
  ],

  [
    "03",
    "RESTRUCTURE",
    "We improve page hierarchy, navigation, content placement and user flows before redesigning the visual experience.",
  ],

  [
    "04",
    "REDESIGN",
    "The website receives a modern visual direction aligned with your brand, audience and business goals.",
  ],

  [
    "05",
    "DEVELOP",
    "The approved redesign is implemented as a responsive and production-ready digital experience.",
  ],

  [
    "06",
    "TEST & LAUNCH",
    "We review important screens, interactions, links, forms and responsive behavior before the redesigned website goes live.",
  ],
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  name: "Website Redesign Services",

  serviceType: "Website Redesign",

  url: "https://www.nexkripa.in/services/redesign",

  description:
    "Website redesign services for businesses that need improved UI/UX, responsive layouts, modern design, performance and conversion-focused digital experiences.",

  provider: {
    "@type": "Organization",
    name: "NexKripa",
    url: "https://www.nexkripa.in/",
  },

  areaServed: [
    {
      "@type": "City",
      name: "Mumbai",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],
};

export default function RedesignPage() {
  return (
    <>
      {/* =====================================================
          BREADCRUMB SCHEMA
      ===================================================== */}

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
            name: "Website Redesign",
            url: "https://www.nexkripa.in/services/redesign",
          },
        ]}
      />

      {/* =====================================================
          SERVICE SCHEMA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <main className="redesign-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="redesign-hero">

          <Image
            src="/services/redesign/website-redesign-workspace.png"
            alt="Professional website redesign and UI UX workspace by NexKripa"
            fill
            priority
            sizes="100vw"
            className="redesign-hero-image"
          />

          <div
            className="redesign-hero-overlay"
            aria-hidden="true"
          />

          <div className="redesign-container redesign-hero-inner">

            <Reveal>
              <span className="redesign-kicker">
                WEBSITE REDESIGN SERVICES / MUMBAI
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1>
                OLD WEBSITE.
                <span>NEW</span>
                <em>EXPERIENCE.</em>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="redesign-hero-bottom">

                <p>
                  NexKripa provides website redesign services in Mumbai and
                  across India for businesses that want to transform outdated,
                  confusing or underperforming websites into modern,
                  responsive and user-focused digital experiences.
                </p>

                <Link
                  href="/contact"
                  className="redesign-btn"
                >
                  REDESIGN MY WEBSITE
                  <span>↗</span>
                </Link>

              </div>
            </Reveal>

          </div>

        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="redesign-intro">

          <div className="redesign-container">

            <Reveal>
              <span className="redesign-kicker">
                WEBSITE REVAMP & MODERNIZATION
              </span>
            </Reveal>

            <div className="redesign-intro-grid">

              <Reveal delay={0.05}>
                <h2>
                  KEEP THE BUSINESS.
                  <br />
                  CHANGE THE
                  <em> EXPERIENCE.</em>
                </h2>
              </Reveal>

              <div className="redesign-intro-copy">

                <Reveal delay={0.1}>
                  <p className="redesign-lead">
                    A website does not always need to be rebuilt from the
                    beginning. Sometimes the foundation is useful, but the
                    experience around it needs to evolve.
                  </p>
                </Reveal>

                <Reveal delay={0.16}>
                  <p>
                    We redesign existing websites by improving visual identity,
                    content hierarchy, navigation, responsive layouts and
                    important conversion paths.
                  </p>
                </Reveal>

                <Reveal delay={0.2}>
                  <p>
                    The goal is not simply to make the website look newer.
                    The redesign should make your business easier to understand,
                    easier to trust and easier to interact with.
                  </p>
                </Reveal>

              </div>
            </div>

          </div>

        </section>

        {/* =====================================================
            BEFORE / AFTER
        ===================================================== */}

        <section className="redesign-showcase">

          <div className="redesign-showcase-image-wrap">

            <Image
              src="/services/redesign/website-redesign-before-after.png"
              alt="Website redesign before and after comparison showing a modern improved interface"
              width={1400}
              height={900}
              sizes="(max-width: 768px) 100vw, 55vw"
              className="redesign-showcase-image"
            />

            <span className="redesign-image-label">
              BEFORE → AFTER
            </span>

          </div>

          <div className="redesign-showcase-copy">

            <Reveal>
              <span className="redesign-kicker">
                WEBSITE TRANSFORMATION
              </span>

              <h2>
                MORE THAN A
                <br />
                <em>VISUAL REFRESH.</em>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p>
                A successful redesign improves how visitors understand your
                company, discover services, navigate pages and move toward
                enquiries or other important actions.
              </p>
            </Reveal>

          </div>

        </section>

        {/* =====================================================
            CAPABILITIES
        ===================================================== */}

        <section className="redesign-capabilities">

          <div className="redesign-container">

            <Reveal>
              <div className="redesign-section-head">

                <span className="redesign-kicker">
                  WHAT WE IMPROVE
                </span>

                <h2>
                  REBUILD THE
                  <br />
                  <em>EXPERIENCE.</em>
                </h2>

              </div>
            </Reveal>

            <div className="redesign-grid">

              {capabilities.map(
                ([number, title, text], index) => (
                  <Reveal
                    key={number}
                    delay={index * 0.045}
                  >

                    <article className="redesign-card">

                      <span>{number}</span>

                      <div className="redesign-line" />

                      <h3>{title}</h3>

                      <p>{text}</p>

                    </article>

                  </Reveal>
                )
              )}

            </div>

          </div>

        </section>

        {/* =====================================================
            RESPONSIVE REDESIGN
        ===================================================== */}

        <section className="redesign-responsive">

          <div className="redesign-container redesign-responsive-grid">

            <div className="redesign-responsive-copy">

              <Reveal>

                <span className="redesign-kicker">
                  RESPONSIVE REDESIGN
                </span>

                <h2>
                  LOOK MODERN.
                  <br />
                  WORK ON
                  <em> EVERY SCREEN.</em>
                </h2>

                <p>
                  An old desktop-first website can lose clarity when opened
                  on smaller screens. We redesign layouts intentionally for
                  mobile, tablet and desktop so content and actions remain
                  easy to use everywhere.
                </p>

              </Reveal>

            </div>

            <Reveal delay={0.08}>

              <div className="redesign-responsive-image-wrap">

                <Image
                  src="/services/redesign/website-redesign-responsive.png"
                  alt="Responsive website redesign displayed across desktop tablet and mobile devices"
                  width={1100}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="redesign-responsive-image"
                />

              </div>

            </Reveal>

          </div>

        </section>

        {/* =====================================================
            WHEN DO YOU NEED REDESIGN
        ===================================================== */}

        <section className="redesign-signs">

          <div className="redesign-container">

            <Reveal>

              <span className="redesign-kicker">
                WHEN SHOULD YOU REDESIGN?
              </span>

              <h2>
                YOUR WEBSITE MAY
                <br />
                BE READY FOR A
                <em> CHANGE.</em>
              </h2>

            </Reveal>

            <div className="redesign-signs-grid">

              <article>
                <span>01</span>
                <h3>OUTDATED DESIGN</h3>
                <p>
                  The website no longer represents the quality or direction
                  of your current business.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>POOR MOBILE EXPERIENCE</h3>
                <p>
                  Pages feel difficult to read, navigate or use on smartphones.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>CONFUSING NAVIGATION</h3>
                <p>
                  Visitors struggle to understand where information or
                  important services are located.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>WEAK CONVERSIONS</h3>
                <p>
                  Visitors arrive but important actions such as enquiries
                  or contact requests remain unclear.
                </p>
              </article>

              <article>
                <span>05</span>
                <h3>SLOW EXPERIENCE</h3>
                <p>
                  Heavy assets, outdated implementation or poor structure
                  make the website feel slow.
                </p>
              </article>

              <article>
                <span>06</span>
                <h3>BRAND HAS CHANGED</h3>
                <p>
                  Your business identity has evolved but your existing
                  website still represents the old brand.
                </p>
              </article>

            </div>

          </div>

        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section className="redesign-process">

          <div className="redesign-container">

            <Reveal>

              <div className="redesign-section-head">

                <span className="redesign-kicker">
                  OUR WEBSITE REDESIGN PROCESS
                </span>

                <h2>
                  UNDERSTAND THE OLD.
                  <br />
                  BUILD THE
                  <em> BETTER.</em>
                </h2>

              </div>

            </Reveal>

            <div className="redesign-process-list">

              {process.map(
                ([number, title, text], index) => (
                  <Reveal
                    key={number}
                    delay={index * 0.04}
                  >

                    <article className="redesign-process-row">

                      <span className="redesign-num">
                        {number}
                      </span>

                      <h3>{title}</h3>

                      <p>{text}</p>

                      <i />

                    </article>

                  </Reveal>
                )
              )}

            </div>

          </div>

        </section>

        {/* =====================================================
            RELATED SERVICES
        ===================================================== */}

        <section className="redesign-related">

          <div className="redesign-container">

            <Reveal>

              <div className="redesign-section-head">

                <span className="redesign-kicker">
                  EXPLORE MORE
                </span>

                <h2>
                  COMPLETE YOUR
                  <br />
                  <em>DIGITAL UPGRADE.</em>
                </h2>

              </div>

            </Reveal>

            <div className="redesign-related-grid">

              <Link
                href="/services/website"
                className="redesign-related-link"
              >
                <span>01</span>

                <div>
                  <h3>Web Development</h3>

                  <p>
                    Need more than a redesign? Build a complete modern
                    website from the ground up.
                  </p>
                </div>

                <b>↗</b>
              </Link>

              <Link
                href="/services/ui-ux"
                className="redesign-related-link"
              >
                <span>02</span>

                <div>
                  <h3>UI / UX Design</h3>

                  <p>
                    Improve user flows, interfaces and the overall
                    experience of your digital product.
                  </p>
                </div>

                <b>↗</b>
              </Link>

              <Link
                href="/services/corporate-branding"
                className="redesign-related-link"
              >
                <span>03</span>

                <div>
                  <h3>Corporate Branding</h3>

                  <p>
                    Refresh your website alongside a stronger business
                    identity and visual system.
                  </p>
                </div>

                <b>↗</b>
              </Link>

              <Link
                href="/contact"
                className="redesign-related-link"
              >
                <span>04</span>

                <div>
                  <h3>Get a Website Review</h3>

                  <p>
                    Share your existing website and tell us what you
                    want to improve.
                  </p>
                </div>

                <b>↗</b>
              </Link>

            </div>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="redesign-cta">

          <div className="redesign-container">

            <Reveal>

              <span className="redesign-kicker">
                ALREADY HAVE A WEBSITE?
              </span>

              <h2>
                DON&apos;T START
                <br />
                FROM ZERO.
                <br />
                <em>MAKE IT BETTER.</em>
              </h2>

              <p>
                Send us your current website and tell us what feels outdated,
                difficult or ineffective. We&apos;ll help you identify what
                should change.
              </p>

              <div className="redesign-cta-actions">

                <Link
                  href="/contact"
                  className="redesign-cta-primary"
                >
                  REDESIGN MY WEBSITE
                  <span>↗</span>
                </Link>

                <Link
                  href="/portfolio"
                  className="redesign-cta-secondary"
                >
                  VIEW OUR WORK
                  <span>↗</span>
                </Link>

              </div>

            </Reveal>

          </div>

        </section>

      </main>
    </>
  );
}