"use client";

import Link from "next/link";
import heroPoster from "@/app/assets/collaborodam/hero-placeholder.jpg";
import {
  hero,
  heroVideo,
  heroContent,
  // heroTag,
  // heroTitle,
  // heroDesc,
  heroCta, heroContainer,
  // responsive,
} from "./styles";

// Local HLS stream (1200×400, ~45s, H.264 High + AAC, 29.97fps)
// Downloaded from www.sydneyoperahouse.com (LookatMe asset 1141504)
// No breakpoint-dependent variants — single resolution served to all screen sizes
const HERO_HLS = "/videos/hero-video/hero.m3u8";

export function Hero() {
  return (
    <section className={hero} aria-label="Hero">
      <div className={heroContainer}>
        <video
          className={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroPoster.src}
        >
          <source src={HERO_HLS} type="application/x-mpegURL"/>
        </video>
        <div className={heroContent}>
          <Link href="/whats-on" className={heroCta}>
            Explore what’s on
          </Link>
        </div>
      </div>
    </section>
  );
}
