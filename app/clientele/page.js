import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Clientele | NexKripa IT INDIA",
  description:
    "Client stories and feedback for NexKripa IT INDIA.",
};

const clients = [
  {
    image: "/clients/client-01.jpg",
    initials: "C1",
    quote:
      "Working with NexKripa was smooth, clear and focused. The process stayed simple from idea to delivery.",
    name: "CLIENT 01",
    company: "YOUR CLIENT",
  },
  {
    image: "/clients/client-02.jpg",
    initials: "C2",
    quote:
      "The team understood the requirement quickly and translated it into a modern, responsive digital experience.",
    name: "CLIENT 02",
    company: "YOUR CLIENT",
  },
  {
    image: "/clients/client-03.jpg",
    initials: "C3",
    quote:
      "A reliable approach, strong design sense and attention to usability made the overall experience easy to trust.",
    name: "CLIENT 03",
    company: "YOUR CLIENT",
  },
  {
    image: "/clients/client-04.jpg",
    initials: "C4",
    quote:
      "From planning to development, communication remained clear and every stage moved forward with purpose.",
    name: "CLIENT 04",
    company: "YOUR CLIENT",
  },
  {
    image: "/clients/client-05.jpg",
    initials: "C5",
    quote:
      "The final result felt polished, responsive and aligned with the direction we wanted for our digital presence.",
    name: "CLIENT 05",
    company: "YOUR CLIENT",
  },
  {
    image: "/clients/client-06.jpg",
    initials: "C6",
    quote:
      "NexKripa brought structure to the project and helped turn a rough idea into something much more complete.",
    name: "CLIENT 06",
    company: "YOUR CLIENT",
  },
];

export default function ClientelePage() {
  return (
    <>
      <section className="client-tales-page">
        <div className="client-tales-inner">
          <Reveal>
            <div className="client-tales-heading">
              <h1>CLIENT&apos;S TALES</h1>

              <p>
                From <strong>Professionals</strong> to{" "}
                <strong>Professionals</strong>
              </p>
            </div>
          </Reveal>

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

                  <p className="client-tale-copy">{client.quote}</p>

                  <div className="client-tale-meta">
                    <h2>{client.name}</h2>
                    <span>{client.company}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}