import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "E-Commerce Development",
  description:
    "E-commerce development services by NexKripa IT INDIA for online stores, product catalogs, checkout flows, dashboards and integrations.",

  alternates: {
    canonical: "/services/e-commerce",
  },
};

const capabilities = [
  ["01", "ONLINE STORE", "Build a clean storefront that presents products clearly and makes browsing simple across devices."],
  ["02", "PRODUCT CATALOG", "Structure categories, product details, variants, pricing and inventory in a way that is easy to manage."],
  ["03", "CART & CHECKOUT", "Create a smooth purchase flow from product selection to cart review and checkout."],
  ["04", "PAYMENT INTEGRATION", "Connect suitable payment gateways and checkout options based on your business requirements."],
  ["05", "ORDER MANAGEMENT", "Give your team a practical view of orders, customer details and important fulfillment information."],
  ["06", "STORE ANALYTICS", "Surface useful sales, order and product information through focused dashboards and reporting views."],
];

const process = [
  ["01", "DISCOVER", "We understand your products, customers, delivery model, payment needs and the goals of the online store."],
  ["02", "STRUCTURE", "We organize categories, product information, navigation and the complete shopping journey."],
  ["03", "DESIGN", "We create a conversion-focused interface that keeps products clear and purchase actions easy to find."],
  ["04", "DEVELOP", "The storefront, catalog, cart, checkout and required integrations are built into a responsive experience."],
  ["05", "TEST", "We review product flows, cart behavior, forms, checkout paths, responsive screens and important interactions."],
  ["06", "LAUNCH", "The store is prepared for launch with room to add products, features, integrations and future improvements."],
];

export default function EcommercePage() {
  return (
    <main className="eco-page">
      <section className="eco-hero">
        <div className="eco-hero-bg" />
        <div className="eco-hero-overlay" />

        <div className="eco-container eco-hero-inner">
          <Reveal>
            <span className="eco-kicker">SERVICES / E-COMMERCE</span>
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
                We design and develop online stores that make products easy to
                explore, purchases easy to complete and day-to-day store
                operations easier to manage.
              </p>

              <Link href="/contact" className="eco-btn">
                BUILD MY STORE <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="eco-intro">
        <div className="eco-container">
          <Reveal>
            <span className="eco-kicker">COMMERCE WITHOUT FRICTION</span>
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
                  A good e-commerce experience removes hesitation between
                  discovering a product and completing the purchase.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <p>
                  We focus on product clarity, navigation, responsive layouts and
                  a straightforward buying journey so the store feels simple for
                  customers and practical for the team managing it.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="eco-showcase">
        <div className="eco-showcase-image" />

        <div className="eco-showcase-copy">
          <Reveal>
            <span className="eco-kicker">STOREFRONT EXPERIENCE</span>
            <h2>
              PRODUCTS FIRST.
              <br />
              <em>FRICTION LAST.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p>
              Product pages should answer important questions quickly, look good
              on every screen and make the next purchase action obvious.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="eco-capabilities">
        <div className="eco-container">
          <Reveal>
            <div className="eco-section-head">
              <span className="eco-kicker">WHAT WE BUILD</span>
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

      <section className="eco-dashboard">
        <div className="eco-container eco-dashboard-grid">
          <Reveal>
            <div className="eco-dashboard-copy">
              <span className="eco-kicker">STORE OPERATIONS</span>
              <h2>
                SELL ON THE FRONT.
                <br />
                MANAGE ON THE <em>BACK.</em>
              </h2>

              <p>
                A useful store dashboard keeps orders, products and important
                sales information visible so your team can understand what is
                happening without jumping between disconnected tools.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="eco-dashboard-image" />
          </Reveal>
        </div>
      </section>

      <section className="eco-process">
        <div className="eco-container">
          <Reveal>
            <div className="eco-section-head">
              <span className="eco-kicker">OUR PROCESS</span>
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

      <section className="eco-cta">
        <div className="eco-container">
          <Reveal>
            <span className="eco-kicker">READY TO START SELLING ONLINE?</span>

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