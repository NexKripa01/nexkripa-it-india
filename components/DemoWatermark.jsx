"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DemoWatermark() {
  const pathname = usePathname();

  // Main demos listing page par watermark nahi
  if (!pathname.startsWith("/demos/")) {
    return null;
  }

  return (
    <>
      <div className="nexkripa-demo-bar">
        <span>
          This is a demo website by <strong>NexKripa</strong>
        </span>

        <Link href="/contact">
          GET A WEBSITE LIKE THIS
          <span>↗</span>
        </Link>
      </div>

      <div className="nexkripa-demo-watermark">
        <span>Website Demo</span>
        <strong>by NexKripa</strong>
      </div>
    </>
  );
}