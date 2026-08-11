"use client";

import Link from "next/link";

const services = [
  {
    title: "WEBSITE",
    href: "./services/website",
    image: "/hero/website.jpg",
    className: "service-cell-a",
  },
  // {
  //   title: "CORPORATE BRANDING",
  //   href: "./services/corporate-branding",
  //   image: "/hero/corporate-branding.png",
  //   className: "service-cell-b",
  // },
  {
    title: "PERSONAL BRANDING",
    href: "./services/personal-branding",
    image: "/hero/personal-branding.png",
    className: "service-cell-c",
  },
  {
    title: "UI/UX",
    href: "./services/ui-ux",
    image: "/hero/uiux.png",
    className: "service-cell-d",
  },
  {
    title: "CRM",
    href: "./services/crm",
    image: "/hero/crm.png",
    className: "service-cell-e",
  },
  // {
  //   title: "IT CONSULTANCY",
  //   href: "./services/it-consultancy",
  //   image: "/hero/it-consultancy.png",
  //   className: "service-cell-f",
  // },
  {
    title: "AI AUTOMATION",
    href: "./services/ai-automation",
    image: "/hero/ai-automation.png",
    className: "service-cell-g",
  },
  // {
  //   title: "DATABASE MAINTENANCE",
  //   href: "./services/database-maintenance",
  //   image: "/hero/database-maintenance.png",
  //   className: "service-cell-h",
  // },
  {
    title: "E-COMMERCE",
    href: "./services/e-commerce",
    image: "/hero/e-commerce.png",
    className: "service-cell-i",
  },
];

export default function ServicesInteractiveGrid() {
  return (
    <section className="services-reference-grid-section">
      <div className="services-reference-grid">
        {services.map((service) => (
          <Link
            href={service.href}
            key={service.title}
            className={`services-reference-cell ${service.className}`}
          >
            {/* IMAGE */}
            <div
              className="services-reference-card-image"
              style={{
                backgroundImage: `url("${service.image}")`,
              }}
            />

            {/* DARK OVERLAY */}
            <div className="services-reference-card-overlay" />

            {/* TITLE */}
            <span className="services-reference-title">
              {service.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}