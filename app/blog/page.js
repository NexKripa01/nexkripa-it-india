"use client";

const blogs = [
  {
    category: "WEBSITE",
    title: "Why Every Business Needs a Professional Website in 2026",
    description:
      "A professional website builds trust, improves visibility and gives customers a reliable place to understand your business, services and brand.",
    date: "AUG 2026",
    readTime: "5 MIN READ",
    href: "/blog/website",
  },
  {
    category: "REDESIGN",
    title: "7 Signs Your Business Website Needs a Redesign",
    description:
      "Slow performance, outdated visuals, poor mobile experience and confusing navigation can directly affect how customers perceive your business.",
    date: "AUG 2026",
    readTime: "6 MIN READ",
    href: "/blog/redesign",
  },
  {
    category: "PERSONAL BRANDING",
    title:
      "Personal Branding: Why Founders, Creators and Professionals Need a Strong Digital Presence",
    description:
      "A strong personal brand helps professionals build credibility, present their work clearly and create a consistent digital identity across websites and online platforms.",
    date: "AUG 2026",
    readTime: "6 MIN READ",
    href: "/blog/personal-branding",
  },
  {
    category: "UI/UX",
    title: "Why Good UI/UX Design Matters for Business Growth",
    description:
      "Good UI/UX makes digital experiences easier to understand, easier to use and more effective for both customers and businesses.",
    date: "AUG 2026",
    readTime: "5 MIN READ",
    href: "/blog/ui-ux",
  },
  {
    category: "CRM",
    title: "CRM for Small Businesses: What It Is and Why It Matters",
    description:
      "A CRM can help businesses organize leads, customer information, enquiries and communication in one structured system.",
    date: "AUG 2026",
    readTime: "6 MIN READ",
    href: "/blog/crm",
  },
  {
    category: "AI AUTOMATION",
    title: "How AI Automation Can Improve Business Operations",
    description:
      "AI automation can help reduce repetitive work, improve response time and make everyday business processes more efficient.",
    date: "AUG 2026",
    readTime: "5 MIN READ",
    href: "/blog/ai-automation",
  },
  {
    category: "E-COMMERCE",
    title: "Essential Features Every E-Commerce Website Should Have",
    description:
      "From product navigation to checkout and payments, these are the core features that help create a smooth online shopping experience.",
    date: "AUG 2026",
    readTime: "7 MIN READ",
    href: "/blog/ecommerce",
  },
];

