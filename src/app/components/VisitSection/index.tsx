"use client";

import Link from "next/link";
import Image from "next/image";
import sohTour from "@/app/assets/styles-16x9/soh-1hrtour-sydneysiders.jpg.webp";
import audioDesc from "@/app/assets/styles-16x9/soh-audio-description-vivid-201716x9.jpg.webp";
import hl from "@/app/assets/styles-16x9/soh-hl-2017-174-credit-hamiltonlund-1600x900.jpg.webp";
import {
  section,
  sectionTitle,
  cardGrid,
  visitCard,
  visitCardHover,
  visitCardImage,
  visitCardOverlay,
  visitCardBody,
  visitCardTitle,
  visitCardDesc,
} from "./styles";

interface VisitCardData {
  title: string;
  desc: string;
  href: string;
  image: unknown;
}

const CARDS: VisitCardData[] = [
  { title: "Getting here", desc: "Directions, parking, public transport, amenities and nearby venues.", href: "/visit/getting-here", image: sohTour },
  { title: "Accessibility", desc: "Services, programs and accessible performance options for visitors.", href: "/visit/accessibility", image: audioDesc },
  { title: "Tours", desc: "Guided tours through the world-famous architecture and behind the scenes.", href: "/tours", image: hl },
];

export function VisitSection() {
  return (
    <section className={section}>
      <h2 className={sectionTitle}>Plan your visit</h2>
      <div className={cardGrid}>
        {CARDS.map((card) => {
          const imgSrc = typeof card.image === "string" ? card.image : (card.image as { src: string }).src;
          return (
            <Link key={card.title} href={card.href} className={`${visitCard} ${visitCardHover}`}>
              <Image src={imgSrc} alt={card.title} className={visitCardImage} fill />
              <div className={visitCardOverlay} />
              <div className={visitCardBody}>
                <h3 className={visitCardTitle}>{card.title}</h3>
                <p className={visitCardDesc}>{card.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
