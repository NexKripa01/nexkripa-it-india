"use client";

import { useEffect, useMemo, useState } from "react";

const slides = [
  {
    word: "CREATORS",
    image: "/hero/hero1.png",
    position: "50% 45%",
  },
  {
    word: "BOLD",
    image: "/hero/hero2.png",
    position: "50% 48%",
  },
  {
    word: "DARING",
    image: "/hero/hero3.png",
    position: "50% 50%",
  },
  {
    word: "ACHIEVERS",
    image: "/hero/hero4.png",
    position: "50% 50%",
  },
  {
    word: "INNOVATORS",
    image: "/hero/hero5.png",
    position: "50% 50%",
  },
];

export default function HomeHeroSlider() {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const current = useMemo(() => slides[index], [index]);

  const changeSlide = (nextIndex) => {
    if (transitioning) return;

    setTransitioning(true);

    window.setTimeout(() => {
      setIndex(nextIndex);
    }, 330);

    window.setTimeout(() => {
      setTransitioning(false);
    }, 700);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTransitioning(true);

      window.setTimeout(() => {
        setIndex((value) => (value + 1) % slides.length);
      }, 330);

      window.setTimeout(() => {
        setTransitioning(false);
      }, 700);
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section
      className={`reference-home-hero ${
        transitioning ? "liquid-transition" : ""
      }`}
    >
      {/* MAIN IMAGE */}
      <div
        className="reference-slide reference-main-slide"
        style={{
          backgroundImage: `url("${current.image}")`,
          backgroundPosition: current.position,
        }}
      />

      {/* LIQUID DISTORTION COPIES */}
      <div
        className="liquid-layer liquid-layer-one"
        style={{
          backgroundImage: `url("${current.image}")`,
          backgroundPosition: current.position,
        }}
      />

      <div
        className="liquid-layer liquid-layer-two"
        style={{
          backgroundImage: `url("${current.image}")`,
          backgroundPosition: current.position,
        }}
      />

      <div
        className="liquid-layer liquid-layer-three"
        style={{
          backgroundImage: `url("${current.image}")`,
          backgroundPosition: current.position,
        }}
      />

      <div className="reference-slide-shadow" />
      <div className="reference-film-grain" />

      {/* TEXT */}
      <div className="reference-copy">
        <div className="reference-heading">
          <span className="reference-fixed-title">
            YES! WE ARE
          </span>

          <span className="reference-word-stage">
            <span className="reference-changing-word">
              {current.word}
            </span>
          </span>
        </div>
      </div>

      {/* PROGRESS */}
      <div className="reference-progress">
        {slides.map((slide, i) => (
          <button
            key={slide.word}
            type="button"
            className={i === index ? "active" : ""}
            onClick={() => changeSlide(i)}
            aria-label={`Show ${slide.word}`}
          />
        ))}
      </div>
    </section>
  );
}