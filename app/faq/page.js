"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services does NexKripa provide?",
    answer:
      "NexKripa provides Website Development, Website Redesign, Personal Branding, UI/UX Design, CRM Solutions, AI Automation and E-Commerce solutions for businesses, professionals and growing brands.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The project timeline depends on the size, features and complexity of the website. A standard business website can usually be completed within 7 to 15 days, while larger or custom projects may require additional time.",
  },
  {
    question: "How much does a website project cost?",
    answer:
      "The cost depends on your requirements, number of pages, design complexity, functionality, integrations and custom features. After understanding your project requirements, NexKripa provides a clear quotation before development begins.",
  },
  {
    question: "Can NexKripa redesign my existing website?",
    answer:
      "Yes. NexKripa can redesign and modernize your existing website by improving its visual design, responsiveness, user experience, structure and overall functionality while keeping your business goals in focus.",
  },
  {
    question: "Does NexKripa build e-commerce websites?",
    answer:
      "Yes. We build modern e-commerce websites with product listings, categories, shopping carts, checkout flows, payment integrations, order management and other features based on your business requirements.",
  },
  {
    question: "What CRM solutions does NexKripa provide?",
    answer:
      "NexKripa can build CRM solutions that help businesses manage customers, leads, enquiries, communication, sales information and other business workflows from a structured digital system.",
  },
  {
    question: "How can AI Automation help my business?",
    answer:
      "AI Automation can reduce repetitive work, improve response time and make business processes more efficient. NexKripa can develop automation solutions based on your workflow and business requirements.",
  },
  {
    question: "Does NexKripa provide UI/UX design services?",
    answer:
      "Yes. We provide UI/UX design focused on creating modern, clean and user-friendly digital experiences. Our goal is to make websites and digital products visually strong while keeping them simple and easy to use.",
  },
  {
    question: "What is included in Personal Branding?",
    answer:
      "Personal Branding solutions can include professional websites, portfolio experiences, digital presence and visual presentation designed to help professionals, creators and founders present themselves effectively online.",
  },
  {
    question: "Can NexKripa help with domain and hosting?",
    answer:
      "Yes. We can guide you with domain selection, hosting setup, website deployment and basic configuration. Domain and hosting costs depend on the provider and plan selected by the client.",
  },
  {
    question: "Can I request custom features for my project?",
    answer:
      "Yes. Every business has different requirements. You can discuss custom features, integrations, dashboards, forms, automation or other functionality with us before the project begins.",
  },
  {
    question: "What is NexKripa's project development process?",
    answer:
      "We begin by understanding your business and project requirements. After finalizing the scope, features, timeline and pricing, we move into design and development, share progress updates, collect feedback and finally deploy the completed project.",
  },
  {
    question: "Does NexKripa work with clients remotely?",
    answer:
      "Yes. NexKripa can work with clients remotely. Project discussions, requirement gathering, progress updates, feedback and delivery can all be managed online.",
  },
  {
    question: "How can I start a project with NexKripa?",
    answer:
      "You can contact NexKripa through the website and share your project requirements. We will understand your needs, discuss the suitable solution, timeline and pricing, and guide you through the next steps.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <>
      <section className="faq-page">
        <div className="faq-inner">
          {/* ================= HEADING ================= */}

          <div className="faq-heading">
            <span className="faq-label">FAQ</span>

            <h1>
              QUESTIONS
              <br />
              <span>ANSWERED.</span>
            </h1>

            <p>
              Everything you need to know before starting your next digital
              project with <strong>NexKripa.</strong>
            </p>
          </div>

          {/* ================= FAQ LIST ================= */}

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  className={`faq-item ${isOpen ? "active" : ""}`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="faq-question-text">
                      {faq.question}
                    </span>

                    <span className="faq-icon">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`faq-answer-wrap ${
                      isOpen ? "open" : ""
                    }`}
                  >
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= BOTTOM CTA ================= */}

          <div className="faq-bottom">
            <div>
              <span className="faq-bottom-label">
                STILL HAVE QUESTIONS?
              </span>

              <h2>
                LET&apos;S BUILD
                <br />
                SOMETHING GREAT.
              </h2>
            </div>

            <a href="/contact" className="faq-contact-btn">
              <span>START A PROJECT</span>
              <span className="faq-arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ======================================================
           FAQ PAGE
        ====================================================== */

        .faq-page {
          width: 100%;
          min-height: 100vh;

          padding: 160px 0 110px;

          background: #07090b;
          color: #fff;
        }

        .faq-inner {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* ======================================================
           HEADING
        ====================================================== */

        .faq-heading {
          margin-bottom: 80px;
        }

        .faq-label {
          display: inline-block;

          margin-bottom: 22px;

          color: #ff3d61;

          font-size: 11px;
          font-weight: 800;

          letter-spacing: 0.18em;
        }

        .faq-heading h1 {
          margin: 0;

          color: #fff;

          font-size: clamp(58px, 8vw, 112px);

          line-height: 0.88;

          font-weight: 700;

          letter-spacing: -0.065em;
        }

        .faq-heading h1 span {
          color: #ff3d61;
        }

        .faq-heading p {
          max-width: 610px;

          margin: 30px 0 0;

          color: rgba(255, 255, 255, 0.45);

          font-size: 16px;

          line-height: 1.7;
        }

        .faq-heading p strong {
          color: #fff;

          font-weight: 600;
        }

        /* ======================================================
           FAQ LIST
        ====================================================== */

        .faq-list {
          width: 100%;

          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .faq-item {
          width: 100%;

          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        /* ======================================================
           QUESTION
        ====================================================== */

        .faq-question {
          width: 100%;

          padding: 30px 0;

          display: grid;

          grid-template-columns: 70px minmax(0, 1fr) 48px;

          align-items: center;

          gap: 22px;

          border: none;
          outline: none;

          background: transparent;

          color: #fff;

          text-align: left;

          font-family: inherit;

          cursor: pointer;
        }

        .faq-number {
          color: rgba(255, 255, 255, 0.28);

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 0.12em;

          transition: color 0.25s ease;
        }

        .faq-question-text {
          color: #fff;

          font-size: clamp(20px, 2.2vw, 31px);

          line-height: 1.2;

          font-weight: 600;

          letter-spacing: -0.03em;

          transition: color 0.25s ease;
        }

        /* ======================================================
           ICON
        ====================================================== */

        .faq-icon {
          width: 42px;
          height: 42px;

          margin-left: auto;

          display: flex;

          align-items: center;
          justify-content: center;

          border: 1px solid rgba(255, 255, 255, 0.16);

          border-radius: 50%;

          color: #fff;

          font-size: 23px;

          font-weight: 300;

          line-height: 1;

          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }

        /* ======================================================
           HOVER / ACTIVE
        ====================================================== */

        .faq-question:hover .faq-question-text,
        .faq-item.active .faq-question-text {
          color: #ff3d61;
        }

        .faq-question:hover .faq-number,
        .faq-item.active .faq-number {
          color: #ff3d61;
        }

        .faq-question:hover .faq-icon,
        .faq-item.active .faq-icon {
          background: #ff3d61;

          border-color: #ff3d61;

          color: #fff;
        }

        .faq-item.active .faq-icon {
          transform: rotate(180deg);
        }

        /* ======================================================
           ANSWER ANIMATION
        ====================================================== */

        .faq-answer-wrap {
          display: grid;

          grid-template-rows: 0fr;

          opacity: 0;

          transition:
            grid-template-rows 0.35s ease,
            opacity 0.3s ease;
        }

        .faq-answer-wrap.open {
          grid-template-rows: 1fr;

          opacity: 1;
        }

        .faq-answer {
          overflow: hidden;
        }

        .faq-answer p {
          max-width: 760px;

          margin: 0;

          padding: 0 70px 32px 92px;

          color: rgba(255, 255, 255, 0.52);

          font-size: 15px;

          line-height: 1.8;
        }

        /* ======================================================
           BOTTOM CTA
        ====================================================== */

        .faq-bottom {
          margin-top: 110px;

          padding-top: 55px;

          display: flex;

          align-items: flex-end;

          justify-content: space-between;

          gap: 50px;

          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .faq-bottom-label {
          display: block;

          margin-bottom: 18px;

          color: #ff3d61;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 0.16em;
        }

        .faq-bottom h2 {
          margin: 0;

          color: #fff;

          font-size: clamp(38px, 5vw, 70px);

          line-height: 0.95;

          font-weight: 700;

          letter-spacing: -0.055em;
        }

        /* ======================================================
           CTA BUTTON
        ====================================================== */

        .faq-contact-btn {
          min-width: 190px;

          padding: 18px 22px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 25px;

          border: 1px solid #ff3d61;

          background: #ff3d61;

          color: #fff;

          text-decoration: none;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 0.12em;

          transition:
            background 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }

        .faq-contact-btn:hover {
          background: transparent;

          color: #ff3d61;

          transform: translateY(-3px);
        }

        .faq-arrow {
          font-size: 19px;

          line-height: 1;
        }

        /* ======================================================
           TABLET
        ====================================================== */

        @media (max-width: 900px) {
          .faq-bottom {
            align-items: flex-start;

            flex-direction: column;
          }
        }

        /* ======================================================
           MOBILE
        ====================================================== */

        @media (max-width: 700px) {
          .faq-page {
            padding: 135px 0 75px;
          }

          .faq-inner {
            width: calc(100% - 28px);
          }

          .faq-heading {
            margin-bottom: 55px;
          }

          .faq-label {
            margin-bottom: 17px;

            font-size: 9px;
          }

          .faq-heading h1 {
            font-size: clamp(46px, 14vw, 68px);

            line-height: 0.92;
          }

          .faq-heading p {
            max-width: 340px;

            margin-top: 22px;

            font-size: 14px;
          }

          .faq-question {
            padding: 23px 0;

            grid-template-columns:
              30px minmax(0, 1fr) 36px;

            gap: 11px;
          }

          .faq-number {
            font-size: 8px;
          }

          .faq-question-text {
            font-size: 17px;

            line-height: 1.3;
          }

          .faq-icon {
            width: 34px;
            height: 34px;

            font-size: 19px;
          }

          .faq-answer p {
            padding:
              0 42px
              24px 41px;

            font-size: 13px;

            line-height: 1.75;
          }

          .faq-bottom {
            margin-top: 75px;

            padding-top: 40px;

            gap: 35px;
          }

          .faq-bottom h2 {
            font-size: clamp(38px, 11vw, 54px);
          }

          .faq-contact-btn {
            width: 100%;

            min-width: unset;
          }
        }
      `}</style>
    </>
  );
}