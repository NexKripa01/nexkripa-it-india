"use client";

import { usePathname } from "next/navigation";

export default function DemoWatermark() {
  const pathname = usePathname();

  if (!pathname.startsWith("/demos/")) {
    return null;
  }

  return (
    <div className="demo-by-nexkripa">
      <span>Demo by</span>
      <strong>NexKripa</strong>
    </div>
  );
}