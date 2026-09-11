import Link from "next/link";

import {
  mobileMenu,
  mobileNav,
  mobileNavLink,
} from "./styles";

const MOBILE_NAV_LINKS = [
  { href: "/whats-on", label: "What's on" },
  { href: "/visit", label: "Visit" },
  { href: "/learn", label: "Learn" },
  { href: "/venue-hire", label: "Venue hire" },
  { href: "/our-story", label: "Our story" },
  { href: "/stream", label: "Stream, read & listen" },
  { href: "/support", label: "Support us" },
  { href: "/insiders", label: "Become an Insider member" },
  { href: "/subscribe", label: "Subscribe to our newsletter" },
  { href: "/about-us", label: "About us" },
  { href: "/about-us/careers-and-other-opportunities/careers", label: "Careers" },
  { href: "/contact-us", label: "Contact us" },
] as const;

export function MobileMenu({ menuOpen, setMenuOpen }: Readonly<{ menuOpen: boolean, setMenuOpen: Function }>) {

  return (
    <nav
      className={`${mobileMenu} ${menuOpen ? "open" : ""}`}
      aria-label="Header navigation"
      role="navigation"
    >
      <div className={mobileNav}>
        {MOBILE_NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={mobileNavLink}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
