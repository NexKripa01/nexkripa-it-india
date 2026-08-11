import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "E-Commerce Development Services in Mumbai",

  description:
    "NexKripa IT INDIA provides e-commerce development services in Mumbai and across India for online stores, product catalogs, checkout flows, payment integrations, order management and store dashboards.",

  keywords: [
    "E-Commerce Development Services Mumbai",
    "E-Commerce Website Development Mumbai",
    "Online Store Development India",
    "E-Commerce Website Company Mumbai",
    "Online Store Development",
    "Product Catalog Development",
    "Payment Gateway Integration",
    "Order Management System",
    "E-Commerce Dashboard Development",
    "Responsive E-Commerce Website",
    "NexKripa E-Commerce",
    "NexKripa IT INDIA",
  ],

  alternates: {
    canonical: "/services/e-commerce",
  },

  openGraph: {
    title: "E-Commerce Development Services in Mumbai | NexKripa IT INDIA",
    description:
      "Modern online stores with product catalogs, checkout flows, payment integrations, order management and responsive shopping experiences.",
    url: "/services/e-commerce",
    siteName: "NexKripa",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexKripa IT INDIA E-Commerce Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Development Services in Mumbai | NexKripa IT INDIA",
    description:
      "Responsive e-commerce websites and online stores for modern businesses.",
    images: ["/og-image.png"],
  },
};

const capabilities = [
  [
    "01",
    "ONLINE STORE",
    "Build a clean storefront that presents products clearly and makes browsing simple across devices.",
  ],
  [
    "02",
    "PRODUCT CATALOG",
    "Structure categories, product details, variants, pricing and inventory in a way that is easy to manage.",
  ],
  [
    "03",
    "CART & CHECKOUT",
    "Create a smooth purchase flow from product selection to cart review and checkout.",
  ],
  [
    "04",
    "PAYMENT INTEGRATION",
    "Connect suitable payment gateways and checkout options based on your business requirements.",
  ],
  [
    "05",
    "ORDER MANAGEMENT",
    "Give your team a practical view of orders, customer details and important fulfillment information.",
  ],
  [
    "06",
    "STORE ANALYTICS",
    "Surface useful sales, order and product information through focused dashboards and reporting views.",
  ],
];

const process = [
  [
    "01",
    "DISCOVER",
    "We understand your products, customers, delivery model, payment needs and the goals of the online store.",
  ],
  [
    "02",
    "STRUCTURE",
    "We organize categories, product information, navigation and the complete shopping journey.",
  ],
  [
    "03",
    "DESIGN",
    "We create a conversion-focused interface that keeps products clear and purchase actions easy to find.",
  ],
  [
    "04",
    "DEVELOP",
    "The storefront, catalog, cart, checkout and required integrations are built into a responsive experience.",
  ],
  [
    "05",
    "TEST",
    "We review product flows, cart behavior, forms, checkout paths, responsive screens and important interactions.",
  ],
  [
    "06",
    "LAUNCH",
    "The store is prepared for launch with room to add products, features, integrations and future improvements.",
  ],
];

