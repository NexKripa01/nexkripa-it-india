"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    title: "WEBSITE",
    href: "/contact",
    image: "/hero/media.jpg",
    className: "service-cell-a",
  },
  {
    title: "CORPORATE BRANDING",
    href: "/contact",
    image: "/hero/scene-2.jpg",
    className: "service-cell-b",
  },
  {
    title: "PERSONAL BRANDING",
    href: "/contact",
    image: "/hero/scene-3.jpg",
    className: "service-cell-c",
  },
  {
    title: "UI/UX",
    href: "/contact",
    image: "/hero/scene-4.jpg",
    className: "service-cell-d",
  },
  {
    title: "CRM",
    href: "/contact",
    image: "/hero/scene-5.jpg",
    className: "service-cell-e",
  },
  {
    title: "IT CONSULTANCY",
    href: "/contact",
    image: "/hero/scene-1.jpg",
    className: "service-cell-f",
  },
  {
    title: "AI AUTOMATION",
    href: "/contact",
    image: "/hero/scene-2.jpg",
    className: "service-cell-g",
  },
  {
    title: "DATABASE MAINTENANCE",
    href: "/contact",
    image: "/hero/scene-3.jpg",
    className: "service-cell-h",
  },
  {
    title: "E-COMMERCE",
    href: "/contact",
    image: "/hero/scene-4.jpg",
    className: "service-cell-i",
  },
];

export default function ServicesInteractiveGrid() {
  const [active, setActive] = useState(null);

  return (
    <section
      className={`services-reference-grid-section ${active !== null ? "has-active-service" : ""}`}
      onMouseLeave={() => setActive(null)}
    >
      <div className="services-reference-backgrounds" aria-hidden="true">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`services-reference-bg ${
              active === index ? "is-active" : ""
            }`}
            style={{ backgroundImage: `url(${service.image})` }}
          />
        ))}
      </div>

      <div className="services-reference-overlay" />

      <div className="services-reference-grid">
        {services.map((service, index) => (
          <Link
            href={service.href}
            key={service.title}
            className={`services-reference-cell ${service.className}`}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onBlur={() => setActive(null)}
            style={{ "--mobile-service-image": `url(${service.image})` }}
          >
            <span className="services-reference-title">{service.title}</span>

            <span className="services-reference-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}