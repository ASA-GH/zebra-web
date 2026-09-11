"use client";

import Link from "next/link";
import {
  imageSrcs,
  eventImages,
  tourImages,
  type SrcsetImage,
} from "@/app/components/HighlightsSection/srcset-images";
import {
  card,
  cardContent,
  cardImage,
  cardCategory,
  cardHeading,
  cardDates,
} from "./styles";

function resolveSrc(img: unknown): string {
  if (typeof img === "object" && img !== null && "src" in img) {
    return (img as { src: string }).src;
  }
  return img as string;
}

export interface EventCardProps {
  title: string;
  category: string;
  dates: string;
  /** Basename to look up srcset derivatives in srcset-images.ts */
  cardName: string;
  alt?: string;
  href?: string;
}

export function EventCard({ title, category, dates, cardName: cn, alt, href }: Readonly<EventCardProps>) {
  const altText = alt ?? title;
  const srcs = imageSrcs[cn];
  const imgMeta = eventImages[cn] || tourImages[cn];
  const sources: SrcsetImage["sources"] = imgMeta?.sources ?? [];

  const picture = (
    <picture>
      {sources.map((s, i) => {
        const media = s.media ? { media: s.media } : undefined;
        const parts = s.sizes.split(",").map((p) => p.trim());
        const srcset = parts.map((part) => {
          const [density, size] = part.split(/\s+/);
          let key: "375w" | "768w" | "1152w";
          if (density === "1x") key = "375w";
          else if (size === "768w" || size === "576w") key = "768w";
          else key = "1152w";

          const img = srcs?.[key];
          return `${resolveSrc(img)} ${density}`;
        }).join(", ");

        return <source key={i} {...media} srcSet={srcset} />;
      })}
      <img
        src={resolveSrc(srcs?.["375w"])}
        alt={altText}
        loading="lazy"
        decoding="auto"
        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
      />
    </picture>
  );

  const content = (
    <div className={cardContent}>
      <p className={cardCategory}>{category}</p>
      <h3 className={cardHeading}>{title}</h3>
      <p className={cardDates}>{dates}</p>
    </div>
  );

  const inner = (
    <>
      {content}
      <div className={cardImage}>{picture}</div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={card}>
        {inner}
      </Link>
    );
  }

  return (
    <div className={card}>
      {inner}
    </div>
  );
}
