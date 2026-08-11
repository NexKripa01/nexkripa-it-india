import ContactWizard from "@/components/ContactWizard";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  title: "Contact",

  description:
    "Start a project with NexKripa IT INDIA for web, design, branding and AI solutions.",

  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="ref-contact-page">
        <div className="ref-contact-inner">

          <div className="ref-contact-title">
            <h1>START A PROJECT</h1>

            <p>
              Let&apos;s turn your <strong>idea</strong> into something{" "}
              <strong>remarkable</strong>
            </p>
          </div>

          <ContactWizard />

        </div>
      </section>

      <WhatsAppFloat />
    </>
  );
}