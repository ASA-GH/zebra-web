"use client";

import Link from "next/link";
import aco from "@/app/assets/partners/ACO_Brandmark_Wrodmark_Attached_Black_Small_1_(1).svg";
import australianBallet from "@/app/assets/partners/the-australian-ballet.svg";
import bangarra from "@/app/assets/partners/bangarra-dance-theatre.svg";
import bellShakespeare from "@/app/assets/partners/bell-shakespeare.svg";
import operaAustralia from "@/app/assets/partners/opera-australia.svg";
import sydneyPhil from "@/app/assets/partners/sydney-phillharmonic-orchestra.svg";
import sydneySymphony from "@/app/assets/partners/sydney-symphony-orchestra.svg";
import sydneyTheatreCompany from "@/app/assets/partners/SydneyTheatreCompany_Wordmark_Primary_BLACK_1.svg";
import {
  section,
  sectionInner,
  sectionTitle,
  logoGrid,
  logoItem,
  logoLink,
  logoImg,
  partnersText,
  partnersLink,
} from "./styles";

const PARTNERS = [
  { name: "Australian Chamber Orchestra", href: "/australian-chamber-orchestra", image: aco },
  { name: "The Australian Ballet", href: "/the-australian-ballet", image: australianBallet },
  { name: "Bangarra Dance Theatre", href: "/bangarra-dance-theatre", image: bangarra },
  { name: "Bell Shakespeare", href: "/bell-shakespeare", image: bellShakespeare },
  { name: "Opera Australia", href: "/opera-australia", image: operaAustralia },
  { name: "Sydney Philharmonia Choirs", href: "/sydney-philharmonia-choirs", image: sydneyPhil },
  { name: "Sydney Symphony Orchestra", href: "/sydney-symphony-orchestra", image: sydneySymphony },
  { name: "Sydney Theatre Company", href: "/sydney-theatre-company", image: sydneyTheatreCompany },
];

export function ResidentCompanies() {
  return (
    <section className={section}>
      <div className={sectionInner}>
        <h2 className={sectionTitle}>The Sydney Opera House is proud home to:</h2>
        <div className={logoGrid}>
          {PARTNERS.map((partner) => (
            <div key={partner.name} className={logoItem}>
              <Link href={partner.href} className={logoLink}>
                <img src={partner.image} alt={partner.name} className={logoImg} />
              </Link>
            </div>
          ))}
        </div>
        <p className={partnersText}>
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
      </div>
    </section>
  );
}
