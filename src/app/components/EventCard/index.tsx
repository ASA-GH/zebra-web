"use client";

import Link from "next/link";
import Image from "next/image";
import {
  card,
  cardImage,
  cardOverlay,
  cardBody,
  cardCategory,
  cardTitle,
  cardDates,
  cardCta,
  cardHover,
} from "./styles";

export interface EventCardProps {
  title: string;
  category: string;
  dates: string;
  image: any;
  href?: string;
}

function getImageSrc(image: string | Record<string, unknown>): string {
  if (typeof image === "string") return image;
  return (image as { src: string }).src;
}

export function EventCard({ title, category, dates, image, href }: Readonly<EventCardProps>) {
  const src = getImageSrc(image);
  const content = (
    <>
      <Image src={src} alt={title} className={cardImage} fill sizes="(max-width: 768px) 100vw, 25vw" />
      <div className={cardOverlay} />
      <div className={cardBody}>
        <span className={cardCategory}>{category}</span>
        <h3 className={cardTitle}>{title}</h3>
        <p className={cardDates}>{dates}</p>
        <span className={cardCta}>Find out more</span>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${card} ${cardHover}`}>
        {content}
      </Link>
    );
  }

  return (
    <div className={`${card} ${cardHover}`}>
      {content}
    </div>
  );
}
