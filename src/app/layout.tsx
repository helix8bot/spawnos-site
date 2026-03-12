import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spawnos-site.vercel.app"),
  title: "SpawnOS — Stop Working Solo. Start Spawning the AI Team That Runs Your Business.",
  description:
    "Install SpawnOS and copy the exact framework built to run e-commerce brands and agencies doing $100K+ per month.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "SpawnOS",
    description:
      "Stop working solo. Start spawning the AI team that runs your business.",
    type: "website",
    url: "https://spawnos-site.vercel.app",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "SpawnOS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpawnOS",
    description:
      "Stop working solo. Start spawning the AI team that runs your business.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
