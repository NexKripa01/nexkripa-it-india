"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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

  const closeMenu = () => {
    setOpen(false);
  };

  const checkActive = (href) => {
    if (href === "/services") {
      return (
        pathname === "/services" ||
        pathname.startsWith("/services/")
      );
    }

    return pathname === href;
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="ref-navbar">
        <div className="ref-navbar-inner">

          {/* BRAND */}
          <Link
            href="/"
            className="ref-nav-brand"
            onClick={closeMenu}
            aria-label="NexKripa IT INDIA Home"
          >
            <Image
              src="/n-logo.png"
              alt="NexKripa logo"
              width={72}
              height={72}
              priority
              className="ref-nav-symbol"
            />

            <span className="ref-nav-wordmark">
              <strong>exKripa</strong>

              <span className="ref-nav-subtitle">
                <i />
                IT INDIA
                <i />
              </span>
            </span>
          </Link>

          {/* HAMBURGER */}
          <button
            type="button"
            className={`ref-hamburger ${
              open ? "is-open" : ""
            }`}
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

      {/* FULL SCREEN MENU */}
      <div
        className={`ref-menu-overlay ${
          open ? "is-open" : ""
        }`}
      >
        <div
          className="ref-menu-bg"
          aria-hidden="true"
        />

        <div
          className="ref-menu-shade"
          aria-hidden="true"
        />

        <nav
          className="ref-menu-columns"
          aria-label="Main navigation"
        >
          {menuItems.map((item) => {
            const isActive = checkActive(item.href);

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