import Link from "next/link";
import Reveal from "@/components/Reveal";

const projects = [
  {
    title: "PujaDham",
    category: "Website Development",
    className: "pf-img-1",
    href: "https://www.pujadham.co.in/",
    external: true,
  },
  {
    title: "NexKripa IT INDIA",
    category: "Brand Experience",
    className: "pf-img-2",
    href: "/",
  },
  {
    title: "AI Flow",
    category: "AI Automation",
    className: "pf-img-3",
    href: "/contact",
  },
  {
    title: "EduCore",
    category: "Education Website",
    className: "pf-img-4",
    href: "/contact",
  },
  {
    title: "ShopGrid",
    category: "E-Commerce",
    className: "pf-img-5",
    href: "/contact",
  },
];

export const metadata = {
  title: "Portfolio | NexKripa IT INDIA",
  description: "Selected work by NexKripa IT INDIA.",
};

function ProjectCard({ project }) {
  const content = (
    <article className={`pf-project-card ${project.className}`}>
      <div className="pf-project-overlay">
        <span>{project.category}</span>
        <h3>{project.title}</h3>
      </div>
    </article>
  );

  if (project.external) {
    return (
      <a href={project.href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={project.href}>{content}</Link>;
}

export default function PortfolioPage() {
  return (
    <>
      <section className="pf-reference-page">
        <div className="pf-reference-hero">
          <Reveal>
            <div className="pf-reference-title">
              <h1>OUR PORTFOLIO</h1>
              <p>
                A <strong>Highlight</strong> Reel By Our Finest
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="pf-latest-wrap">
              <h2>LATEST PROJECTS</h2>

              <div className="pf-project-slider">
                {projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}

                <button
                  className="pf-slider-arrow"
                  type="button"
                  aria-label="More projects"
                >
                  ›
                </button>
              </div>
            </div>
          </Reveal>

          <div className="pf-all-websites-row">
            <Link href="/portfolio" className="pf-outline-btn">
              ALL WEBSITES
            </Link>
          </div>

          <Reveal>
            <div className="pf-excellence">
              <h3>EXPECT NOTHING BUT EXCELLENCE</h3>
              <Link href="/about" className="pf-outline-btn">
                KNOW MORE
              </Link>
            </div>
          </Reveal>

          <div className="pf-page-navigation">
            <Link href="/">
              <span>←</span> HOME
            </Link>

            <div className="pf-page-nav-line" />

            <Link href="/services">
              SERVICES <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}