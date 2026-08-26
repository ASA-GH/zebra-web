"use client";

import Link from "next/link";
import Image from "next/image";
import streamThumb from "@/app/assets/styles-16x9/Stream-Free-Cameron-Winter-Thumbnails_3840_x_2160.jpg.webp";
import readImg from "@/app/assets/styles-16x9/IATH-hero-web-2560x1440.jpg.webp";
import listenImg from "@/app/assets/styles-16x9/stream-marlon-williams-16-9.jpg.webp";
import {
  section,
  sectionTitle,
  cardGrid,
  deepDiveCard,
  deepDiveCardHover,
  deepDiveCardImage,
  deepDiveCardOverlay,
  deepDiveCardBody,
  deepDiveCardTitle,
  deepDiveCardDesc,
} from "./styles";

interface DeepDiveItem {
  title: string;
  desc: string;
  href: string;
  image: unknown;
}

const ITEMS: DeepDiveItem[] = [
  { title: "Stream", desc: "Virtual front row — livestreams, on-demand content and originals.", href: "/stream", image: streamThumb },
  { title: "Read", desc: "Stories, community and behind-the-scenes from productions.", href: "/read", image: readImg },
  { title: "Listen", desc: "Podcasts and playlists from the Opera House.", href: "/listen", image: listenImg },
];

export function ReadListenSection() {
  return (
    <section className={section}>
      <h2 className={sectionTitle}>Stream, read &amp; listen</h2>
      <div className={cardGrid}>
        {ITEMS.map((item) => {
          const imgSrc = typeof item.image === "string" ? item.image : (item.image as { src: string }).src;
          return (
            <Link key={item.title} href={item.href} className={`${deepDiveCard} ${deepDiveCardHover}`}>
              <Image src={imgSrc} alt={item.title} className={deepDiveCardImage} fill />
              <div className={deepDiveCardOverlay} />
              <div className={deepDiveCardBody}>
                <h3 className={deepDiveCardTitle}>{item.title}</h3>
                <p className={deepDiveCardDesc}>{item.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
