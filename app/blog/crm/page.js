export default function CRMBlogPage() {
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
          CRM
        </span>

        <h1
          style={{
            margin: "24px 0",
            fontSize: "clamp(42px, 6vw, 78px)",
            lineHeight: "1",
            letterSpacing: "-0.05em",
          }}
        >
          CRM for Small Businesses: What It Is and Why It Matters
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
            Customer Relationship Management, commonly known as CRM, is a
            system that helps businesses organize customer information, leads,
            enquiries and communication in one place.
          </p>

          <h2 style={headingStyle}>1. Keeps Customer Data Organized</h2>

          <p>
            Instead of managing customer details across spreadsheets, messages
            and notes, a CRM can bring important information into one
            structured system.
          </p>

          <h2 style={headingStyle}>2. Helps Manage Leads</h2>

          <p>
            Businesses can track new enquiries and potential customers through
            different stages, making it easier to know who needs follow-up and
            what action should happen next.
          </p>

          <h2 style={headingStyle}>3. Improves Follow-Ups</h2>

          <p>
            A CRM can help teams maintain better records of customer
            conversations, enquiries and previous interactions, reducing the
            chance of missing important follow-ups.
          </p>

          <h2 style={headingStyle}>4. Creates Better Team Coordination</h2>

          <p>
            When customer information is stored in one system, different team
            members can access relevant details and work with a clearer
            understanding of each lead or customer.
          </p>

          <h2 style={headingStyle}>5. Makes Business Information Easier to Track</h2>

          <p>
            A CRM can provide a more structured view of leads, customers,
            enquiries and sales activity, helping businesses understand their
            workflow more clearly.
          </p>

          <h2 style={headingStyle}>6. Can Be Customized for Different Businesses</h2>

          <p>
            Not every business follows the same process. CRM systems can be
            designed around specific workflows, such as service enquiries,
            sales pipelines, customer support or internal operations.
          </p>

          <h2 style={headingStyle}>Final Thoughts</h2>

          <p>
            A CRM is not only for large companies. Small and growing businesses
            can also benefit from having customer information and business
            workflows organized in a clear and manageable system.
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