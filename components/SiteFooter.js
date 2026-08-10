"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

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
    <footer className="ref-footer">

      <div className="ref-footer-top">

        {/* START PROJECT */}
        <div className="ref-footer-project">
          <p>START A PROJECT</p>

          <h2>Write to Us</h2>

          <a href="mailto:nexkripa@gmail.com">
            nexkripa@gmail.com
          </a>
        </div>

        {/* ADDRESS */}
        <div className="ref-footer-block">
          <h3>ADDRESS</h3>

          <p>
            NexKripa IT INDIA
            <br />
            Andheri (W), Mumbai - 400058
          </p>
        </div>

        {/* QUICK LINKS */}
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


      {/* SOCIAL MEDIA */}
      <div className="ref-footer-social">

        <a
          href="https://www.instagram.com/nexkripa/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/company/137494032/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/NexKripa01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

      </div>


      {/* FOOTER BOTTOM */}
      <div className="ref-footer-bottom">

        <p>
          Copyright © 2026 NexKripa IT INDIA. All Rights Reserved.
        </p>

        <div>
          <Link href="/privacy-policy">
            Privacy Policy
          </Link>
        </div>

      </div>

    </footer>
  );
}