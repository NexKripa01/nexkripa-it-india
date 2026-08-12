export const metadata = {
  title: "Restaurant Website Demo",
  description:
    "Explore a restaurant website demo by NexKripa featuring a modern layout, product categories, ordering flow and responsive design.",

  alternates: {
    canonical: "/demos/restaurant",
  },
};

export default function RestaurantDemoPage() {
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
        src="https://divine-choice.onrender.com/index.html"
        title="Restaurant Website Demo by NexKripa"
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