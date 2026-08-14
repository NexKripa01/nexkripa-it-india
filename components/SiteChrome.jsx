"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export default function SiteChrome({ children }) {
  const pathname = usePathname();

  const isDemoViewer = pathname?.startsWith("/demo-view");

  return (
    <>
      {!isDemoViewer && <Navbar />}

      <main>{children}</main>

      {!isDemoViewer && <SiteFooter />}
    </>
  );
}