import DemoWizard from "@/components/DemoWizard";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  title: "Website Demo",

  description:
    "Request access to website demos by NexKripa IT INDIA including restaurant, salon, e-commerce, school, portfolio and real estate website demos.",

  alternates: {
    canonical: "/demos",
  },
};

export default function DemosPage() {
  return (
    <>
      <section className="ref-contact-page">
        <div className="ref-contact-inner">

          <div className="ref-contact-title">
            <h1>REQUEST A DEMO</h1>

            <p>
              Choose the website <strong>demo</strong> you want to{" "}
              <strong>explore</strong>
            </p>
          </div>

          <DemoWizard />

        </div>
      </section>

      <WhatsAppFloat />
    </>
  );
}