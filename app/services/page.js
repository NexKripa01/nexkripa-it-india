import Link from "next/link";
import ServicesInteractiveGrid from "@/components/ServicesInteractiveGrid";

export const metadata = {
  title: "Digital Services in Mumbai",

  description:
    "Explore NexKripa IT INDIA services including web development, UI/UX design, AI automation, CRM development, e-commerce, personal branding, corporate branding, database maintenance and IT consultancy in Mumbai and across India.",

  keywords: [
    "Digital Services Mumbai",
    "Web Development Services Mumbai",
    "UI UX Design Services Mumbai",
    "AI Automation Services India",
    "CRM Development Services Mumbai",
    "E-Commerce Development Mumbai",
    "Personal Branding Services Mumbai",
    "Corporate Branding Services Mumbai",
    "Database Maintenance Services",
    "IT Consultancy Mumbai",
    "NexKripa Services",
    "NexKripa IT INDIA",
  ],

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "Digital Services in Mumbai | NexKripa IT INDIA",
    description:
      "Web development, UI/UX, AI automation, CRM, e-commerce, branding, database maintenance and IT consultancy services for businesses and startups.",
    url: "/services",
    siteName: "NexKripa",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexKripa IT INDIA Digital Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Services in Mumbai | NexKripa IT INDIA",
    description:
      "Web development, AI automation, UI/UX, CRM, branding and digital solutions by NexKripa IT INDIA.",
    images: ["/og-image.png"],
  },
};

const serviceLinks = [
  {
    number: "01",
    title: "Web Development",
    text:
      "Modern, responsive and performance-focused websites for businesses, startups and professionals.",
    href: "/services/website",
  },
  {
    number: "02",
    title: "UI / UX Design",
    text:
      "User-focused interfaces for websites, dashboards and digital products.",
    href: "/services/ui-ux",
  },
  {
    number: "03",
    title: "AI Automation",
    text:
      "Workflow automation, AI assistants, integrations and smarter business operations.",
    href: "/services/ai-automation",
  },
  {
    number: "04",
    title: "CRM Development",
    text:
      "Custom CRM solutions for lead management, customer tracking and business workflows.",
    href: "/services/crm",
  },
  {
    number: "05",
    title: "E-Commerce Development",
    text:
      "Online stores, product catalogs, checkout flows and order management solutions.",
    href: "/services/e-commerce",
  },
  {
    number: "06",
    title: "Personal Branding",
    text:
      "Personal brand strategy, digital presence and websites for founders, professionals and creators.",
    href: "/services/personal-branding",
  },
  {
    number: "07",
    title: "Corporate Branding",
    text:
      "Brand identity and visual systems for businesses, companies and growing organizations.",
    href: "/services/corporate-branding",
  },
  {
    number: "08",
    title: "Database Maintenance",
    text:
      "Database support, organization, maintenance and reliability for business systems.",
    href: "/services/database-maintenance",
  },
  {
    number: "09",
    title: "IT Consultancy",
    text:
      "Technology guidance and practical digital solutions based on business requirements.",
    href: "/services/it-consultancy",
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServicesInteractiveGrid />

      {/* SEO + INTERNAL LINKING SECTION */}
      <section className="services-seo">
        <div className="services-seo-container">

          {/* <div className="services-seo-head">
            <span className="services-seo-kicker">
              NEXKRIPA IT INDIA / SERVICES
            </span>

            <h1>
              DIGITAL SERVICES
              <br />
              <em>BUILT FOR BUSINESS.</em>
            </h1>

            <p>
              NexKripa IT INDIA provides digital and technology services in
              Mumbai and across India for businesses, startups and
              professionals. Our services cover websites, UI/UX design,
              AI automation, CRM systems, e-commerce, branding, databases and
              IT consultancy.
            </p>
          </div> */}

          {/* <div className="services-seo-grid">
            {serviceLinks.map((service) => (
              <Link
                href={service.href}
                className="services-seo-card"
                key={service.href}
              >
                <span className="services-seo-number">
                  {service.number}
                </span>

                <div className="services-seo-card-content">
                  <h2>{service.title}</h2>
                  <p>{service.text}</p>
                </div>

                <span className="services-seo-arrow">
                  ↗
                </span>
              </Link>
            ))}
          </div> */}

          {/* <div className="services-seo-bottom">
            <div>
              <span className="services-seo-kicker">
                HAVE A PROJECT?
              </span>

              <h2>
                LET&apos;S BUILD
                <em> SOMETHING USEFUL.</em>
              </h2>
            </div>

            <Link href="/contact" className="services-seo-contact">
              START A PROJECT <span>↗</span>
            </Link>
          </div> */}

        </div>
      </section>
    </>
  );
}