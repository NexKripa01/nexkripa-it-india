export default function UIUXBlogPage() {
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
          UI/UX
        </span>

        <h1
          style={{
            margin: "24px 0",
            fontSize: "clamp(42px, 6vw, 78px)",
            lineHeight: "1",
            letterSpacing: "-0.05em",
          }}
        >
          Why Good UI/UX Design Matters for Business Growth
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "15px",
            marginBottom: "50px",
          }}
        >
          AUG 2026 · 5 MIN READ
        </p>

        <article
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "17px",
            lineHeight: "1.9",
          }}
        >
          <p>
            UI/UX design plays an important role in how people interact with a
            website, application or digital product. Good design is not only
            about appearance; it also helps users understand, navigate and
            complete actions more easily.
          </p>

          <h2 style={headingStyle}>1. Creates a Strong First Impression</h2>

          <p>
            Users quickly form an opinion about a digital product. A clean,
            modern and well-structured interface can make a business appear
            more professional and trustworthy.
          </p>

          <h2 style={headingStyle}>2. Makes Navigation Easier</h2>

          <p>
            Good UX helps users find important information without confusion.
            Clear menus, page structure and calls to action can make the
            overall experience smoother.
          </p>

          <h2 style={headingStyle}>3. Improves Mobile Experience</h2>

          <p>
            A large number of users access websites through mobile devices.
            Responsive UI/UX ensures that content, buttons, forms and
            navigation remain easy to use across different screen sizes.
          </p>

          <h2 style={headingStyle}>4. Helps Users Take Action</h2>

          <p>
            Whether the goal is to contact a business, request a quote, sign
            up, book a service or purchase a product, good UX makes the next
            step clear and easy to complete.
          </p>

          <h2 style={headingStyle}>5. Reduces Friction</h2>

          <p>
            Complicated forms, unclear buttons and confusing layouts can
            frustrate users. Thoughtful UI/UX removes unnecessary steps and
            makes interactions more straightforward.
          </p>

          <h2 style={headingStyle}>6. Builds a Consistent Brand Experience</h2>

          <p>
            Consistent typography, spacing, colors, components and interaction
            patterns help create a recognizable and professional digital
            identity.
          </p>

          <h2 style={headingStyle}>Final Thoughts</h2>

          <p>
            Good UI/UX design combines visual quality with usability. When
            users can understand and interact with a digital product easily,
            the experience becomes better for customers and more effective for
            the business.
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