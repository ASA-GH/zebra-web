import {
  imageSrcs,
  eventImages,
  tourImages,
  type SrcsetImage,
} from "@/app/components/HighlightsSection/srcset-images";
import { css } from "@linaria/core";

interface CustomPictureProps {
  title: string;
  cardName: string;
}

function resolveSrc(img: unknown): string {
  if (typeof img === "object" && img !== null && "src" in img) {
    return (img as { src: string }).src;
  }
  return img as string;
}

const customPicture = css`
    display: block;
    width: 100%;
    objectFit: cover;
`;

export function CustomPicture({ title, cardName}: Readonly<CustomPictureProps>) {
  const srcs = imageSrcs[cardName];
  const imgMeta = eventImages[cardName] || tourImages[cardName];
  const sources: SrcsetImage["sources"] = imgMeta?.sources ?? [];
  const alt: string = imgMeta?.alt ?? title


  return (
    <picture>
      {sources.map((s, i) => {
        const media = s.media ? { media: s.media } : undefined;
        const parts = s.sizes.split(",").map((p) => p.trim());
        const srcset = parts.map((part) => {
          const [density, size] = part.split(/\s+/);
          let key: "375w" | "768w" | "1152w";
          if (density === "1x") key = "375w";
          else if (size === "768w" || size === "576w") key = "768w";
          else key = "1152w";

          const img = srcs?.[key];
          return `${resolveSrc(img)} ${density}`;
        }).join(", ");

        return <source key={i} {...media} srcSet={srcset} />;
      })}
      <img
        src={resolveSrc(srcs?.["375w"])}
        alt={alt}
        loading="lazy"
        decoding="auto"
        className={customPicture}
      />
    </picture>
  );
}
