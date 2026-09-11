"use client";

import Link from "next/link";
import {
  footer,
  footerInner,
  footerNav,
  link,
  newsletterSection,
  newsletterLink,
  social,
  socialLink,
  socialIcon,
  address,
  phone,
  bottomNav,
  bottomLink,
} from "./styles";

const FOOTER_LINKS = [
  { label: "Support us", href: "/support" },
  { label: "Become an Insider Member", href: "/insiders" },
  { label: "About us", href: "/about-us" },
  { label: "Contact us", href: "/contact-us" },
  { label: "Tourism Trade Partners", href: "/tourism-trade" },
  { label: "Media", href: "/media" },
  { label: "Brand use requests", href: "/brand-use-requests" },
  { label: "Venue hire", href: "/venue-hire" },
  { label: "Gift vouchers", href: "/gift-vouchers" },
  { label: "Careers", href: "/about-us/careers-and-other-opportunities/careers" },
  { label: "Our story", href: "/our-story" },
];

const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/sydneyoperahouse" },
  { label: "Twitter", href: "https://twitter.com/sydoperahouse" },
  { label: "Instagram", href: "https://www.instagram.com/sydneyoperahouse" },
  { label: "YouTube", href: "https://www.youtube.com/sydneyoperahouse" },
  { label: "TripAdvisor", href: "https://www.tripadvisor.com.au/Attraction_Review-g255060-d257278-Reviews-Sydney_Opera_House-Sydney_New_South_Wales.html" },
  { label: "WeiBo", href: "https://weibo.com/sydoperahouse" },
];

function SocialIcon({ name }: Readonly<{ name: string }>) {
  return (
    <svg className={socialIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {name === "Facebook" && <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />}
      {name === "Twitter" && <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.5v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />}
      {name === "Instagram" && <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.5" /></>}
      {name === "YouTube" && <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />}
      {name === "TripAdvisor" && <path d="M13.5 1.5C13.5.7 12.8 0 12 0S10.5.7 10.5 1.5 11.2 3 12 3s1.5-.7 1.5-1.5zm-1 11.5v-3.5l-4 2 4 2v1.5h-4a1 1 0 01-1-1v-6a1 1 0 011-1h4V7.5a1 1 0 00-1.5-.87l-4 2A1 1 0 007 9.5v6a1 1 0 001 1h4a1 1 0 001-1v-1.5zm6 0v-3.5l-4 2 4 2v1.5h-4a1 1 0 01-1-1v-6a1 1 0 011-1h4V7.5a1 1 0 00-1.5-.87l-4 2A1 1 0 0013 9.5v6a1 1 0 001 1h4a1 1 0 001-1v-1.5z" />}
      {name === "WeiBo" && <path d="M10.04 14.1a3.5 3.5 0 002.5 1c2.2 0 3.76-1.6 3.76-3.5h-2.1c0 .9-.7 1.5-1.6 1.5-.8 0-1.4-.6-1.4-1.4 0-.1 0-.2.01-.3h3.5c.1-.5.2-1 .2-1.5C14.9 5.5 13.7 4 12 4c-2.2 0-3.7 1.6-3.7 3.5 0 1.4.7 2.4 1.7 2.9v-.2a1.4 1.4 0 01-1.2-.8c-.2-.4-.1-.9.2-1.2l-1.4-.9c-.6.6-.8 1.4-.8 2.3 0 2 1.5 3.5 3.5 3.5zm-1.6-1.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm8.3 3.5l-1.4-.5a2 2 0 00-.7-.1c-.4 0-.7.3-.7.7s.3.7.7.7c.2 0 .3 0 .5.1l1.5.5c.4.1.8-.1.9-.5.1-.4-.1-.8-.5-.9zM20 10a2 2 0 100 4 2 2 0 000-4z" />}
    </svg>
  );
}

export function Footer() {
  return (
    <footer className={footer}>
      <div className={footerInner}>
        {/* Footer menu */}
        <nav className={footerNav} aria-label="Footer menu">
          {FOOTER_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className={link}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Newsletter */}
        <div className={newsletterSection}>
          <Link href="/subscribe" className={newsletterLink}>
            Sign up to our newsletter
          </Link>
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

        {/* Acknowledgement */}
        <address className={address}>
          The Sydney Opera House honours our First Nations by fostering a shared sense of belonging for all Australians, and we acknowledge the Gadigal, traditional custodians of Tubowgule, the land on which the Opera House stands.
          <br />
          <br />
          Sydney Opera House
          <br />
          Bennelong Point
          <br />
          Sydney
          <br />
          NSW 2000
          <br />
          Australia
          <br />
          <br />
          General enquiries
          <br />
          <a href="tel:1300764849" className={phone}>
            1300 764 849
          </a>
        </address>

        {/* Footer end */}
        <nav className={bottomNav} aria-label="Footer End">
          <Link href="/terms" className={bottomLink}>Terms</Link>
          <Link href="/about-us/how-we-work/governance-policies-and-corporate-information/policies/customer-privacy-statement" className={bottomLink}>Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}
