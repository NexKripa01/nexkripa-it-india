export const metadata = {
  title: "Portfolio Website Demo",

  description:
    "Explore a portfolio website demo by NexKripa featuring a modern layout, project showcases, and responsive design.",

  alternates: {
    canonical: "/demos/portfolio",
  },

  robots: {
    index: false,
    follow: true,
  },
};

export default function PortfolioDemoPage() {
  return (
    <main
      style={{
        width: "100%",
        height: "100vh",
        background: "#000",
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://vijayshukla-portfolio.vercel.app/"
        title="Portfolio Website Demo by NexKripa"
        style={{
          width: "100%",
          height: "100%",
          border: "0",
          display: "block",
        }}
        allowFullScreen
      />
    </main>
  );
}