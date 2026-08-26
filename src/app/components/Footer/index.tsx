import Link from "next/link";
import {
  footer,
  footerInner,
  ack,
  linksGrid,
  linkCol,
  linkColTitle,
  link,
  social,
  socialLink,
  bottom,
  bottomLinks,
  bottomLink,
  copyright,
} from "./styles";

const LINK_CATEGORIES = [
  {
    title: "What's On",
    links: [
      { label: "Events", href: "/whats-on" },
      { label: "Classical Music", href: "/whats-on?category=classical" },
      { label: "Musical Theatre", href: "/whats-on?category=musical-theatre" },
      { label: "Dance", href: "/whats-on?category=dance" },
      { label: "Opera", href: "/whats-on?category=opera" },
    ],
  },
  {
    title: "Visit",
    links: [
      { label: "Getting here", href: "/visit/getting-here" },
      { label: "Accessibility", href: "/visit/accessibility" },
      { label: "Book a tour", href: "/tours" },
      { label: "Restaurant & dining", href: "/visit/dining" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our story", href: "/about" },
      { label: "News", href: "/about/news" },
      { label: "Careers", href: "/about/careers" },
      { label: "Contact us", href: "/about/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Donate", href: "/support/donate" },
      { label: "Corporate partners", href: "/support/partners" },
      { label: "Give like it", href: "/support/give" },
    ],
  },
];

const SOCIAL = [
  { label: "Facebook", href: "https://facebook.com/sydneyoperahouse" },
  { label: "Instagram", href: "https://instagram.com/sydneyoperahouse" },
  { label: "Twitter", href: "https://twitter.com/SOHandSo" },
  { label: "YouTube", href: "https://youtube.com/sydneyoperahouse" },
  { label: "TikTok", href: "https://tiktok.com/@sydneyoperahouse" },
];

function SocialIcon({ name }: Readonly<{ name: string }>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {name === "Facebook" && <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />}
      {name === "Instagram" && <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.5" /></>}
      {name === "Twitter" && <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.5v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />}
      {name === "YouTube" && <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />}
      {name === "TikTok" && <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.13 8.13 0 005.58 2.15v-3.44a4.85 4.85 0 01-2.59-.73V6.69h2.59z" />}
    </svg>
  );
}

export function Footer() {
  return (
    <footer className={footer}>
      <div className={footerInner}>
        {/* Acknowledgement */}
        <p className={ack}>
          We acknowledge the Gadigal and Bidjigal people, the traditional custodians of the land on which the Sydney Opera House stands. We pay our respects to Elders past, present and emerging, and recognise that sovereignty was never ceded.
        </p>

        {/* Links */}
        <div className={linksGrid}>
          {LINK_CATEGORIES.map((cat) => (
            <div key={cat.title} className={linkCol}>
              <div className={linkColTitle}>{cat.title}</div>
              {cat.links.map((linkItem) => (
                <Link key={linkItem.href} href={linkItem.href} className={link}>
                  {linkItem.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Social */}
        <div className={social}>
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={socialLink}
              aria-label={s.label}
            >
              <SocialIcon name={s.label} />
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className={bottom}>
          <div className={bottomLinks}>
            <Link href="/privacy" className={bottomLink}>Privacy Policy</Link>
            <Link href="/cookie" className={bottomLink}>Cookie Policy</Link>
            <Link href="/accessibility-statement" className={bottomLink}>Accessibility</Link>
            <Link href="/sitemap" className={bottomLink}>Sitemap</Link>
          </div>
          <div className={copyright}>
            &copy; {new Date().getFullYear()} Sydney Opera House. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
