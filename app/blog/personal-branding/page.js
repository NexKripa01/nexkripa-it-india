export default function PersonalBrandingBlogPage() {
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
          PERSONAL BRANDING
        </span>

        <h1
          style={{
            margin: "24px 0",
            fontSize: "clamp(42px, 6vw, 78px)",
            lineHeight: "1",
            letterSpacing: "-0.05em",
          }}
        >
          Personal Branding: Why Founders, Creators and Professionals Need a
          Strong Digital Presence
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
            Personal branding is how people recognize, remember and understand
            you professionally. For founders, creators, freelancers and
            professionals, a strong digital presence can make it easier to
            communicate your expertise, work and values.
          </p>

          <h2 style={headingStyle}>1. Builds Professional Credibility</h2>

          <p>
            A strong personal brand helps people understand who you are, what
            you do and why your work matters. A professional online presence
            can create a stronger first impression with clients, employers and
            collaborators.
          </p>

          <h2 style={headingStyle}>2. Helps You Stand Out</h2>

          <p>
            Many professionals may offer similar skills or services. Clear
            branding, positioning and presentation can help communicate what
            makes your experience or approach different.
          </p>

          <h2 style={headingStyle}>3. Gives Your Work a Professional Home</h2>

          <p>
            A personal website or portfolio provides one central place to
            showcase your projects, achievements, services, experience and
            contact information.
          </p>

          <h2 style={headingStyle}>4. Creates a Consistent Digital Identity</h2>

          <p>
            Using consistent messaging, visuals and information across your
            website and online platforms makes your professional identity
            easier to recognize.
          </p>

          <h2 style={headingStyle}>5. Supports New Opportunities</h2>

          <p>
            A well-presented digital presence can help potential clients,
            employers, partners and collaborators understand your work before
            they even speak with you.
          </p>

          <h2 style={headingStyle}>6. Builds Long-Term Visibility</h2>

          <p>
            Social media platforms can change over time, but having your own
            website gives you greater control over how your professional story
            and work are presented online.
          </p>

          <h2 style={headingStyle}>Final Thoughts</h2>

          <p>
            Personal branding is not simply about having a logo or posting on
            social media. It is about presenting your skills, work, values and
            professional identity in a clear and consistent way.
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