export default function EcommercePage() {
  return (
    <main className="eco-page">

      {/* HERO */}
      <section className="eco-hero">
        <div className="eco-hero-bg" aria-hidden="true" />
        <div className="eco-hero-overlay" aria-hidden="true" />

        <div className="eco-container eco-hero-inner">
          <Reveal>
            <span className="eco-kicker">
              E-COMMERCE DEVELOPMENT / MUMBAI
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1>
              TURN CLICKS
              <span>INTO</span>
              <em>ORDERS.</em>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="eco-hero-bottom">
              <p>
                NexKripa IT INDIA provides e-commerce development services in
                Mumbai and across India for businesses that want to sell
                products online through modern, responsive and easy-to-manage
                stores.
              </p>

              <Link href="/contact" className="eco-btn">
                BUILD MY STORE <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="eco-intro">
        <div className="eco-container">
          <Reveal>
            <span className="eco-kicker">
              E-COMMERCE WEBSITE DEVELOPMENT
            </span>
          </Reveal>

          <div className="eco-intro-grid">
            <Reveal delay={0.05}>
              <h2>
                EASY TO BROWSE.
                <br />
                <em>EASY TO BUY.</em>
              </h2>
            </Reveal>

            <div className="eco-intro-copy">
              <Reveal delay={0.1}>
                <p className="eco-lead">
                  A good e-commerce experience removes unnecessary friction
                  between discovering a product and completing a purchase.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <p>
                  We focus on product clarity, navigation, responsive layouts,
                  cart and checkout experiences so customers can move through
                  the store naturally across mobile, tablet and desktop.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p>
                  Our e-commerce solutions can include product catalogs,
                  categories, variants, payment integrations, order management
                  and store dashboards based on your business requirements.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section
        className="eco-showcase"
        aria-label="E-commerce storefront design showcase"
      >
        <div
          className="eco-showcase-image"
          role="img"
          aria-label="Modern responsive e-commerce website storefront designed by NexKripa IT INDIA"
        />

        <div className="eco-showcase-copy">
          <Reveal>
            <span className="eco-kicker">
              ONLINE STOREFRONT EXPERIENCE
            </span>

            <h2>
              PRODUCTS FIRST.
              <br />
              <em>FRICTION LAST.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p>
              Product pages should answer important questions quickly,
              present products clearly on every screen and make the next
              purchase action easy to understand.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="eco-capabilities">
        <div className="eco-container">
          <Reveal>
            <div className="eco-section-head">
              <span className="eco-kicker">
                E-COMMERCE FEATURES
              </span>

              <h2>
                EVERYTHING FOR
                <br />
                <em>ONLINE SELLING.</em>
              </h2>
            </div>
          </Reveal>

          <div className="eco-grid">
            {capabilities.map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.045}>
                <article className="eco-card">
                  <span>{number}</span>

                  <div className="eco-line" />

                  <h3>{title}</h3>

                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STORE OPERATIONS */}
      <section className="eco-dashboard">
        <div className="eco-container eco-dashboard-grid">
          <Reveal>
            <div className="eco-dashboard-copy">
              <span className="eco-kicker">
                ORDER & STORE MANAGEMENT
              </span>

              <h2>
                SELL ON THE FRONT.
                <br />
                MANAGE ON THE <em>BACK.</em>
              </h2>

              <p>
                A practical e-commerce dashboard keeps orders, products,
                customers and important sales information visible so your team
                can manage everyday store operations more efficiently.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div
              className="eco-dashboard-image"
              role="img"
              aria-label="E-commerce order management and sales dashboard"
            />
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="eco-process">
        <div className="eco-container">
          <Reveal>
            <div className="eco-section-head">
              <span className="eco-kicker">
                OUR E-COMMERCE DEVELOPMENT PROCESS
              </span>

              <h2>
                PLAN THE STORE.
                <br />
                <em>BUILD THE JOURNEY.</em>
              </h2>
            </div>
          </Reveal>

          <div className="eco-process-list">
            {process.map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.04}>
                <article className="eco-process-row">
                  <span className="eco-num">{number}</span>

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
      <section className="eco-related">
        <div className="eco-container">
          <Reveal>
            <div className="eco-section-head">
              <span className="eco-kicker">
                EXPLORE MORE
              </span>

              <h2>
                BUILD MORE THAN
                <br />
                <em>AN ONLINE STORE.</em>
              </h2>
            </div>
          </Reveal>

          <div className="eco-related-grid">

            <Link
              href="/services/website"
              className="eco-related-link"
            >
              <span>01</span>

              <div>
                <h3>Web Development</h3>

                <p>
                  Explore modern website development for business websites,
                  platforms and custom digital experiences.
                </p>
              </div>

              <b>↗</b>
            </Link>

            <Link
              href="/services/ui-ux"
              className="eco-related-link"
            >
              <span>02</span>

              <div>
                <h3>UI / UX Design</h3>

                <p>
                  Create clear product pages, navigation and shopping
                  experiences designed around real customers.
                </p>
              </div>

              <b>↗</b>
            </Link>

            <Link
              href="/services/ai-automation"
              className="eco-related-link"
            >
              <span>03</span>

              <div>
                <h3>AI Automation</h3>

                <p>
                  Automate repetitive store operations, reporting and
                  connected business workflows.
                </p>
              </div>

              <b>↗</b>
            </Link>

            <Link
              href="/contact"
              className="eco-related-link"
            >
              <span>04</span>

              <div>
                <h3>Start an E-Commerce Project</h3>

                <p>
                  Tell us about your products, customers and the online store
                  you want to build.
                </p>
              </div>

              <b>↗</b>
            </Link>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="eco-cta">
        <div className="eco-container">
          <Reveal>
            <span className="eco-kicker">
              READY TO START SELLING ONLINE?
            </span>

            <h2>
              BUILD A STORE
              <br />
              PEOPLE WANT
              <br />
              TO <em>SHOP.</em>
            </h2>

            <Link href="/contact" className="eco-cta-link">
              START AN E-COMMERCE PROJECT <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  );
}