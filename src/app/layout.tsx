import type { ReactNode } from "react";
import type { Metadata } from "next";
import { css } from "@linaria/core";


// ── Font imports (bundled by Turbopack) ──────────────────────
import blackWoff2 from "@/app/assets/fonts/lineto-circular-pro-black.woff2";
import blackItalicWoff2 from "@/app/assets/fonts/lineto-circular-pro-blackitalic.woff2";
import boldWoff2 from "@/app/assets/fonts/lineto-circular-pro-bold.woff2";
import boldItalicWoff2 from "@/app/assets/fonts/lineto-circular-pro-bolditalic.woff2";
import bookWoff2 from "@/app/assets/fonts/lineto-circular-pro-book.woff2";
import bookItalicWoff2 from "@/app/assets/fonts/lineto-circular-pro-bookitalic.woff2";
import blackWoff from "@/app/assets/fonts/lineto-circular-pro-black.woff";
import blackItalicWoff from "@/app/assets/fonts/lineto-circular-pro-blackitalic.woff";
import boldWoff from "@/app/assets/fonts/lineto-circular-pro-bold.woff";
import boldItalicWoff from "@/app/assets/fonts/lineto-circular-pro-bolditalic.woff";
import bookWoff from "@/app/assets/fonts/lineto-circular-pro-book.woff";
import bookItalicWoff from "@/app/assets/fonts/lineto-circular-pro-bookitalic.woff";

// ── Font-face declarations ───────────────────────────────────
const fontFaces = css`
  @font-face {
    font-family: "LL Circular Pro";
    font-weight: 900;
    font-style: normal;
    font-display: swap;
    src: url(${blackWoff2}) format("woff2"),
         url(${blackWoff}) format("woff");
  }
  @font-face {
    font-family: "LL Circular Pro";
    font-weight: 900;
    font-style: italic;
    font-display: swap;
    src: url(${blackItalicWoff2}) format("woff2"),
         url(${blackItalicWoff}) format("woff");
  }
  @font-face {
    font-family: "LL Circular Pro";
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: url(${boldWoff2}) format("woff2"),
         url(${boldWoff}) format("woff");
  }
  @font-face {
    font-family: "LL Circular Pro";
    font-weight: 700;
    font-style: italic;
    font-display: swap;
    src: url(${boldItalicWoff2}) format("woff2"),
         url(${boldItalicWoff}) format("woff");
  }
  @font-face {
    font-family: "LL Circular Pro";
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${bookWoff2}) format("woff2"),
         url(${bookWoff}) format("woff");
  }
  @font-face {
    font-family: "LL Circular Pro";
    font-weight: 400;
    font-style: italic;
    font-display: swap;
    src: url(${bookItalicWoff2}) format("woff2"),
         url(${bookItalicWoff}) format("woff");
  }
`;

// ── Reset & base styles ──────────────────────────────────────
const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }

  body {
    font-family: "LL Circular Pro", "Inter", system-ui, -apple-system, sans-serif;
    font-weight: 400;
    color: #000;
    background: #eceae6;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
    color: inherit;
    border: none;
    background: none;
    cursor: pointer;
  }

  ul,
  ol {
    list-style: none;
  }
`;

// ── Metadata ─────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Sydney Opera House — Nothing quite like it",
  description:
    "Experience world-class performing arts at the Sydney Opera House. Explore events, tours, streams, and plan your visit.",
  metadataBase: new URL("https://www.sydneyoperahouse.com"),
  openGraph: {
    title: "Sydney Opera House — Nothing quite like it",
    description: "Experience world-class performing arts at the Sydney Opera House.",
    type: "website",
    locale: "en_AU",
  },
};

// ── Root layout ──────────────────────────────────────────────
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className={fontFaces} />
        <div className={reset} />
        {children}
      </body>
    </html>
  );
}
