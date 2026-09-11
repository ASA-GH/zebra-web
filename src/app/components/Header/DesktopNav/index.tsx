import Link from "next/link";
import { navLink, desktopNav } from "./styles";

const NAV_LINKS = [
  { href: "/whats-on", label: "What's on" },
  { href: "/visit", label: "Visit" },
] as const;

export function DesktopNav() {

  return (
    <div className={desktopNav} aria-label="Primary">
      {NAV_LINKS.map((link) => (
        <Link key={link.href} href={link.href} className={navLink}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}
