"use client";

import { useEffect, useState } from "react";

import { TABS } from "./data";
import {
  section,
  sectionTitle,
} from "./styles";
import { Container } from "@/app/components/ui/Container";
import { TabList } from "@/app/components/HighlightsSection/TabList";
import { StreamPanel } from "@/app/components/HighlightsSection/StreamPanel";
import { StandardPanel } from "@/app/components/HighlightsSection/StandardPanel";
import { FindMore } from "@/app/components/HighlightsSection/FindMore";

const findMoreText: Record<string, string> = {
  events: "Find more events",
  stream: "Stream"
}

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
  const text = findMoreText[activeTab]
  return (
    <section className={section}>
      <Container>
        <h2 className={sectionTitle}>Highlights</h2>
        <TabList activeTab={activeTab} switchTab={switchTab}/>
        { activeTab === "events" && <StandardPanel contentName="events" /> }
        { activeTab === "tours" && <StandardPanel contentName="tours" /> }
        { activeTab === "stream" && <StreamPanel/> }
        { text && <FindMore text={text}/> }
      </Container>
    </section>
  );
}
