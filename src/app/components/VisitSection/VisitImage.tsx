import { visitImages } from "@/app/components/HighlightsSection/srcset-images";
import { css } from "@linaria/core";

const image = css`
    display: block;
    width: 100%;
    objectFit: cover;
`;

function resolveSrc(img: unknown): string {
  if (typeof img === "object" && img !== null && "src" in img) {
    return (img as { src: string }).src;
  }
  return img as string;
}

export function VisitImage({ title, cardName }: Readonly<{ title: string; cardName: string }>) {
  const srcs = visitImages[cardName];
  const src576 = resolveSrc(srcs["576w"]);
  const src992 = resolveSrc(srcs["992w"]);
  return (
    <img
      src={src576}
      srcSet={`${src576} 1x, ${src992} 2x`}
      alt={title}
      loading="lazy"
      decoding="auto"
      className={image}
    />
  );
}