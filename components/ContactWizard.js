"use client";

import { useState } from "react";

const projectTypes = [
  "WEBSITE",
  "UI / UX",
  "BRANDING",
  "AI AUTOMATION",
  "E-COMMERCE",
  "OTHER",
];

const services = [
  "WEB DESIGN",
  "WEB DEVELOPMENT",
  "UI / UX DESIGN",
  "CORPORATE BRANDING",
  "AI AUTOMATION",
  "CRM",
  "SEO",
  "IT CONSULTANCY",
];

export default function ContactWizard() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service) => {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service]
    );
  };

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="ref-contact-success">
        <span className="ref-contact-success-icon">✓</span>
        <h2>THANK YOU</h2>
        <p>Your enquiry has been received.</p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setStep(1);
            setProjectType("");
            setSelectedServices([]);
          }}
        >
          START AGAIN
        </button>
      </div>
    );
  }

  return (
    <div className="ref-contact-wizard">
      <div className="ref-contact-progress">
        <span>0{step}</span>
        <div>
          <i style={{ width: `${(step / 3) * 100}%` }} />
        </div>
        <span>03</span>
      </div>

      {step === 1 && (
        <section className="ref-contact-step">
          <div className="ref-contact-step-heading">
            <span>PROJECT TYPE</span>
            <h2>WHAT ARE WE BUILDING?</h2>
          </div>

          <div className="ref-contact-choice-grid">
            {projectTypes.map((type) => (
              <button
                type="button"
                key={type}
                className={projectType === type ? "is-selected" : ""}
                onClick={() => setProjectType(type)}
              >
                <span>{type}</span>
                <b>{projectType === type ? "✓" : "+"}</b>
              </button>
            ))}
          </div>

          <div className="ref-contact-actions">
            <button
              className="ref-contact-next"
              type="button"
              disabled={!projectType}
              onClick={() => setStep(2)}
            >
              NEXT →
            </button>
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="ref-contact-step">
          <div className="ref-contact-step-heading">
            <span>SERVICES</span>
            <h2>WHAT DO YOU NEED?</h2>
          </div>

          <div className="ref-contact-service-list">
            {services.map((service) => {
              const active = selectedServices.includes(service);

              return (
                <button
                  type="button"
                  key={service}
                  className={active ? "is-selected" : ""}
                  onClick={() => toggleService(service)}
                >
                  <span>{service}</span>
                  <b>{active ? "✓" : "+"}</b>
                </button>
              );
            })}
          </div>

          <div className="ref-contact-actions">
            <button
              type="button"
              className="ref-contact-back"
              onClick={() => setStep(1)}
            >
              ← BACK
            </button>

            <button
              type="button"
              className="ref-contact-next"
              disabled={selectedServices.length === 0}
              onClick={() => setStep(3)}
            >
              NEXT →
            </button>
          </div>
        </section>
      )}

      {step === 3 && (
        <form className="ref-contact-step" onSubmit={submitForm}>
          <div className="ref-contact-step-heading">
            <span>YOUR DETAILS</span>
            <h2>LET&apos;S TALK.</h2>
          </div>

          <div className="ref-contact-form-grid">
            <label>
              <span>NAME</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>

            <label>
              <span>EMAIL</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              <span>PHONE</span>
              <input type="tel" name="phone" placeholder="+91..." />
            </label>

            <label>
              <span>COMPANY / BRAND</span>
              <input type="text" name="company" placeholder="Company name" />
            </label>

            <label className="ref-contact-full">
              <span>PROJECT DETAILS</span>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about your project..."
                required
              />
            </label>
          </div>

          <div className="ref-contact-summary">
            <div>
              <span>PROJECT</span>
              <strong>{projectType}</strong>
            </div>

            <div>
              <span>SERVICES</span>
              <strong>{selectedServices.join(" · ")}</strong>
            </div>
          </div>

          <div className="ref-contact-actions">
            <button
              type="button"
              className="ref-contact-back"
              onClick={() => setStep(2)}
            >
              ← BACK
            </button>

            <button type="submit" className="ref-contact-next">
              SEND ENQUIRY →
            </button>
          </div>
        </form>
      )}
    </div>
  );
}