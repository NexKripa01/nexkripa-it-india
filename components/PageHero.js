"use client";
import { motion } from "motion/react";

export default function PageHero({ eyebrow, title, accent, description }) {
  return (
    <section className="page-hero section-pad">
      <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }}>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}<br/><em>{accent}</em></h1>
        {description && <p className="lead">{description}</p>}
      </motion.div>
      <div className="hero-orbit" aria-hidden="true"><span/><span/><span/></div>
    </section>
  );
}
