"use client";

import {
  broadcastImages,
} from "@/app/components/HighlightsSection/srcset-images";
import { css } from "@linaria/core";


interface StreamPictureProps {
  title: string;
  cardName: string;
}

function resolveSrc(img: unknown): string {
  if (typeof img === "object" && img !== null && "src" in img) {
    return (img as { src: string }).src;
  }
  return img as string;
}

const streamPicture = css`
    display: block;
    width: 100%;
    objectFit: cover;
`;

export function StreamPicture({ title, cardName }: Readonly<StreamPictureProps>) {
  const imgObj = broadcastImages[cardName];
  // 16:9 uses two breakpoints: 576w and 992w
  const sources = [
    { media: "(min-width: 992px)", sizes: { "576w": imgObj["576w"], "992w": imgObj["992w"] } },
    { sizes: { "576w": imgObj["576w"] } },
  ];

  return (
    <picture>
      {sources.map((s, i) => {
        const media = s.media ? { media: s.media } : undefined;
        const entries = Object.entries(s.sizes as Record<string, unknown>);
        const srcset = entries
          .map(([size, img]) => `${resolveSrc(img)} 1x`)
          .join(", ");
        return <source key={i} {...media} srcSet={srcset}/>;
      })}
      <img
        src={resolveSrc(imgObj["576w"])}
        alt={title}
        loading="lazy"
        decoding="auto"
        className={streamPicture}
      />
    </picture>
  );
}
