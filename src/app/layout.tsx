import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zebra Web",
  description: "A modern web extension for a better browsing experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
