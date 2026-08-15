"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BotMessageSquare } from "lucide-react";

const menuItems = [
  { label: "ABOUT", href: "/about" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "SERVICES", href: "/services" },
  { label: "CLIENTELE", href: "/clientele" },
  { label: "DEMOS", href: "/demos" },
  { label: "DEMO ACCESS", href: "/demo-access" },
  { label: "PRICING", href: "/pricing" },
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

      if (currentScrollY <= 30) {
        setNavbarVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (open) {
        setNavbarVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY < previousScrollY) {
        setNavbarVisible(true);
      }

      if (currentScrollY > previousScrollY) {
        setNavbarVisible(false);
      }

      lastScrollY.current = currentScrollY;

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

  const openAssistant = () => {
    setNavbarVisible(true);

    window.dispatchEvent(
      new Event("open-nexkripa-chatbot")
    );
  };

  const checkActive = (href) => {
    if (href === "/services") {
      return (
        pathname === "/services" ||
        pathname.startsWith("/services/")
      );
    }

    if (href === "/demos") {
      return (
        pathname === "/demos" ||
        pathname.startsWith("/demos/")
      );
    }

    if (href === "/demo-access") {
      return pathname === "/demo-access";
    }

    if (href === "/pricing") {
      return pathname === "/pricing";
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
          </Link>

          {/* RIGHT SIDE ACTIONS */}
          <div className="ref-nav-actions">

            {/* MOBILE AI ASSISTANT */}
            <button
  type="button"
  className="nk-mobile-assistant"
  onClick={() => {
    window.dispatchEvent(
      new Event("open-nexkripa-chatbot")
    );
  }}
  aria-label="Open NexKripa AI Assistant"
>
  <BotMessageSquare size={26} strokeWidth={2} />
</button>

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