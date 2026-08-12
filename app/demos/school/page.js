export const metadata = {
  title: "School / Institute Website Demo",

  description:
    "Explore a school or institute website demo by NexKripa featuring a modern layout, program listings, and responsive design.",

  alternates: {
    canonical: "/demos/school",
  },

  robots: {
    index: false,
    follow: true,
  },
};

export default function SchoolDemoPage() {
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
        src="https://schoolsite-aabua72.public.builtwithrocket.new/"
        title="School / Institute Website Demo by NexKripa"
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