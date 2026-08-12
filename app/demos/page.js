import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata = {
  title: "Website Demos & Design Examples",

  description:
    "Explore website demos and design examples by NexKripa for restaurants, salons, e-commerce stores, real estate businesses, institutes, portfolios and other industries.",

  alternates: {
    canonical: "/demos",
  },

  openGraph: {
    title: "Website Demos & Design Examples | NexKripa",
    description:
      "Explore sample website designs and demo concepts for restaurants, salons, e-commerce, real estate, institutes and more.",
    url: "/demos",
    siteName: "NexKripa",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexKripa Website Demos and Design Examples",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Website Demos & Design Examples | NexKripa",
    description:
      "Explore sample website demos and design concepts created by NexKripa.",
    images: ["/og-image.png"],
  },
};

const demos = [

  {
    number: "01",
    title: "E-Commerce Store",
    category: "Online Shopping",
    description:
      "A clean e-commerce demo with product discovery, categories, cart flow, offers and conversion-focused interface.",
    image: "/demos/ecommerce-demo.png",
    demoUrl: "/demos/ecommerce",
  },
  {
    number: "02",
    title: "Restaurant Website",
    category: "Food & Hospitality",
    description:
      "A modern restaurant website concept with menu highlights, reservation CTA, location details and mobile-friendly layout.",
    image: "/demos/restaurant-demo.jpg",
    demoUrl: "#",
  },
  {
    number: "03",
    title: "Personal Portfolio",
    category: "Personal Branding",
    description:
      "A professional portfolio demo for developers, designers, creators and professionals who want a strong personal presence.",
    image: "/demos/portfolio-demo.png",
    demoUrl: "/demos/portfolio",
  },
  {
    number: "04",
    title: "Salon Website",
    category: "Beauty & Wellness",
    description:
      "A premium salon website concept with service listings, appointment CTA, gallery and local-business focused design.",
    image: "/demos/salon-demo.jpg",
    demoUrl: "#",
  },
  {
    number: "05",
    title: "Real Estate Website",
    category: "Property",
    description:
      "A property-focused website concept with featured listings, property highlights, enquiry flow and modern layouts.",
    image: "/demos/real-estate-demo.jpg",
    demoUrl: "#",
  },
  {
    number: "06",
    title: "School / Institute",
    category: "Education",
    description:
      "An education website concept for schools and institutes with programs, admissions, notices and enquiry sections.",
    image: "/demos/institute-demo.jpg",
    demoUrl: "#",
  },
];

const demoSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "NexKripa Website Demos",
  description:
    "Website demo concepts and design examples created by NexKripa for different industries and business types.",
  url: "https://www.nexkripa.in/demos",
  isPartOf: {
    "@type": "WebSite",
    name: "NexKripa",
    url: "https://www.nexkripa.in/",
  },
};

export default function DemosPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.nexkripa.in/",
          },
          {
            name: "Demos",
            url: "https://www.nexkripa.in/demos",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(demoSchema),
        }}
      />

      <main className="demos-page">
        <section className="demos-hero">
          <div className="demos-container">
            <Reveal>
              <span className="demos-kicker">
                NEXKRIPA / WEBSITE DEMOS
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1>
                SEE IT
                <span>BEFORE YOU</span>
                <em>BUILD IT.</em>
              </h1>
            </Reveal>

          </div>
        </section>

        <section className="demos-grid-section">
          <div className="demos-container">
            <div className="demos-grid">
              {demos.map((demo, index) => (
                <Reveal key={demo.title} delay={index * 0.05}>
                  <article className="demo-card">
                    <div className="demo-card-image-wrap">
                      <Image
                        src={demo.image}
                        alt={`${demo.title} website demo concept by NexKripa`}
                        width={900}
                        height={650}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="demo-card-image"
                      />

                      <span className="demo-card-label">
                        DEMO CONCEPT
                      </span>
                    </div>

                    <div className="demo-card-content">
                      <div className="demo-card-top">
                        <span>{demo.number}</span>
                        <span>{demo.category}</span>
                      </div>

                      <h2>{demo.title}</h2>

                      <p>{demo.description}</p>

                      <div className="demo-card-actions">
                        {demo.demoUrl !== "#" ? (
                          <a
                            href={demo.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="demo-view-btn"
                          >
                            VIEW DEMO <span>↗</span>
                          </a>
                        ) : (
                          <span className="demo-coming-btn">
                            DEMO COMING SOON
                          </span>
                        )}

                        <Link
                          href="/contact"
                          className="demo-build-btn"
                        >
                          BUILD THIS WEBSITE
                          <span>↗</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="demos-info">
          <div className="demos-container demos-info-grid">
            <Reveal>
              <div>
                <span className="demos-kicker">
                  WHY DEMOS?
                </span>

                <h2>
                  SEE THE IDEA.
                  <br />
                  THEN MAKE IT
                  <em> YOURS.</em>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="demos-info-copy">
                <p>
                  Every demo shown here is a sample concept, not a completed
                  client project unless clearly stated otherwise.
                </p>

                <p>
                  We can customize the layout, content, colors, features,
                  branding and technology based on your business requirements.
                </p>

                <Link href="/services/website" className="demos-text-link">
                  EXPLORE WEB DEVELOPMENT <span>↗</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="demos-cta">
          <div className="demos-container">
            <Reveal>
              <span className="demos-kicker">
                LIKE A DEMO?
              </span>

              <h2>
                TURN THE
                <br />
                IDEA INTO
                <br />
                <em>YOUR WEBSITE.</em>
              </h2>

              <p>
                Choose a demo direction or share your own idea. We can create
                a website around your business, audience and goals.
              </p>

              <div className="demos-cta-actions">
                <Link href="/contact" className="demos-primary-btn">
                  START MY WEBSITE
                  <span>↗</span>
                </Link>

                <Link href="/services" className="demos-secondary-btn">
                  EXPLORE SERVICES
                  <span>↗</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}