"use client";

import { useRef } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function TeamSlider({ members }) {
  const sliderRef = useRef(null);

  const goToNext = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = Array.from(slider.children);
    if (!cards.length) return;

    const nextIndex = (index + 1) % cards.length;
    const nextCard = cards[nextIndex];

    slider.scrollTo({
      left: nextCard.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className="nk-team-slider-shell">
      <div className="nk-team-grid" ref={sliderRef}>
        {members.map((member, index) => (
          <Reveal key={member.name} delay={0.12 + index * 0.08}>
            <article className="nk-team-card">
              <div className="nk-team-card-image">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role} at NexKripa IT INDIA`}
                  fill
                  sizes="(max-width: 700px) 86vw, 50vw"
                />

                <div className="nk-team-card-shade" />

                <span className="nk-team-card-number">
                  {member.number}
                </span>

                <div className="nk-team-card-content">
                  <span className="nk-team-card-role">
                    {member.role}
                  </span>

                  <h3>{member.name}</h3>

                  <p className="nk-team-card-work">
                    {member.work}
                  </p>
                </div>

              </div>

              <button
                type="button"
                className="nk-team-card-arrow"
                aria-label={`Show next team member after ${member.name}`}
                onClick={() => goToNext(index)}
              >
                <span aria-hidden="true">→</span>
              </button>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}