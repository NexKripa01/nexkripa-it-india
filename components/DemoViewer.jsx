"use client";

import DemoWatermark from "@/components/DemoWatermark";

export default function DemoViewer({
  title = "Website Demo",
  demoUrl,
}) {
  return (
    <>
      <main
        style={{
          width: "100%",
          height: "100vh",
          background: "#000",
          overflow: "hidden",
        }}
      >
        <iframe
          src={demoUrl}
          title={`${title} by NexKripa`}
          style={{
            width: "100%",
            height: "100%",
            border: "0",
            display: "block",
          }}
          allowFullScreen
        />
      </main>

      <DemoWatermark />
    </>
  );
}