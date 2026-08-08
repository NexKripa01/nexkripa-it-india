"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const quickLinks = [
  ["Contact Us", "/contact"],
  ["Services", "/services"],
  ["Clientele", "/clientele"],
  ["About Us", "/about"],
  ["Portfolio", "/portfolio"],
];

export default function SiteFooter() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <footer className="ref-site-footer">
      <div className="ref-footer-grid">
        <div className="ref-footer-block">
          <h3>START A PROJECT</h3>
          <p>Write to Us</p>
          <a href="mailto:hello@nexkripa.com">nexkripa@gmail.com</a>
        </div>

        <div className="ref-footer-block">
          <h3>ADDRESS</h3>
          <p>
            NexKripa IT INDIA
            <br />
            Andheri (W), Mumbai - 400066
          </p>
        </div>

        <div className="ref-footer-block ref-footer-links-block">
          <h3>QUICK LINKS</h3>

          <div className="ref-footer-links">
            {quickLinks.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="ref-footer-social">
        <a href="#" aria-label="Facebook">f</a>
        <a href="#" aria-label="Instagram">◎</a>
        <a href="#" aria-label="LinkedIn">in</a>
        <a href="#" aria-label="YouTube">▶</a>
      </div>

      <div className="ref-footer-bottom">
        <p>
          Copyright © 2026 NexKripa IT INDIA. All Rights Reserved.
        </p>

        <div>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}