export default function BlogPage() {
  return (
    <>
      <main className="blog-page">
        <div className="blog-inner">
          {/* ================= HERO ================= */}

          <section className="blog-heading">
            <span className="blog-label">BLOG</span>

            <h1>
              IDEAS.
              <br />
              <span>INSIGHTS.</span>
            </h1>

            <p>
              Practical insights on websites, design, branding, CRM,
              automation and digital solutions from{" "}
              <strong>NexKripa.</strong>
            </p>
          </section>

          {/* ================= FEATURED ================= */}

          <section className="featured-blog">
            <div className="featured-top">
              <span>FEATURED ARTICLE</span>
              <span>01</span>
            </div>

            <div className="featured-content">
              <div>
                <span className="featured-category">
                  {blogs[0].category}
                </span>

                <h2>{blogs[0].title}</h2>

                <p>{blogs[0].description}</p>
              </div>

              <div className="featured-bottom">
                <div>
                  <span>{blogs[0].date}</span>
                  <span>{blogs[0].readTime}</span>
                </div>

                <a href={blogs[0].href} className="read-btn">
                  READ ARTICLE
                  <span>↗</span>
                </a>
              </div>
            </div>
          </section>

          {/* ================= ARTICLES ================= */}

          <section className="articles-section">
            <div className="articles-heading">
              <span>LATEST INSIGHTS</span>
              <span>{String(blogs.length).padStart(2, "0")} ARTICLES</span>
            </div>

            <div className="blog-grid">
              {blogs.slice(1).map((blog, index) => (
                <article className="blog-card" key={blog.title}>
                  <div className="blog-card-top">
                    <span className="blog-category">
                      {blog.category}
                    </span>

                    <span className="blog-index">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="blog-card-content">
                    <h2>{blog.title}</h2>

                    <p>{blog.description}</p>
                  </div>

                  <div className="blog-card-footer">
                    <div className="blog-meta">
                      <span>{blog.date}</span>
                      <span>{blog.readTime}</span>
                    </div>

                    <a href={blog.href} className="blog-arrow">
                      ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ================= CTA ================= */}

          <section className="blog-cta">
            <div>
              <span className="blog-cta-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                LET&apos;S BUILD
                <br />
                SOMETHING GREAT.
              </h2>
            </div>

            <a href="/contact" className="blog-contact-btn">
              <span>START A PROJECT</span>
              <span>↗</span>
            </a>
          </section>
        </div>
      </main>

      <style jsx>{`
        .blog-page {
          width: 100%;
          min-height: 100vh;
          padding: 160px 0 110px;
          background: #07090b;
          color: #fff;
        }

        .blog-inner {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .blog-heading {
          margin-bottom: 85px;
        }

        .blog-label {
          display: inline-block;
          margin-bottom: 22px;
          color: #ff3d61;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .blog-heading h1 {
          margin: 0;
          color: #fff;
          font-size: clamp(60px, 8vw, 116px);
          line-height: 0.88;
          font-weight: 700;
          letter-spacing: -0.065em;
        }

        .blog-heading h1 span {
          color: #ff3d61;
        }

        .blog-heading p {
          max-width: 650px;
          margin: 30px 0 0;
          color: rgba(255, 255, 255, 0.45);
          font-size: 16px;
          line-height: 1.7;
        }

        .blog-heading p strong {
          color: #fff;
          font-weight: 600;
        }

        .featured-blog {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: #0b0d10;
        }

        .featured-top {
          padding: 18px 22px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.35);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .featured-content {
          min-height: 480px;
          padding: 45px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 60px;
        }

        .featured-category {
          display: inline-block;
          margin-bottom: 20px;
          color: #ff3d61;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .featured-content h2 {
          max-width: 900px;
          margin: 0;
          color: #fff;
          font-size: clamp(38px, 5vw, 68px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: -0.055em;
        }

        .featured-content p {
          max-width: 680px;
          margin: 28px 0 0;
          color: rgba(255, 255, 255, 0.5);
          font-size: 15px;
          line-height: 1.8;
        }

        .featured-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .featured-bottom > div {
          display: flex;
          gap: 18px;
        }

        .featured-bottom > div span {
          color: rgba(255, 255, 255, 0.34);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .read-btn {
          padding: 15px 18px;
          display: flex;
          align-items: center;
          gap: 30px;
          border: 1px solid #ff3d61;
          background: #ff3d61;
          color: #fff;
          font-family: inherit;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.12em;
          cursor: pointer;
          text-decoration: none;

          transition:
            background 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }

        .read-btn span {
          font-size: 17px;
        }

        .read-btn:hover {
          background: transparent;
          color: #ff3d61;
          transform: translateY(-3px);
        }

        .articles-section {
          margin-top: 110px;
        }

        .articles-heading {
          margin-bottom: 24px;
          display: flex;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.34);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .blog-card {
          min-height: 430px;
          padding: 26px;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(255, 255, 255, 0.11);
          background: #0b0d10;

          transition:
            transform 0.3s ease,
            border-color 0.3s ease;
        }

        .blog-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 61, 97, 0.38);
        }

        .blog-card-top {
          display: flex;
          justify-content: space-between;
        }

        .blog-category {
          color: #ff3d61;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .blog-index {
          color: rgba(255, 255, 255, 0.25);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .blog-card-content {
          margin-top: 75px;
        }

        .blog-card-content h2 {
          margin: 0;
          color: #fff;
          font-size: clamp(27px, 3vw, 42px);
          line-height: 1.04;
          font-weight: 700;
          letter-spacing: -0.045em;
        }

        .blog-card-content p {
          margin: 24px 0 0;
          color: rgba(255, 255, 255, 0.48);
          font-size: 14px;
          line-height: 1.75;
        }

        .blog-card-footer {
          margin-top: auto;
          padding-top: 25px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.09);
        }

        .blog-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .blog-meta span {
          color: rgba(255, 255, 255, 0.3);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .blog-arrow {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          background: transparent;
          color: #fff;
          font-family: inherit;
          font-size: 18px;
          cursor: pointer;
          text-decoration: none;

          transition:
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .blog-card:hover .blog-arrow {
          background: #ff3d61;
          border-color: #ff3d61;
        }

        .blog-cta {
          margin-top: 110px;
          padding-top: 55px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 50px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .blog-cta-label {
          display: block;
          margin-bottom: 18px;
          color: #ff3d61;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.16em;
        }

        .blog-cta h2 {
          margin: 0;
          color: #fff;
          font-size: clamp(38px, 5vw, 70px);
          line-height: 0.95;
          font-weight: 700;
          letter-spacing: -0.055em;
        }

        .blog-contact-btn {
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

        .blog-contact-btn:hover {
          background: transparent;
          color: #ff3d61;
          transform: translateY(-3px);
        }

        @media (max-width: 900px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }

          .blog-cta {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 700px) {
          .blog-page {
            padding: 135px 0 75px;
          }

          .blog-inner {
            width: calc(100% - 28px);
          }

          .blog-heading {
            margin-bottom: 55px;
          }

          .blog-heading h1 {
            font-size: clamp(48px, 14vw, 70px);
            line-height: 0.92;
          }

          .blog-heading p {
            font-size: 14px;
          }

          .featured-content {
            min-height: 420px;
            padding: 26px 20px;
          }

          .featured-content h2 {
            font-size: 36px;
          }

          .featured-bottom {
            align-items: flex-start;
            flex-direction: column;
          }

          .read-btn {
            width: 100%;
            justify-content: space-between;
          }

          .articles-section {
            margin-top: 75px;
          }

          .blog-card {
            min-height: 390px;
            padding: 20px;
          }

          .blog-card-content {
            margin-top: 55px;
          }

          .blog-card-content h2 {
            font-size: 30px;
          }

          .blog-cta {
            margin-top: 75px;
            padding-top: 40px;
            gap: 35px;
          }

          .blog-cta h2 {
            font-size: clamp(38px, 11vw, 54px);
          }

          .blog-contact-btn {
            width: 100%;
            min-width: unset;
          }
        }
      `}</style>
    </>
  );
}