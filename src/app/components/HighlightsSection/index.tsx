"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { EventCard } from "@/app/components/EventCard";
import { CardCarousel } from "@/app/components/CardCarousel";
import {
  events,
  tours,
  stream as streamItems,
} from "./data";
import type { HighlightItem, StreamItem } from "./data";
import {
  section,
  sectionHeader,
  sectionTitle,
  sectionCta,
  tabList,
  tabBtn,
  carouselWrapper,
  findMore,
  findMoreCta,
  streamGrid,
  streamCard,
  streamCardHover,
  streamCardImage,
  streamCardOverlay,
  streamCardBody,
  streamCardTitle,
  streamCardMeta,
} from "./styles";

const TABS = [
  { key: "events", label: "Events" },
  { key: "tours", label: "Tours" },
  { key: "stream", label: "Stream" },
];

function getActiveTab(): string {
  if (typeof window === "undefined") return "events";
  const hash = window.location.hash?.replace("#", "");
  if (TABS.some((t) => t.key === hash)) return hash;
  return "events";
}

export function HighlightsSection() {
  const [activeTab, setActiveTab] = useState(getActiveTab);

  useEffect(() => {
    const handler = () => {
      const hash = window.location.hash?.replace("#", "");
      if (TABS.some((t) => t.key === hash)) setActiveTab(hash);
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const switchTab = (key: string) => {
    window.location.hash = key;
    setActiveTab(key);
  };

  const items = activeTab === "events" ? events : tours;
  const slides = items.map((item: HighlightItem) => (
    <EventCard key={item.title} {...item} />
  ));

  return (
    <section className={section}>
      {/* Highlights heading */}
      <div className={sectionHeader}>
        <h2 className={sectionTitle}>Highlights</h2>
        <Link href="/whats-on" className={sectionCta}>
          Find more events at the Opera House
        </Link>
      </div>

      {/* Tabs */}
      <div role="tablist" className={tabList} aria-label="Highlights categories">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={activeTab === tab.key}
            aria-controls={`panel-${tab.key}`}
            data-active={activeTab === tab.key || undefined}
            className={tabBtn}
            onClick={() => switchTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab panels */}
      {activeTab === "stream" ? (
        <div role="tabpanel" id="panel-stream">
          {/* Stream items grid (not carousel — they show 6 items) */}
          <div className={streamGrid}>
            {streamItems.map((item: StreamItem) => {
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
      ) : (
        <div role="tabpanel" id={`panel-${activeTab}`} className={carouselWrapper}>
          <CardCarousel slides={slides} />
        </div>
      )}

      {/* CTA */}
      <div className={findMore}>
        <Link href="/whats-on" className={findMoreCta}>
          Find more events at the Opera House
        </Link>
      </div>
    </section>
  );
}
