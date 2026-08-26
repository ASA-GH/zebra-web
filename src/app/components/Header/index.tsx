"use client";

import Link from "next/link";
import { useState } from "react";
import searchIcon from "@/app/assets/icons/icon-search.svg";
import closeIcon from "@/app/assets/icons/streamline-icon-close.svg";
import {
  header,
  headerInner,
  logo,
  logoBrand,
  logoTagline,
  nav,
  navLink,
  navAction,
  searchBtn,
  mobileToggle,
  hamburgerLine,
  mobileMenu,
  mobileNav,
  mobileNavLink,
  mobileAction,
  mobileClose,
  responsive,
} from "./styles";

const NAV_LINKS = [
  { href: "/whats-on", label: "What's On" },
  { href: "/tours", label: "Tours" },
  { href: "/stream", label: "Stream" },
  { href: "/visit", label: "Visit" },
  { href: "/read", label: "Read" },
  { href: "/listen", label: "Listen" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${header} ${responsive}`} aria-label="Main navigation">
      <div className={headerInner}>
        {/* Logo */}
        <Link href="/" className={logo} aria-label="Sydney Opera House home">
          <span className={logoBrand}>Sydney Opera House</span>
          <span className={logoTagline}>Nothing quite like it</span>
        </Link>

        {/* Desktop nav */}
        <nav className={nav} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={navLink}>
              {link.label}
            </Link>
          ))}
          <Link href="/whats-on" className={navAction}>
            Book
          </Link>
        </nav>

        {/* Right side: search + mobile toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button className={searchBtn} aria-label="Search">
            <img src={searchIcon} alt="" width={20} height={20} />
          </button>
          <button
            className={`${mobileToggle}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className={hamburgerLine} />
            <span className={hamburgerLine} />
            <span className={hamburgerLine} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <dialog
        className={`${mobileMenu} ${menuOpen ? "open" : ""}`}
        aria-modal="true"
        aria-label="Mobile navigation"
        open
      >
        <button className={mobileClose} aria-label="Close menu" onClick={() => setMenuOpen(false)}>
          <img src={closeIcon} alt="" width={24} height={24} />
        </button>
        <nav className={mobileNav}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/whats-on" className={mobileAction} onClick={() => setMenuOpen(false)}>
            Book
          </Link>
        </nav>
      </dialog>
    </header>
  );
}
