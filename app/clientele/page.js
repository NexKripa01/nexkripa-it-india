import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Clientele",
  description:
    "Client stories, testimonials and feedback for NexKripa IT INDIA.",

  alternates: {
    canonical: "/clientele",
  },
};

const clients = [
  {
    image: "/clients/pujadham-client.png",
    initials: "C1",
    quote:
      "We are very happy with the PujaDham website developed by NexKripa IT INDIA. The team understood our requirements well and delivered a professional, smooth and easy-to-use website.",
    name: "Jayprakash Shukla",
    company: "PujaDham",
  },

  // Future client
  // {
  //   image: "/clients/client-02.jpg",
  //   initials: "C2",
  //   quote:
  //     "The team understood the requirement quickly and translated it into a modern, responsive digital experience.",
  //   name: "CLIENT 02",
  //   company: "YOUR CLIENT",
  // },
];

export default function ClientelePage() {
  return (
    <section className="client-tales-page">
      <div className="client-tales-inner">

        {/* HEADING */}
        <Reveal>
          <div className="client-tales-heading">
            <h1>CLIENT&apos;S TALES</h1>

            <p>
              From <strong>Professionals</strong> to{" "}
              <strong>Professionals</strong>
            </p>
          </div>
        </Reveal>

        {/* CLIENT CARDS */}
        <div className="client-tales-grid">
          {clients.map((client, index) => (
            <Reveal key={client.name} delay={index * 0.05}>
              <article className="client-tale-card">

                <div className="client-tale-visual">
                  <span className="client-tale-quote">“</span>

                  <div className="client-tale-avatar">
                    {client.image ? (
                      <img
                        src={client.image}
                        alt={client.name}
                        className="client-tale-image"
                      />
                    ) : (
                      <span>{client.initials}</span>
                    )}
                  </div>
                </div>

                <p className="client-tale-copy">
                  {client.quote}
                </p>

                <div className="client-tale-meta">
                  <h2>{client.name}</h2>
                  <span>{client.company}</span>
                </div>

              </article>
            </Reveal>
          ))}

          {/* CTA CARD */}
          <Reveal delay={0.15}>
            <Link
              href="/contact"
              className="client-tale-card client-tale-cta-card"
              aria-label="Start a project with NexKripa IT INDIA"
            >
              <div className="client-tale-visual">
                <span className="client-tale-quote">↗</span>

                <div className="client-tale-avatar">
                  <span>+</span>
                </div>
              </div>

              <p className="client-tale-copy">
                Have a project, idea or business you want to take digital?
                Let&apos;s create something meaningful together.
              </p>

              <div className="client-tale-meta">
                <h2>CLICK TO BE OUR CLIENTELE</h2>
                <span>START A PROJECT</span>
              </div>
            </Link>
          </Reveal>
        </div>

      </div>
    </section>
  );
}