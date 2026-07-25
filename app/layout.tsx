import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eric Bundy, Esq. | Attorney at Law",
  description:
    "Strategic legal counsel for businesses and individuals. Licensed in Pennsylvania and serving clients nationwide where permitted.",
  metadataBase: new URL("https://www.ericbundylaw.com"),
  openGraph: {
    title: "Eric Bundy, Esq. | Attorney at Law",
    description:
      "Practical legal solutions, clear communication, and dedicated advocacy.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
