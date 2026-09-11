import type { ReactNode } from "react";
import type { Metadata } from "next";

import "./globals.css";


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

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
