import Link from "next/link";
import { deepDiveCards } from "@/app/components/HighlightsSection/data";
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
import { ReadListenImage } from "@/app/components/ReadListenSection/ReadListenImage";

export function ReadListenSection() {
  return (
    <section className={section}>
      <Container>
        <h2 className={sectionTitle}>Stream, read & listen</h2>
        <ul className={cardGrid}>
          {deepDiveCards.map(({ title, cardName, description }) => (
            <li key={title} className={card}>
              <Link href="/">
                <div className={cardImage}>
                  <ReadListenImage title={title} cardName={cardName}/>
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
