import { events, HighlightItem, tours } from "../data";
import {
  card,
  cardCategory,
  cardContent,
  cardDates,
  cardHeading,
  cardImage,
  standardPanel
} from "./styles";
import Link from "next/link";
import { CustomPicture } from "@/app/components/HighlightsSection/StandardPanel/CustomPicture";

export function StandardPanel({ contentName }: Readonly<{ contentName: string }>) {
  const items: HighlightItem[] = contentName === "events" ? events : tours

  return (
    <ul className={standardPanel} role="tabpanel" id={`panel-${contentName}`}>
      {items.map(({ title, category, dates, cardName, textColor, bgColor }) => {

        return (
          <li key={title} className={card} role="presentation" style={{ backgroundColor: bgColor }}>
            <Link href="/public">
              <div className={cardImage}>
                <CustomPicture title={title} cardName={cardName}/>
              </div>
              <div className={cardContent} style={{ color: textColor }}>
                <p className={cardCategory}>{category}</p>
                <h3 className={cardHeading}>{title}</h3>
                <p className={cardDates}>{dates}</p>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>

  );
}
