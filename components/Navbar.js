"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "ABOUT", href: "/about" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "SERVICES", href: "/services" },
  { label: "CLIENTELE", href: "/clientele" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="nav-shell home-nav ref-main-nav">
        <div className="nav-inner ref-main-nav-inner">
          <Link
            href="/"
            className="brand ref-nav-brand"
            aria-label="NexKripa IT INDIA home"
            onClick={closeMenu}
          >


            <span className="brand-copy ref-nav-brand-copy">
              <strong>NexKripa</strong>
              <small>IT INDIA</small>
            </span>
          </Link>

          <button
            type="button"
            className={`ref-hamburger ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="ref-ham-top" />
            <span className="ref-ham-middle" />
            <span className="ref-ham-bottom" />
          </button>
        </div>
      </header>

      <div className={`ref-menu-overlay ${open ? "is-open" : ""}`}>
        <div className="ref-menu-bg" aria-hidden="true" />
        <div className="ref-menu-shade" aria-hidden="true" />

        <nav className="ref-menu-columns" aria-label="Main navigation">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`ref-menu-column ${
                  isActive ? "is-active" : ""
                }`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}