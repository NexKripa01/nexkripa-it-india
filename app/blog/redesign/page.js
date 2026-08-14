export default function RedesignBlogPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#07090b",
        color: "#fff",
        padding: "160px 24px 100px",
      }}
    >
      <div
        style={{
          width: "min(900px, 100%)",
          margin: "0 auto",
        }}
      >
        <span
          style={{
            color: "#ff3d61",
            fontSize: "11px",
            fontWeight: "800",
            letterSpacing: "0.16em",
          }}
        >
          REDESIGN
        </span>

        <h1
          style={{
            margin: "24px 0",
            fontSize: "clamp(42px, 6vw, 78px)",
            lineHeight: "1",
            letterSpacing: "-0.05em",
          }}
        >
          7 Signs Your Business Website Needs a Redesign
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "15px",
            marginBottom: "50px",
          }}
        >
          AUG 2026 · 6 MIN READ
        </p>

        <article
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "17px",
            lineHeight: "1.9",
          }}
        >
          <p>
            Your website is often one of the first places potential customers
            interact with your business. If it looks outdated, loads slowly or
            is difficult to use, it may be time for a redesign.
          </p>

          <h2 style={headingStyle}>1. Your Website Looks Outdated</h2>

          <p>
            Design trends and customer expectations change over time. An
            outdated website can make even a strong business appear less
            professional or inactive.
          </p>

          <h2 style={headingStyle}>2. It Does Not Work Well on Mobile</h2>

          <p>
            Customers increasingly access websites from mobile devices. If
            users need to zoom, scroll sideways or struggle with navigation,
            the website needs a better responsive experience.
          </p>

          <h2 style={headingStyle}>3. Your Website Loads Slowly</h2>

          <p>
            Slow pages can frustrate visitors and cause them to leave before
            they explore your products or services. A redesign can help improve
            structure, assets and overall performance.
          </p>

          <h2 style={headingStyle}>4. Navigation Is Confusing</h2>

          <p>
            Visitors should be able to quickly understand where to find
            services, products, contact information and other important
            content. Complex navigation can reduce engagement.
          </p>

          <h2 style={headingStyle}>5. Your Business Has Changed</h2>

          <p>
            If your services, branding, audience or business goals have
            changed, your website should reflect those changes clearly.
          </p>

          <h2 style={headingStyle}>6. Visitors Are Not Taking Action</h2>

          <p>
            If people visit your website but rarely contact you, request a
            quote or make a purchase, the design and user journey may need
            improvement.
          </p>

          <h2 style={headingStyle}>7. Updating Content Is Difficult</h2>

          <p>
            A modern website should make it easier to manage important
            information. If even small changes are difficult, rebuilding the
            structure can improve long-term usability.
          </p>

          <h2 style={headingStyle}>Final Thoughts</h2>

          <p>
            A website redesign is not only about changing colors or visuals. It
            is an opportunity to improve performance, user experience,
            communication and how effectively your website supports your
            business goals.
          </p>
        </article>

        <div
          style={{
            marginTop: "70px",
            paddingTop: "35px",
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <a
            href="/contact"
            style={{
              display: "inline-block",
              background: "#ff3d61",
              color: "#fff",
              padding: "16px 22px",
              textDecoration: "none",
              fontSize: "11px",
              fontWeight: "800",
              letterSpacing: "0.1em",
            }}
          >
            START A PROJECT ↗
          </a>
        </div>
      </div>
    </main>
  );
}

const headingStyle = {
  marginTop: "45px",
  color: "#fff",
  fontSize: "32px",
};