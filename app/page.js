import Link from "next/link";
import Image from "next/image";
import HomeHeroSlider from "@/components/HomeHeroSlider";

export const metadata = {
  title: "Web Development, AI & Digital Solutions in Mumbai",

  description:
    "NexKripa IT INDIA is a Mumbai-based digital solutions company providing web development, AI automation, UI/UX design, CRM, branding, e-commerce, database maintenance and IT consultancy services for businesses and startups.",

  keywords: [
    "NexKripa",
    "NexKripa IT INDIA",
    "Web Development Company Mumbai",
    "Website Development Mumbai",
    "Web Development Company India",
    "AI Automation Services India",
    "UI UX Design Services Mumbai",
    "CRM Development Services",
    "E-Commerce Website Development",
    "Corporate Branding Services",
    "Personal Branding Services",
    "IT Consultancy Mumbai",
    "Database Maintenance Services",
    "Digital Solutions Company Mumbai",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "NexKripa IT INDIA | Web Development, AI & Digital Solutions",
    description:
      "Modern websites, AI automation, UI/UX, CRM, branding, e-commerce and digital solutions for businesses and startups.",
    url: "/",
    siteName: "NexKripa",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexKripa IT INDIA - Web Development, AI and Digital Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NexKripa IT INDIA | Web Development, AI & Digital Solutions",
    description:
      "Web development, AI automation, UI/UX, CRM, branding and digital solutions for modern businesses.",
    images: ["/og-image.png"],
  },
};

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Fast, responsive and modern websites designed to help businesses build a strong digital presence.",
    href: "/services/website",
  },
  {
    number: "02",
    title: "UI / UX Design",
    description:
      "User-focused interface and experience design for websites, platforms and digital products.",
    href: "/services/ui-ux",
  },
  {
    number: "03",
    title: "AI Automation",
    description:
      "Smart AI-powered automation solutions that simplify repetitive business processes and workflows.",
    href: "/services/ai-automation",
  },
  {
    number: "04",
    title: "CRM Development",
    description:
      "Custom CRM solutions to organize customer relationships, workflows and business operations.",
    href: "/services/crm",
  },
  {
    number: "05",
    title: "E-Commerce Development",
    description:
      "Modern e-commerce websites built for product discovery, smooth shopping and business growth.",
    href: "/services/e-commerce",
  },
  {
    number: "06",
    title: "Corporate Branding",
    description:
      "Professional brand identity systems designed to create a consistent and memorable business presence.",
    href: "/services/corporate-branding",
  },
];

export default function Home() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}
      <HomeHeroSlider />

      {/* =====================================================
          SEO INTRO
      ===================================================== */}
      <section className="home-seo-intro">
        <div className="home-seo-container">
          <span className="home-seo-kicker">
            NEXKRIPA IT INDIA
          </span>

          <div className="home-seo-intro-grid">
            <div>
              <h1>
                Digital Solutions
                <span> Built for Growth.</span>
              </h1>
            </div>

            <div className="home-seo-intro-copy">
              <p className="home-seo-lead">
                NexKripa IT INDIA is a Mumbai-based digital solutions
                company helping businesses, startups and professionals
                build modern digital experiences.
              </p>

              <p>
                We provide web development, UI/UX design, AI automation,
                CRM development, e-commerce solutions, corporate branding,
                database maintenance and IT consultancy services in Mumbai
                and across India.
              </p>

              <div className="home-seo-intro-links">
                <Link href="/services">
                  Explore Our Services
                  <span>↗</span>
                </Link>

                <Link href="/portfolio">
                  View Our Work
                  <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="home-seo-services">
        <div className="home-seo-container">
          <div className="home-seo-section-head">
            <div>
              <span className="home-seo-kicker">
                WHAT WE DO
              </span>

              <h2>
                Services for
                <em> Modern Businesses.</em>
              </h2>
            </div>

            <p>
              From websites and branding to AI automation and business
              systems, we create technology solutions focused on usability,
              performance and growth.
            </p>
          </div>

          <div className="home-seo-service-grid">
            {services.map((service) => (
              <Link
                href={service.href}
                className="home-seo-service-card"
                key={service.href}
              >
                <div className="home-seo-service-top">
                  <span>{service.number}</span>
                  <span>↗</span>
                </div>

                <div className="home-seo-service-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="home-seo-all-services">
            <Link href="/services">
              View All Services
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED PROJECT / IMAGE SEO
      ===================================================== */}
      <section className="home-seo-project">
        <div className="home-seo-container">
          <div className="home-seo-project-grid">
            <div className="home-seo-project-image">
              <Image
                src="/portfolio/pujadham.png"
                alt="PujaDham website developed by NexKripa IT INDIA"
                fill
                sizes="(max-width: 800px) 100vw, 55vw"
              />
            </div>

            <div className="home-seo-project-copy">
              <span className="home-seo-kicker">
                FEATURED PROJECT
              </span>

              <h2>
                Digital Experiences
                <em> That Work.</em>
              </h2>

              <p>
                We design and develop digital experiences around real
                business requirements. Our work focuses on responsive
                interfaces, clear user journeys, performance and practical
                technology solutions.
              </p>

              <div className="home-seo-project-links">
                <Link href="/portfolio">
                  Explore Portfolio
                  <span>↗</span>
                </Link>

                <Link href="/clientele">
                  Client Stories
                  <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATION / BUSINESS SIGNAL
      ===================================================== */}
      <section className="home-seo-location">
        <div className="home-seo-container">
          <div className="home-seo-location-grid">
            <div>
              <span className="home-seo-kicker">
                MUMBAI • INDIA
              </span>

              <h2>
                Building Digital Solutions
                <em> From Mumbai.</em>
              </h2>
            </div>

            <div>
              <p>
                NexKripa IT INDIA provides web development and digital
                technology services to businesses in Mumbai and works
                remotely with clients across India.
              </p>

              <Link href="/contact" className="home-seo-contact-btn">
                Start a Project
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}