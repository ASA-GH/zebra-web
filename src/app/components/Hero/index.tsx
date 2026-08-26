"use client";

import Link from "next/link";
import Image from "next/image";
import heroPlaceholder from "@/app/assets/collaborodam/hero-placeholder.jpg";
import {
  hero,
  heroMedia,
  heroOverlay,
  heroContent,
  heroTag,
  heroTitle,
  heroDesc,
  heroCta,
  responsive,
} from "./styles";

export function Hero() {
  return (
    <section className={`${hero} ${responsive}`} aria-label="Hero">
      {/* Background image placeholder */}
      <Image
        src={heroPlaceholder}
        alt=""
        className={heroMedia}
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />

      <div className={heroOverlay} />

      <div className={heroContent}>
        <span className={heroTag}>Live</span>
        <h1 className={heroTitle}>Sydney Opera House</h1>
        <p className={heroDesc}>
          Experience world-class performing arts in one of the world&apos;s most iconic venues.
        </p>
        <Link href="/whats-on" className={heroCta}>
          What&apos;s On
        </Link>
      </div>
    </section>
  );
}
