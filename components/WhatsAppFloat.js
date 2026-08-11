"use client";

import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppFloat() {
  const phone = "919142506087";

  const message =
    "Hi NexKripa IT INDIA, I would like to discuss a project.";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with NexKripa IT INDIA on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}