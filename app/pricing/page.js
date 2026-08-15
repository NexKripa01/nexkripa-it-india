"use client";

import { useEffect, useRef } from "react";
import {
  Rocket,
  MonitorCog,
  ShoppingCart,
  ShieldCheck,
  Zap,
  Headphones,
  Check,
  ArrowUpRight,
  Code2,
  PenTool,
  UserRound,
  PanelsTopLeft,
  Sparkles,
  CircleHelp,
  ChevronRight,
  MoveLeft,
  MoveRight,
} from "lucide-react";

const plans = [
  {
    name: "Starter Plan",
    subtitle: "Perfect for small businesses and local brands.",
    price: "₹4,999+",
    icon: Rocket,
    features: [
      "Up to 2 Pages",
      "Responsive Design",
      "Contact Form",
      "Basic SEO Setup",
      "Social Media Integration",
      "1 Round of Revisions",
      "Delivery in 7–10 Days",
    ],
    href: "/contact",
  },
  {
    name: "Business Plan",
    subtitle: "Ideal for growing businesses who want more impact.",
    price: "₹9,999+",
    icon: MonitorCog,
    popular: true,
    features: [
      "Up to 5 Pages",
      "Custom Design & Sections",
      "Lead / Inquiry Forms",
      "Basic Integrations",
      "On-Page SEO",
      "2 Rounds of Revisions",
      "Delivery in 10–20 Days",
    ],
    href: "/contact",
  },
  {
    name: "E-Commerce Plan",
    subtitle: "Everything you need to start selling online.",
    price: "₹19,999+",
    icon: ShoppingCart,
    features: [
      "Up to 20 Products",
      "Product & Category Management",
      "Cart & Checkout",
      "Payment Gateway Integration",
      "Order Management (Basic)",
      "Stock Management (Basic)",
      "Delivery in 20–30 Days",
    ],
    href: "/contact",
  },
];

const otherServices = [
  {
    name: "Website Redesign",
    description: "Modernize your existing website with a fresh look.",
    price: "₹4,999+",
    icon: PenTool,
  },
  {
    name: "Personal Branding",
    description: "Build your personal brand with a professional website.",
    price: "₹6,999+",
    icon: UserRound,
  },
  {
    name: "UI / UX Design",
    description: "Clean, user-friendly and conversion focused designs.",
    price: "₹4,999+",
    icon: PanelsTopLeft,
  },
];

