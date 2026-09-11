import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { HighlightsSection } from "@/app/components/HighlightsSection";
import { VisitSection } from "@/app/components/VisitSection";
import { ReadListenSection } from "@/app/components/ReadListenSection";
import { ResidentCompanies } from "@/app/components/ResidentCompanies";
import { Footer } from "@/app/components/Footer";
import { BlackSection } from "@/app/components/BlackSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HighlightsSection />
        <VisitSection />
        <ReadListenSection />
        <BlackSection />
        <ResidentCompanies />
      </main>
      <Footer />
    </>
  );
}
