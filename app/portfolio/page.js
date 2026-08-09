import Link from "next/link";
import Reveal from "@/components/Reveal";

const projects = [
  {
    title: "PujaDham",
    category: "Website Development",
    image: "/portfolio/pujadham.jpg",
    href: "https://www.pujadham.co.in/",
    external: true,
  },
  {
    title: "NexKripa IT INDIA",
    category: "Brand Experience",
    image: "/portfolio/nexkripa.jpg",
    href: "/",
  },
  {
    title: "AI Flow",
    category: "AI Automation",
    image: "/portfolio/ai-flow.jpg",
    href: "/contact",
  },
  {
    title: "EduCore",
    category: "Education Website",
    image: "/portfolio/educore.jpg",
    href: "/contact",
  },
  {
    title: "ShopGrid",
    category: "E-Commerce",
    image: "/portfolio/shopgrid.jpg",
    href: "/contact",
  },
];

export const metadata = {
  title: "Portfolio",
  description: "Selected work by NexKripa IT INDIA.",

  alternates: {
    canonical: "/portfolio",
  },
};

function ProjectCard({ project }) {
  const content = (
    <article className="pf-project-card">
      <div
        className="pf-project-image"
        style={{
          backgroundImage: `url("${project.image}")`,
        }}
      />

      <div className="pf-project-overlay" />

      <div className="pf-project-content">
        <span className="pf-project-category">
          {project.category}
        </span>

        <h3>{project.title}</h3>
      </div>
    </article>
  );

  if (project.external) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="pf-project-link"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={project.href}
      className="pf-project-link"
    >
      {content}
    </Link>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <section className="portfolio-reference-page">
        <div className="portfolio-reference-inner">

          <Reveal>
            <div className="pf-heading-wrap">
              <span className="pf-kicker">
                OUR PORTFOLIO
              </span>

              <h1>
                A Highlight Reel
                <br />
                By Our <em>Finest</em>
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="pf-latest-wrap">
              <h2>LATEST PROJECTS</h2>

              <div className="pf-project-slider">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                  />
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
            <Link
              href="/portfolio"
              className="pf-outline-btn"
            >
              ALL WEBSITES
            </Link>
          </div>

          <Reveal>
            <div className="pf-excellence">
              <h3>
                EXPECT NOTHING BUT EXCELLENCE
              </h3>

              <Link
                href="/about"
                className="pf-outline-btn"
              >
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