export default function PricingPage() {
  const plansRef = useRef(null);

  useEffect(() => {
    const centerBusinessPlan = () => {
      if (window.innerWidth > 700) return;

      const container = plansRef.current;

      if (!container) return;

      const businessCard = container.children[1];

      if (!businessCard) return;

      const targetScroll =
        businessCard.offsetLeft -
        (container.clientWidth - businessCard.clientWidth) / 2;

      container.scrollTo({
        left: targetScroll,
        behavior: "auto",
      });
    };

    const timer = setTimeout(centerBusinessPlan, 120);

    window.addEventListener("resize", centerBusinessPlan);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", centerBusinessPlan);
    };
  }, []);

  return (
    <>
      <main className="pricing-page">
        <div className="pricing-container">

          {/* ================= HERO ================= */}

          <section className="pricing-hero">
            <h1>
              Pricing <span>Plans.</span>
            </h1>

            <p>
              Choose the perfect plan for your business.
              <br />
              Quality, performance and growth — all in one.
            </p>

            <div className="trust-row">
              <div>
                <ShieldCheck size={16} strokeWidth={2} />
                Secure & Reliable
              </div>

              <i />

              <div>
                <Zap size={16} strokeWidth={2} />
                Fast Delivery
              </div>

              <i />

              <div>
                <Headphones size={16} strokeWidth={2} />
                Premium Support
              </div>
            </div>
          </section>

          {/* ================= PRICING CARDS ================= */}

          <section
            className="plans-grid"
            ref={plansRef}
          >
            {plans.map((plan) => {
              const PlanIcon = plan.icon;

              return (
                <article
                  key={plan.name}
                  className={`plan-card ${
                    plan.popular ? "popular" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="popular-badge">
                      <Sparkles size={13} strokeWidth={2.2} />
                      MOST POPULAR
                    </div>
                  )}

                  <div className="plan-icon">
                    <PlanIcon
                      size={28}
                      strokeWidth={1.8}
                    />
                  </div>

                  <h2>{plan.name}</h2>

                  <p className="plan-subtitle">
                    {plan.subtitle}
                  </p>

                  <div className="card-divider" />

                  <div className="price">
                    {plan.price}
                  </div>

                  <span className="starting">
                    Starting From
                  </span>

                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <span className="check">
                          <Check
                            size={10}
                            strokeWidth={3}
                          />
                        </span>

                        <span>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.href}
                    className={`plan-button ${
                      plan.popular ? "filled" : ""
                    }`}
                  >
                    <span>GET STARTED</span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={2}
                    />
                  </a>
                </article>
              );
            })}
          </section>

          {/* ================= MOBILE SWIPE HINT ================= */}

          <div className="swipe-hint">
            <MoveLeft size={14} strokeWidth={1.8} />

            SWIPE TO EXPLORE

            <MoveRight size={14} strokeWidth={1.8} />
          </div>

          {/* ================= BOTTOM TWO CARDS ================= */}

          <section className="lower-grid">

            {/* CUSTOM SOLUTION */}

            <article className="custom-card">
              <div className="custom-header">
                <div className="custom-icon">
                  <Code2
                    size={27}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <h2>
                    Custom Solution
                  </h2>

                  <p>
                    For CRM, Dashboards, AI Automation,
                    Web Apps and Complex Systems.
                  </p>
                </div>
              </div>

              <div className="custom-line" />

              <span className="small-label">
                BUILT AROUND YOUR BUSINESS
              </span>

              <h3>
                CUSTOM QUOTE
              </h3>

              <ul>
                <li>
                  <span className="outline-check">
                    <Check
                      size={9}
                      strokeWidth={3}
                    />
                  </span>

                  Tailored to your business needs
                </li>

                <li>
                  <span className="outline-check">
                    <Check
                      size={9}
                      strokeWidth={3}
                    />
                  </span>

                  Scalable & High Performance
                </li>

                <li>
                  <span className="outline-check">
                    <Check
                      size={9}
                      strokeWidth={3}
                    />
                  </span>

                  Advanced Features & Integrations
                </li>

                <li>
                  <span className="outline-check">
                    <Check
                      size={9}
                      strokeWidth={3}
                    />
                  </span>

                  Dedicated Support
                </li>
              </ul>

              <a
                href="/contact"
                className="custom-button"
              >
                <span>
                  DISCUSS YOUR PROJECT
                </span>

                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                />
              </a>
            </article>

            {/* OTHER SERVICES */}

            <article className="services-card">
              <div className="services-heading">
                <div>
                  <span className="star">
                    <Sparkles
                      size={20}
                      strokeWidth={1.8}
                    />
                  </span>

                  <h2>
                    Other Services
                  </h2>
                </div>

                <span className="services-small">
                  MORE SOLUTIONS
                </span>
              </div>

              <div className="services-list">
                {otherServices.map((service) => {
                  const ServiceIcon = service.icon;

                  return (
                    <div
                      className="service-row"
                      key={service.name}
                    >
                      <div className="service-icon">
                        <ServiceIcon
                          size={21}
                          strokeWidth={1.8}
                        />
                      </div>

                      <div className="service-copy">
                        <strong>
                          {service.name}
                        </strong>

                        <p>
                          {service.description}
                        </p>
                      </div>

                      <div className="service-price">
                        <span>
                          STARTING FROM
                        </span>

                        <strong>
                          {service.price}
                        </strong>
                      </div>

                      <span className="service-arrow">
                        <ChevronRight
                          size={18}
                          strokeWidth={1.8}
                        />
                      </span>
                    </div>
                  );
                })}
              </div>
            </article>
          </section>

          {/* ================= BOTTOM CTA ================= */}

          <section className="bottom-cta">
            <div className="support-icon">
              <CircleHelp
                size={20}
                strokeWidth={1.8}
              />
            </div>

            <div className="bottom-copy">
              <strong>
                Not sure which plan is right for you?
              </strong>

              <p>
                Tell us about your idea and we&apos;ll help
                you choose the right solution.
              </p>
            </div>

            <a href="/contact">
              <span>LET&apos;S TALK</span>

              <ArrowUpRight
                size={16}
                strokeWidth={2}
              />
            </a>
          </section>

        </div>
      </main>

      <style jsx>{`

        * {
          box-sizing: border-box;
        }

        /* ======================================================
           PAGE
        ====================================================== */

        .pricing-page {
          width: 100%;
          min-height: 100vh;

          padding: 145px 0 90px;

          background: #07090b;

          color: #fff;
        }

        .pricing-container {
          width: min(1100px, calc(100% - 48px));

          margin: 0 auto;
        }

        /* ======================================================
           HERO
        ====================================================== */

        .pricing-hero {
          max-width: 760px;

          margin: 0 auto 55px;

          text-align: center;
        }

        .pricing-hero h1 {
          margin: 0;

          color: #fff;

          font-size:
            clamp(52px, 6vw, 78px);

          line-height: 0.97;

          font-weight: 800;

          letter-spacing: -0.055em;
        }

        .pricing-hero h1 span {
          color: #ff3d61;
        }

        .pricing-hero > p {
          margin: 23px 0 0;

          color:
            rgba(255, 255, 255, 0.52);

          font-size: 15px;

          line-height: 1.65;
        }

        /* ======================================================
           TRUST
        ====================================================== */

        .trust-row {
          margin-top: 27px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 20px;

          flex-wrap: wrap;

          color:
            rgba(255, 255, 255, 0.74);

          font-size: 12px;

          font-weight: 600;
        }

        .trust-row div {
          display: flex;

          align-items: center;

          gap: 8px;
        }

        .trust-row div :global(svg) {
          color: #ff3d61;
        }

        .trust-row i {
          width: 1px;

          height: 17px;

          background:
            rgba(255, 255, 255, 0.12);
        }

        /* ======================================================
           PLAN GRID DESKTOP
        ====================================================== */

        .plans-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 18px;

          align-items: stretch;
        }

        /* ======================================================
           PLAN CARD
        ====================================================== */

        .plan-card {
          position: relative;

          min-height: 555px;

          padding:
            26px 23px 22px;

          display: flex;

          flex-direction: column;

          border:
            1px solid rgba(255, 255, 255, 0.12);

          border-radius: 15px;

          background: #fff;

          color: #0b1220;

          box-shadow:
            0 15px 36px rgba(0, 0, 0, 0.25);

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .plan-card:hover {
          transform:
            translateY(-5px);

          border-color:
            rgba(255, 61, 97, 0.55);

          box-shadow:
            0 22px 45px rgba(0, 0, 0, 0.35);
        }

        .plan-card.popular {
          border:
            1.5px solid #ff3d61;

          box-shadow:
            0 18px 45px rgba(255, 61, 97, 0.14);
        }

        .popular-badge {
          position: absolute;

          top: -15px;

          left: 50%;

          transform:
            translateX(-50%);

          padding:
            9px 16px;

          display: flex;

          align-items: center;

          gap: 6px;

          border-radius: 7px;

          background: #ff3d61;

          color: #fff;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 0.05em;

          white-space: nowrap;

          box-shadow:
            0 8px 20px rgba(255, 61, 97, 0.28);
        }

        /* ======================================================
           ICON
        ====================================================== */

        .plan-icon {
          width: 62px;

          height: 62px;

          margin:
            0 auto 18px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background:
            rgba(255, 61, 97, 0.11);

          color: #ff3d61;
        }

        /* ======================================================
           PLAN TEXT
        ====================================================== */

        .plan-card h2 {
          margin: 0;

          color: #0b1220;

          text-align: center;

          font-size: 21px;

          font-weight: 800;

          letter-spacing: -0.035em;
        }

        .plan-subtitle {
          max-width: 230px;

          min-height: 42px;

          margin:
            9px auto 0;

          color: #647084;

          text-align: center;

          font-size: 12px;

          line-height: 1.55;
        }

        .card-divider {
          width: 100%;

          height: 1px;

          margin:
            20px 0;

          background: #e7e9ed;
        }

        .price {
          color: #0b1220;

          text-align: center;

          font-size: 34px;

          font-weight: 800;

          line-height: 1;

          letter-spacing: -0.04em;
        }

        .starting {
          margin-top: 7px;

          display: block;

          color: #717c8c;

          text-align: center;

          font-size: 10px;
        }

        /* ======================================================
           FEATURES
        ====================================================== */

        .plan-card ul {
          list-style: none;

          margin:
            23px 0 24px;

          padding: 0;
        }

        .plan-card li {
          margin-bottom: 10px;

          display: flex;

          align-items: center;

          gap: 9px;

          color: #171d28;

          font-size: 11.5px;
        }

        .check {
          width: 17px;

          height: 17px;

          flex:
            0 0 17px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background: #ff617e;

          color: #fff;
        }

        /* ======================================================
           BUTTON
        ====================================================== */

        .plan-button {
          margin-top: auto;

          min-height: 48px;

          padding:
            0 17px;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          border:
            1px solid #ff3d61;

          border-radius: 9px;

          background: transparent;

          color: #ff3d61;

          text-decoration: none;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 0.06em;

          transition:
            background 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }

        .plan-button.filled {
          background: #ff3d61;

          color: #fff;

          box-shadow:
            0 10px 22px rgba(255, 61, 97, 0.22);
        }

        .plan-button:hover {
          background: #ff3d61;

          color: #fff;

          transform:
            translateY(-2px);
        }

        /* ======================================================
           SWIPE HINT
        ====================================================== */

        .swipe-hint {
          display: none;
        }

        /* ======================================================
           LOWER GRID
        ====================================================== */

        .lower-grid {
          margin-top: 20px;

          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 18px;
        }

        .custom-card,
        .services-card {
          min-height: 390px;

          padding: 27px;

          border:
            1px solid rgba(255, 255, 255, 0.12);

          border-radius: 15px;

          background: #fff;

          color: #0b1220;

          box-shadow:
            0 15px 36px rgba(0, 0, 0, 0.24);
        }

        /* ======================================================
           CUSTOM
        ====================================================== */

        .custom-header {
          display: flex;

          align-items: flex-start;

          gap: 17px;
        }

        .custom-icon {
          width: 58px;

          height: 58px;

          flex:
            0 0 58px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 12px;

          background:
            rgba(255, 61, 97, 0.11);

          color: #ff3d61;
        }

        .custom-header h2 {
          margin: 0;

          color: #0b1220;

          font-size: 21px;

          font-weight: 800;

          letter-spacing: -0.035em;
        }

        .custom-header p {
          max-width: 340px;

          margin:
            7px 0 0;

          color: #616d7e;

          font-size: 12px;

          line-height: 1.55;
        }

        .custom-line {
          height: 1px;

          margin:
            25px 0;

          background: #e7e9ed;
        }

        .small-label {
          color: #7a8493;

          font-size: 8px;

          font-weight: 700;

          letter-spacing: 0.1em;
        }

        .custom-card h3 {
          margin:
            7px 0 23px;

          color: #ff3d61;

          font-size: 25px;

          letter-spacing:
            -0.035em;
        }

        .custom-card ul {
          list-style: none;

          margin:
            0 0 26px;

          padding: 0;
        }

        .custom-card li {
          margin-bottom: 11px;

          display: flex;

          align-items: center;

          gap: 9px;

          color: #171d28;

          font-size: 12px;
        }

        .outline-check {
          width: 17px;

          height: 17px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          border:
            1px solid #ff3d61;

          border-radius: 50%;

          color: #ff3d61;
        }

        .custom-button {
          min-height: 48px;

          padding:
            0 17px;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          border:
            1px solid #ff3d61;

          border-radius: 9px;

          color: #ff3d61;

          text-decoration: none;

          font-size: 9px;

          font-weight: 800;

          transition:
            background 0.25s ease,
            color 0.25s ease;
        }

        .custom-button:hover {
          background: #ff3d61;

          color: #fff;
        }

        /* ======================================================
           SERVICES
        ====================================================== */

        .services-heading {
          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 20px;
        }

        .services-heading > div {
          display: flex;

          align-items: center;

          gap: 10px;
        }

        .services-heading h2 {
          margin: 0;

          color: #0b1220;

          font-size: 21px;

          font-weight: 800;
        }

        .star {
          display: flex;

          align-items: center;

          justify-content: center;

          color: #ff3d61;
        }

        .services-small {
          color: #7b8492;

          font-size: 8px;

          font-weight: 700;

          letter-spacing: 0.08em;
        }

        .services-list {
          margin-top: 23px;

          display: flex;

          flex-direction: column;

          gap: 10px;
        }

        .service-row {
          padding: 14px;

          display: grid;

          grid-template-columns:
            45px 1fr auto 15px;

          align-items: center;

          gap: 13px;

          border:
            1px solid #e4e7eb;

          border-radius: 10px;

          background: #fff;

          transition:
            border-color 0.25s ease,
            transform 0.25s ease;
        }

        .service-row:hover {
          transform:
            translateX(3px);

          border-color:
            rgba(255, 61, 97, 0.45);
        }

        .service-icon {
          width: 44px;

          height: 44px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 9px;

          background:
            rgba(255, 61, 97, 0.11);

          color: #ff3d61;
        }

        .service-copy strong {
          color: #0b1220;

          font-size: 12px;
        }

        .service-copy p {
          max-width: 220px;

          margin:
            4px 0 0;

          color: #697383;

          font-size: 10px;

          line-height: 1.45;
        }

        .service-price {
          min-width: 90px;

          text-align: right;
        }

        .service-price span {
          display: block;

          color: #77818f;

          font-size: 7px;

          letter-spacing: 0.04em;
        }

        .service-price strong {
          display: block;

          margin-top: 4px;

          color: #ff3d61;

          font-size: 18px;
        }

        .service-arrow {
          display: flex;

          align-items: center;

          justify-content: center;

          color: #ff3d61;
        }

        /* ======================================================
           CTA
        ====================================================== */

        .bottom-cta {
          margin-top: 20px;

          padding:
            20px 24px;

          display: grid;

          grid-template-columns:
            48px 1fr auto;

          align-items: center;

          gap: 17px;

          border:
            1px solid rgba(255, 255, 255, 0.12);

          border-radius: 15px;

          background: #fff;

          color: #0b1220;

          box-shadow:
            0 15px 36px rgba(0, 0, 0, 0.24);
        }

        .support-icon {
          width: 45px;

          height: 45px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background:
            rgba(255, 61, 97, 0.11);

          color: #ff3d61;
        }

        .bottom-copy strong {
          font-size: 13px;
        }

        .bottom-copy p {
          margin:
            5px 0 0;

          color: #657080;

          font-size: 11px;
        }

        .bottom-cta a {
          width: 190px;

          min-height: 48px;

          padding:
            0 18px;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          border-radius: 9px;

          background: #ff3d61;

          color: #fff;

          text-decoration: none;

          font-size: 9px;

          font-weight: 800;

          box-shadow:
            0 10px 22px rgba(255, 61, 97, 0.22);
        }

        /* ======================================================
           TABLET
        ====================================================== */

        @media (max-width: 900px) and (min-width: 701px) {

          .plans-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .plan-card:last-child {
            grid-column:
              1 / -1;

            width: 50%;

            justify-self: center;
          }

          .lower-grid {
            grid-template-columns: 1fr;
          }

        }

        /* ======================================================
           MOBILE
        ====================================================== */

        @media (max-width: 700px) {

          .pricing-page {
            padding:
              125px 0 70px;

            overflow-x: hidden;
          }

          .pricing-container {
            width:
              calc(100% - 28px);
          }

          .pricing-hero {
            margin-bottom: 42px;
          }

          .pricing-hero h1 {
            font-size:
              clamp(42px, 13vw, 59px);
          }

          .pricing-hero > p {
            font-size: 13px;
          }

          .trust-row {
            gap: 13px;

            font-size: 10px;
          }

          .trust-row i {
            display: none;
          }

          /* ============================================
             MOBILE PRICING HORIZONTAL SLIDER
          ============================================ */

          .plans-grid {
            display: flex;

            gap: 14px;

            width:
              calc(100% + 28px);

            margin-left: -14px;

            padding:
              18px 13vw 20px;

            overflow-x: auto;

            overflow-y: visible;

            scroll-snap-type:
              x mandatory;

            scroll-behavior: smooth;

            scroll-padding-inline:
              13vw;

            -webkit-overflow-scrolling:
              touch;

            scrollbar-width: none;

            overscroll-behavior-x:
              contain;
          }

          .plans-grid::-webkit-scrollbar {
            display: none;
          }

          .plan-card,
          .plan-card:last-child {
            flex:
              0 0 78vw;

            width: 78vw;

            min-width: 78vw;

            min-height: 545px;

            grid-column: auto;

            padding:
              25px 20px 21px;

            scroll-snap-align: center;

            scroll-snap-stop: always;

            justify-self: auto;
          }

          .plan-card:first-child {
            margin-left: 0;
          }

          .plan-card:last-child {
            margin-right: 0;
          }

          .plan-card:hover {
            transform: none;
          }

          .popular-badge {
            top: -13px;
          }

          .plan-icon {
            width: 56px;

            height: 56px;

            margin-bottom: 16px;
          }

          .plan-card h2 {
            font-size: 20px;
          }

          .plan-subtitle {
            min-height: 38px;

            font-size: 11.5px;
          }

          .card-divider {
            margin:
              17px 0;
          }

          .price {
            font-size: 31px;
          }

          .plan-card ul {
            margin:
              20px 0 22px;
          }

          .plan-card li {
            margin-bottom: 9px;

            font-size: 11px;
          }

          .plan-button {
            min-height: 46px;
          }

          .swipe-hint {
            margin:
              9px 0 42px;

            display: flex;

            align-items: center;

            justify-content: center;

            gap: 10px;

            color:
              rgba(255, 255, 255, 0.32);

            font-size: 8px;

            font-weight: 800;

            letter-spacing: 0.12em;
          }

          .swipe-hint :global(svg) {
            color: #ff3d61;
          }

          /* LOWER CARDS */

          .lower-grid {
            margin-top: 0;

            grid-template-columns: 1fr;

            gap: 18px;
          }

          .custom-card,
          .services-card {
            min-height: auto;

            padding:
              22px 18px;
          }

          .custom-icon {
            width: 52px;

            height: 52px;

            flex-basis: 52px;
          }

          .custom-header h2,
          .services-heading h2 {
            font-size: 19px;
          }

          .services-small {
            display: none;
          }

          .service-row {
            grid-template-columns:
              42px 1fr;

            padding: 13px;
          }

          .service-icon {
            width: 40px;

            height: 40px;
          }

          .service-price {
            grid-column: 2;

            text-align: left;
          }

          .service-arrow {
            display: none;
          }

          /* CTA */

          .bottom-cta {
            grid-template-columns:
              42px 1fr;

            padding:
              18px 16px;
          }

          .bottom-cta a {
            grid-column:
              1 / -1;

            width: 100%;

            margin-top: 5px;
          }

        }

      `}</style>
    </>
  );
}