"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const slides = [
  { word: "LOUD", image: "/hero/scene-1.jpg", position: "50% 45%" },
  { word: "AMAZING", image: "/hero/scene-2.jpg", position: "50% 48%" },
  { word: "DARING", image: "/hero/scene-3.jpg", position: "50% 50%" },
  { word: "BOLD", image: "/hero/scene-4.jpg", position: "50% 50%" },
  { word: "CREATORS", image: "/hero/scene-5.jpg", position: "50% 50%" },
];

export default function HomeHeroSlider() {
  const [index, setIndex] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const current = useMemo(() => slides[index], [index]);

  useEffect(() => {
    let glitchTimer;

    const timer = window.setInterval(() => {
      setGlitch(true);
      glitchTimer = window.setTimeout(() => {
        setIndex((value) => (value + 1) % slides.length);
        setGlitch(false);
      }, 430);
    }, 5000);

    return () => {
      window.clearInterval(timer);
      if (glitchTimer) window.clearTimeout(glitchTimer);
    };
  }, []);

  return (
    <section
      className={`reference-home-hero ${glitch ? "is-glitching" : ""}`}
      aria-label="NexKripa IT INDIA introduction"
    >
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={current.image}
          className="reference-slide"
          style={{
            backgroundImage: `url(${current.image})`,
            backgroundPosition: current.position,
          }}
          initial={{ opacity: 0, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>

      <div className="reference-slide-shadow" />
      <div className="reference-film-grain" />
      <div className="reference-glitch reference-glitch-a" style={{ backgroundImage: `url(${current.image})` }} />
      <div className="reference-glitch reference-glitch-b" style={{ backgroundImage: `url(${current.image})` }} />
      <div className="reference-glitch reference-glitch-c" style={{ backgroundImage: `url(${current.image})` }} />

      <div className="reference-copy">
        <div className="reference-heading">
          <span className="reference-fixed-title">YES!  WE  ARE  </span>
          <span className="reference-word-stage">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={current.word}
                className="reference-changing-word"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.38 }}
              >
                {current.word}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>
      </div>

      <div className="reference-progress" aria-hidden="true">
        {slides.map((slide, i) => (
          <button
            key={slide.word}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
            aria-label={`Show ${slide.word} slide`}
          />
        ))}
      </div>
    </section>
  );
}