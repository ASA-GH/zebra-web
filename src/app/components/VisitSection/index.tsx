import Link from "next/link";
import { visitCards } from "@/app/components/HighlightsSection/data";
import {
  section,
  sectionTitle,
  cardGrid,
  card,
  cardContent,
  cardHeading,
  cardDescription,
  cardImage,
} from "./styles";
import { Container } from "@/app/components/ui/Container";
import { VisitImage } from "@/app/components/VisitSection/VisitImage";

export function VisitSection() {
  return (
    <section className={section}>
      <Container>
        <h2 className={sectionTitle}>Plan your visit</h2>
        <ul className={cardGrid}>
          {visitCards.map(({ title, cardName, description }) => (
            <li key={title} className={card}>
              <Link href="/">
                <div className={cardImage}>
                  <VisitImage title={title} cardName={cardName}/>
                </div>
                <div className={cardContent}>
                  <h3 className={cardHeading}>{title}</h3>
                  <p className={cardDescription}>{description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
