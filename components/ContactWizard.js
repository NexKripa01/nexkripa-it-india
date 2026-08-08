"use client";

import { useEffect, useState } from "react";

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

const companyOptions = [
  "Student",
  "Startup",
  "Business / Company",
  "Individual Professional",
  "Freelancer",
  "Agency",
  "NGO / Organization",
  "Shop / Local Business",
  "Educational Institute",
  "Other",
];

export default function ContactWizard() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Step change hote hi page top par
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [step, submitted]);

  const toggleService = (service) => {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service]
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    // User field fill kare to warning remove
    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // NAME
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Please enter a valid name.";
    }

    // EMAIL
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else {
      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    // PHONE
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else {
      const cleanedPhone = formData.phone.replace(/\D/g, "");

      if (cleanedPhone.length < 10 || cleanedPhone.length > 15) {
        newErrors.phone =
          "Please enter a valid phone number.";
      }
    }

    // COMPANY / BRAND TYPE
    if (!formData.companyType) {
      newErrors.companyType =
        "Please select an option.";
    }

    // PROJECT DETAILS
    if (!formData.message.trim()) {
      newErrors.message =
        "Please tell us about your project.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Please provide a little more project detail.";
    }

    return newErrors;
  };

  const submitForm = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      // Error aaye to form ke top par
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const startAgain = () => {
    setSubmitted(false);
    setStep(1);
    setProjectType("");
    setSelectedServices([]);

    setFormData({
      name: "",
      email: "",
      phone: "",
      companyType: "",
      message: "",
    });

    setErrors({});
  };

  if (submitted) {
    return (
      <div className="ref-contact-success">
        <span className="ref-contact-success-icon">
          ✓
        </span>

        <h2>THANK YOU</h2>

        <p>Your enquiry has been received.</p>

        <button
          type="button"
          onClick={startAgain}
        >
          START AGAIN
        </button>
      </div>
    );
  }

  return (
    <div className="ref-contact-wizard">

      {/* ================= PROGRESS ================= */}

      <div className="ref-contact-progress">
        <span>0{step}</span>

        <div>
          <i
            style={{
              width: `${(step / 3) * 100}%`,
            }}
          />
        </div>

        <span>03</span>
      </div>

      {/* ================= STEP 1 ================= */}

      {step === 1 && (
        <section className="ref-contact-step">

          <div className="ref-contact-step-heading">
            <span>PROJECT TYPE</span>

            <h2>
              WHAT ARE WE BUILDING?
            </h2>
          </div>

          <div className="ref-contact-choice-grid">
            {projectTypes.map((type) => (
              <button
                type="button"
                key={type}
                className={
                  projectType === type
                    ? "is-selected"
                    : ""
                }
                onClick={() =>
                  setProjectType(type)
                }
              >
                <span>{type}</span>

                <b>
                  {projectType === type
                    ? "✓"
                    : "+"}
                </b>
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

      {/* ================= STEP 2 ================= */}

      {step === 2 && (
        <section className="ref-contact-step">

          <div className="ref-contact-step-heading">
            <span>SERVICES</span>

            <h2>
              WHAT DO YOU NEED?
            </h2>
          </div>

          <div className="ref-contact-service-list">

            {services.map((service) => {
              const active =
                selectedServices.includes(service);

              return (
                <button
                  type="button"
                  key={service}
                  className={
                    active
                      ? "is-selected"
                      : ""
                  }
                  onClick={() =>
                    toggleService(service)
                  }
                >
                  <span>{service}</span>

                  <b>
                    {active ? "✓" : "+"}
                  </b>
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
              disabled={
                selectedServices.length === 0
              }
              onClick={() => setStep(3)}
            >
              NEXT →
            </button>

          </div>
        </section>
      )}

      {/* ================= STEP 3 ================= */}

      {step === 3 && (
        <form
          className="ref-contact-step"
          onSubmit={submitForm}
          noValidate
        >

          <div className="ref-contact-step-heading">
            <span>YOUR DETAILS</span>

            <h2>
              LET&apos;S TALK.
            </h2>
          </div>

          <div className="ref-contact-form-grid">

            {/* NAME */}

            <label>
              <span>NAME *</span>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={
                  errors.name
                    ? "input-error"
                    : ""
                }
              />

              {errors.name && (
                <small className="form-warning">
                  ⚠ {errors.name}
                </small>
              )}
            </label>

            {/* EMAIL */}

            <label>
              <span>EMAIL *</span>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={
                  errors.email
                    ? "input-error"
                    : ""
                }
              />

              {errors.email && (
                <small className="form-warning">
                  ⚠ {errors.email}
                </small>
              )}
            </label>

            {/* PHONE */}

            <label>
              <span>PHONE *</span>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={
                  errors.phone
                    ? "input-error"
                    : ""
                }
              />

              {errors.phone && (
                <small className="form-warning">
                  ⚠ {errors.phone}
                </small>
              )}
            </label>

            {/* COMPANY TYPE */}

            <label>
              <span>
                COMPANY / BRAND TYPE *
              </span>

              <select
                name="companyType"
                value={formData.companyType}
                onChange={handleChange}
                className={
                  errors.companyType
                    ? "input-error"
                    : ""
                }
              >
                <option value="">
                  Select an option
                </option>

                {companyOptions.map(
                  (option) => (
                    <option
                      value={option}
                      key={option}
                    >
                      {option}
                    </option>
                  )
                )}
              </select>

              {errors.companyType && (
                <small className="form-warning">
                  ⚠ {errors.companyType}
                </small>
              )}
            </label>

            {/* PROJECT DETAILS */}

            <label className="ref-contact-full">
              <span>
                PROJECT DETAILS *
              </span>

              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className={
                  errors.message
                    ? "input-error"
                    : ""
                }
              />

              {errors.message && (
                <small className="form-warning">
                  ⚠ {errors.message}
                </small>
              )}
            </label>

          </div>

          {/* ================= SUMMARY ================= */}

          <div className="ref-contact-summary">

            <div>
              <span>PROJECT</span>

              <strong>
                {projectType}
              </strong>
            </div>

            <div>
              <span>SERVICES</span>

              <strong>
                {selectedServices.join(" · ")}
              </strong>
            </div>

            <div>
              <span>CLIENT TYPE</span>

              <strong>
                {formData.companyType ||
                  "Not selected"}
              </strong>
            </div>

          </div>

          {/* ================= ACTIONS ================= */}

          <div className="ref-contact-actions">

            <button
              type="button"
              className="ref-contact-back"
              onClick={() => setStep(2)}
            >
              ← BACK
            </button>

            <button
              type="submit"
              className="ref-contact-next"
            >
              SEND ENQUIRY →
            </button>

          </div>

        </form>
      )}

    </div>
  );
}