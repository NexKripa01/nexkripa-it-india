"use client";

import { useState } from "react";
import Link from "next/link";

const demoOptions = [
  {
    id: "restaurant",
    title: "Restaurant Website",
    text: "Restaurant, cafe, bakery and food business.",
  },
  {
    id: "salon",
    title: "Salon Website",
    text: "Salon, beauty studio and wellness business.",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Store",
    text: "Products, cart and online shopping experience.",
  },
  {
    id: "school",
    title: "School / Institute",
    text: "School, coaching and education institute website.",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    text: "Portfolio for developers, creators and professionals.",
  },
  {
    id: "real-estate",
    title: "Real Estate Website",
    text: "Properties, projects and enquiry website.",
  },
];

export default function DemoWizard() {
  const [step, setStep] = useState(1);

  const [selectedDemo, setSelectedDemo] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [submittedName, setSubmittedName] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const [error, setError] = useState("");

  const selectedDemoData = demoOptions.find(
    (item) => item.id === selectedDemo
  );

  const scrollTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  const handleSelect = (id) => {
    setSelectedDemo(id);
    setError("");
  };

  const handleNext = () => {
    if (!selectedDemo) return;

    setStep(2);
    setError("");

    scrollTop();
  };

  const handleBack = () => {
    setStep(1);
    setError("");

    scrollTop();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.email.trim() ||
      !selectedDemo
    ) {
      setError("Please complete all fields.");
      return;
    }

    try {
      setSubmitting(true);
      setError("");

      const response = await fetch("/api/demo-request", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          demoType: selectedDemo,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to submit demo request."
        );
      }

      setSubmittedName(form.name.trim());

      setStep(3);

      scrollTop();
    } catch (err) {
      console.error("Demo request submit error:", err);

      setError(
        err.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="demo-contact-wizard">

      {/* =====================================================
          STEP 1
      ===================================================== */}

      {step === 1 && (
        <div className="demo-contact-step">

          <div className="demo-contact-accent-line" />

          <div className="demo-contact-question">
            <span>DEMO TYPE</span>

            <h2>
              WHAT WOULD YOU
              <br />
              LIKE TO PREVIEW?
            </h2>
          </div>

          <div className="demo-contact-list">

            {demoOptions.map((demo) => {
              const active =
                selectedDemo === demo.id;

              return (
                <button
                  key={demo.id}
                  type="button"
                  className={`demo-contact-list-item ${
                    active ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleSelect(demo.id)
                  }
                >
                  <div>
                    <h3>{demo.title}</h3>

                    {active && (
                      <p>{demo.text}</p>
                    )}
                  </div>

                  <span className="demo-contact-list-icon">
                    {active ? "✓" : "+"}
                  </span>
                </button>
              );
            })}

          </div>

          <div className="demo-contact-bottom">
            <button
              type="button"
              className="demo-small-next"
              onClick={handleNext}
              disabled={!selectedDemo}
            >
              NEXT
              <span>→</span>
            </button>
          </div>

        </div>
      )}

      {/* =====================================================
          STEP 2
      ===================================================== */}

      {step === 2 && (
        <div className="demo-contact-step">

          <div className="demo-contact-accent-line" />

          <div className="demo-contact-question">
            <span>YOUR DETAILS</span>

            <h2>
              TELL US A LITTLE
              <br />
              ABOUT YOU.
            </h2>

            <p>
              Requesting access to{" "}
              <strong>
                {selectedDemoData?.title}
              </strong>
            </p>
          </div>

          <form
            className="demo-contact-form"
            onSubmit={handleSubmit}
          >
            <div className="demo-contact-field">
              <label htmlFor="demo-name">
                YOUR NAME
              </label>

              <input
                id="demo-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="name"
                required
              />
            </div>

            <div className="demo-contact-field">
              <label htmlFor="demo-phone">
                PHONE NUMBER
              </label>

              <input
                id="demo-phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                autoComplete="tel"
                required
              />
            </div>

            <div className="demo-contact-field">
              <label htmlFor="demo-email">
                EMAIL ADDRESS
              </label>

              <input
                id="demo-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>

            <div className="demo-contact-selected">
              <span>SELECTED DEMO</span>

              <strong>
                {selectedDemoData?.title}
              </strong>
            </div>

            {error && (
              <p className="demo-contact-error">
                {error}
              </p>
            )}

            <div className="demo-contact-form-actions">

              <button
                type="button"
                className="demo-small-back"
                onClick={handleBack}
                disabled={submitting}
              >
                ← BACK
              </button>

              <button
  type="submit"
  className="demo-small-submit"
  disabled={submitting}
>
  {submitting ? (
    <>
      <span className="demo-btn-spinner" />
      REQUESTING...
    </>
  ) : (
    <>
      REQUEST DEMO
      <span>→</span>
    </>
  )}
</button>

            </div>
          </form>

        </div>
      )}

      {/* =====================================================
          STEP 3
      ===================================================== */}

      {step === 3 && (
        <div className="demo-contact-success">

          <div className="demo-contact-success-icon">
            ✓
          </div>

          <span className="demo-contact-success-label">
            REQUEST RECEIVED
          </span>

          <h2>
            THANK YOU,
            <br />
            <strong>
              {submittedName}.
            </strong>
          </h2>

          <p>
            Your request for the{" "}
            <strong>
              {selectedDemoData?.title}
            </strong>{" "}
            demo has been received.
          </p>

          <div className="demo-contact-code-box">

            <span>NEXT STEP</span>

            <h3>
              YOUR 4-DIGIT
              <br />
              ACCESS CODE
            </h3>

            <p>
              Once your request is approved,
              NexKripa will provide you with
              a one-time demo access code.
            </p>

          </div>

          <div className="demo-contact-success-actions">

            <Link
              href="/"
              className="demo-small-back"
            >
              ← BACK HOME
            </Link>

            <Link
              href="/demo-access"
              className="demo-small-submit"
            >
              ENTER CODE
              <span>→</span>
            </Link>

          </div>

        </div>
      )}

    </div>
  );
}