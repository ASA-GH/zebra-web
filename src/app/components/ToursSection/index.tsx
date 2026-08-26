"use client";

import Link from "next/link";
import { tours } from "@/app/components/HighlightsSection/data";
import { EventCard } from "@/app/components/EventCard";
import { CardCarousel } from "@/app/components/CardCarousel";
import {
  section,
  sectionHeader,
  sectionTitle,
  sectionCta,
  carouselWrapper,
  ctaBanner,
  ctaBannerLink,
} from "./styles";

export function ToursSection() {
  const slides = tours.map((item) => (
    <EventCard key={item.title} {...item} />
  ));

  return (
    <section className={section}>
      <div className={sectionHeader}>
        <h2 className={sectionTitle}>Explore the House</h2>
        <Link href="/tours" className={sectionCta}>
          View all tours
        </Link>
      </div>
      <div className={carouselWrapper}>
        <CardCarousel slides={slides} />
      </div>
      <div className={ctaBanner}>
        <Link href="/tours" className={ctaBannerLink}>
          Book a tour
        </Link>
      </div>
    </section>
  );
}
