"use client";

import { useEffect, useRef, useState } from "react";
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
  const [navbarVisible, setNavbarVisible] = useState(true);

  const pathname = usePathname();

  const lastScrollY = useRef(0);
  const hideTimer = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const isMobile = () => window.innerWidth <= 600;

    const clearHideTimer = () => {
      if (hideTimer.current) {
        window.clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }
    };

    const startHideTimer = () => {
      clearHideTimer();

      if (!isMobile()) return;

      if (window.scrollY <= 30) return;

      if (open) return;

      hideTimer.current = window.setTimeout(() => {
        setNavbarVisible(false);
      }, 2000);
    };

    const handleScroll = () => {
      if (!isMobile()) {
        setNavbarVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;
      const previousScrollY = lastScrollY.current;

      clearHideTimer();

      // Top of page
      if (currentScrollY <= 30) {
        setNavbarVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Menu open hai to navbar always visible
      if (open) {
        setNavbarVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // User scrolls UP
      if (currentScrollY < previousScrollY) {
        setNavbarVisible(true);
      }

      // User scrolls DOWN
      if (currentScrollY > previousScrollY) {
        setNavbarVisible(false);
      }

      lastScrollY.current = currentScrollY;

      // User rukne ke 2 sec baad hide
      startHideTimer();
    };

    const handleResize = () => {
      if (!isMobile()) {
        clearHideTimer();
        setNavbarVisible(true);
      }
    };

    lastScrollY.current = window.scrollY;

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    if (isMobile() && window.scrollY > 30) {
      startHideTimer();
    }

    return () => {
      clearHideTimer();

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setNavbarVisible(true);
  };

  const toggleMenu = () => {
    setNavbarVisible(true);
    setOpen((value) => !value);
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
      <header
        className={`ref-navbar ${
          navbarVisible ? "nav-visible" : "nav-hidden"
        } ${open ? "menu-open" : ""}`}
      >
        <div className="ref-navbar-inner">

          {/* BRAND */}
          <Link
            href="/"
            className="ref-nav-brand"
            onClick={closeMenu}
            aria-label="NexKripa IT INDIA Home"
          >
            <Image
              src="/new-logo.png"
              alt="NexKripa logo"
              width={72}
              height={72}
              priority
              className="ref-nav-symbol"
            />

            {/* <span className="ref-nav-wordmark">
              <strong>NexKripa</strong>

              <span className="ref-nav-subtitle">
                <i />
                IT INDIA
                <i />
              </span>
            </span> */}
          </Link>

          {/* HAMBURGER */}
          <button
            type="button"
            className={`ref-hamburger ${
              open ? "is-open" : ""
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={toggleMenu}
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