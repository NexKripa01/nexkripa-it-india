"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import DemoViewer from "@/components/DemoViewer";

function DemoViewContent() {
  const searchParams = useSearchParams();
  const demoUrl = searchParams.get("url");

  if (!demoUrl) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#07090b",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Demo link not found.
      </main>
    );
  }

  return <DemoViewer title="Website Demo" demoUrl={demoUrl} />;
}

export default function DemoViewPage() {
  return (
    <Suspense
      fallback={
        <main
          style={{
            minHeight: "100vh",
            background: "#07090b",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Loading demo...
        </main>
      }
    >
      <DemoViewContent />
    </Suspense>
  );
}