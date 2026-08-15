"use client";

import { useRef, useState } from "react";

export default function DemoAccessPage() {
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputsRef = useRef([]);

  const handleChange = (index, value) => {
    const cleanValue = value.replace(/\D/g, "").slice(-1);

    const updated = [...digits];
    updated[index] = cleanValue;

    setDigits(updated);
    setError("");

    if (cleanValue && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (
      event.key === "Backspace" &&
      !digits[index] &&
      index > 0
    ) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();

    const pasted = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 4);

    if (!pasted) return;

    const updated = ["", "", "", ""];

    pasted.split("").forEach((digit, index) => {
      updated[index] = digit;
    });

    setDigits(updated);
    setError("");

    const focusIndex = Math.min(pasted.length, 3);
    inputsRef.current[focusIndex]?.focus();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const accessCode = digits.join("");

    if (accessCode.length !== 4) {
      setError("Please enter your complete 4-digit code.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/demo-access", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          accessCode,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to verify access code."
        );
      }

      if (!data.demoUrl) {
        throw new Error(
          "Demo link is not available for this code."
        );
      }

      /*
        Backend se jis user ke code ke saath
        jo exact demoUrl save hai,
        wahi open hoga.
      */

      window.location.href = `/demo-view?url=${encodeURIComponent(
  data.demoUrl
)}`;

    } catch (err) {
      setError(
        err.message || "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="demo-access-page">
      <section className="demo-access-shell">
        <div className="demo-access-inner">

          <div className="demo-access-line" />

          <span className="demo-access-kicker">
            NEXKRIPA / DEMO ACCESS
          </span>

          <h1>
            ENTER CODE.
          </h1>

          <p className="demo-access-text">
            Enter the 4-digit access code provided
            by NexKripa to unlock your requested demo.
          </p>

          <form
            className="demo-access-form"
            onSubmit={handleSubmit}
          >

            <div
              className="demo-code-inputs"
              onPaste={handlePaste}
            >
              {digits.map((digit, index) => (
                <input
                  key={index}

                  ref={(element) => {
                    inputsRef.current[index] = element;
                  }}

                  type="text"
                  inputMode="numeric"
                  maxLength={1}

                  value={digit}

                  onChange={(event) =>
                    handleChange(
                      index,
                      event.target.value
                    )
                  }

                  onKeyDown={(event) =>
                    handleKeyDown(
                      index,
                      event
                    )
                  }

                  aria-label={`Digit ${index + 1}`}
                />
              ))}
            </div>

            {error && (
              <p className="demo-access-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="demo-access-submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="demo-access-spinner" />
                  VERIFYING...
                </>
              ) : (
                <>
                  VERIFY & VIEW DEMO
                  <span>→</span>

                
                </>
              )}
            </button>

          </form>

          <p className="demo-access-note">
            Each demo code is intended for one-time access.
          </p>

        </div>
      </section>
    </main>
  );
}