import { stream } from "../data";
import type { StreamItem } from "../data";
import {
  streamPanel,
  streamCard,
  streamCardContent,
  streamCardHeading,
  streamCardDescription,
  streamCardCategory,
  streamCardImage,
  streamCardList
} from "./styles";
import { StreamPicture } from "@/app/components/HighlightsSection/StreamPanel/StreamPicture";
import Link from "next/link";

export function StreamPanel() {

  return (
    <ul className={streamPanel} role="tabpanel" id="panel-stream">
      {stream.map((item: StreamItem) => (
        <li key={item.title} className={streamCard}>
          <Link href="/public">
            <div className={streamCardImage}>
              <StreamPicture title={item.title} cardName={item.cardName}/>
            </div>
            <div className={streamCardContent}>
              <h3 className={streamCardHeading}>{item.title}</h3>
              <p className={streamCardDescription}>{item.description}</p>
              <ul className={streamCardList}>
                {[item.type, ...item.genres, item.price].map((category) => (
                  <li key={category} className={streamCardCategory}>{category}</li>
                ))}
              </ul>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
