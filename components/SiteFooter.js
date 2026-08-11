"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
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

  // Home page par footer hide rahega
  if (pathname === "/") return null;

  return (
    <footer className="ref-footer">

      {/* FOOTER TOP */}
      <div className="ref-footer-top">

        {/* LOGO + START PROJECT */}
        <div className="ref-footer-project">

          <Link
            href="/"
            className="ref-footer-logo"
            aria-label="NexKripa IT INDIA Home"
          >
            <Image
              src="/n-logo.png"
              alt="NexKripa IT INDIA Logo"
              width={170}
              height={60}
              className="ref-footer-logo-image"
            />
          </Link>

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

        {/* Instagram */}
        <a
          href="https://www.instagram.com/nexkripa/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="NexKripa Instagram"
        >
          <FaInstagram />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/137494032/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="NexKripa LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/NexKripa01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="NexKripa GitHub"
        >
          <FaGithub />
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com/@nexkripaitindia?si=D2UFGY-VRipIfZw6"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="NexKripa YouTube"
        >
          <FaYoutube />
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