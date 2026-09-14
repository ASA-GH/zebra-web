"use client";

import Link from "next/link";
import {
  section,
  sectionTitle,
  logoList,
  logoItem,
  logoImg,
  partners,
  partnersLink, logoBlock, partnersBlock,
} from "./styles";
import { Container } from "@/app/components/ui/Container";

const PARTNERS = [
  {
    name: "Australian Chamber Orchestra",
    href: "/australian-chamber-orchestra",
    image: "/partners/ACO_Brandmark_Wrodmark_Attached_Black_Small_1.svg"
  },
  { name: "The Australian Ballet", href: "/the-australian-ballet", image: "/partners/the-australian-ballet.svg" },
  { name: "Bangarra Dance Theatre", href: "/bangarra-dance-theatre", image: "/partners/bangarra-dance-theatre.svg" },
  { name: "Bell Shakespeare", href: "/bell-shakespeare", image: "/partners/bell-shakespeare.svg" },
  { name: "Opera Australia", href: "/opera-australia", image: "/partners/opera-australia.svg" },
  {
    name: "Sydney Philharmonia Choirs",
    href: "/sydney-philharmonia-choirs",
    image: "/partners/sydney-phillharmonic-orchestra.svg"
  },
  {
    name: "Sydney Symphony Orchestra",
    href: "/sydney-symphony-orchestra",
    image: "/partners/sydney-symphony-orchestra.svg"
  },
  {
    name: "Sydney Theatre Company",
    href: "/sydney-theatre-company",
    image: "/partners/SydneyTheatreCompany_Wordmark_Primary_BLACK_1.svg"
  },
];

export function ResidentCompanies() {
  return (
    <section className={section}>
      <Container customClass={logoBlock}>
        <h2 className={sectionTitle}>The Sydney Opera House is proud home to:</h2>
        <ul className={logoList}>
          {PARTNERS.map((partner) => (
            <li key={partner.name} className={logoItem}>
              <Link href={partner.href}>
                <img src={partner.image} alt={partner.name} className={logoImg}/>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      <Container customClass={partnersBlock}>
        <p className={partners}>
          The Sydney Opera House thanks its family of{" "}
          <Link href="/about-us/our-partners" className={partnersLink}>
            Corporate Partners
          </Link>{" "}
          and{" "}
          <Link href="/support/our-supporters" className={partnersLink}>
            Donors
          </Link>{" "}
          for their support.
        </p>
      </Container>
    </section>
  );
}
