import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { HighlightsSection } from "@/app/components/HighlightsSection";
import { ToursSection } from "@/app/components/ToursSection";
import { StreamSection } from "@/app/components/StreamSection";
import { VisitSection } from "@/app/components/VisitSection";
import { ReadListenSection } from "@/app/components/ReadListenSection";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HighlightsSection />
        <ToursSection />
        <StreamSection />
        <VisitSection />
        <ReadListenSection />
      </main>
      <Footer />
    </>
  );
}
