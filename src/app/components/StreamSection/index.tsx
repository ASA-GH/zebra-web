"use client";

import Link from "next/link";
import { stream as streamItems } from "@/app/components/HighlightsSection/data";
import {
  section,
  sectionHeader,
  sectionTitle,
  sectionCta,
  carouselWrapper,
  streamCard,
  streamCardHover,
  streamCardImage,
  streamCardOverlay,
  streamCardBody,
  streamCardTitle,
  streamCardMeta,
} from "./styles";

export function StreamSection() {
  return (
    <section className={section}>
      <div className={sectionHeader}>
        <h2 className={sectionTitle}>Watch, listen, stream</h2>
        <Link href="/stream" className={sectionCta}>
          View all streams
        </Link>
      </div>
      <div className={carouselWrapper}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {streamItems.map((item) => {
            const imgSrc = typeof item.image === "string" ? item.image : (item.image as { src: string }).src;
            return (
              <div key={item.title} className={`${streamCard} ${streamCardHover}`}>
                <img src={imgSrc} alt={item.title} className={streamCardImage} />
                <div className={streamCardOverlay} />
                <div className={streamCardBody}>
                  <h3 className={streamCardTitle}>{item.title}</h3>
                  <p className={streamCardMeta}>
                    {item.genres.join(", ")} · {item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
