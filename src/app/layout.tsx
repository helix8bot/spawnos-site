import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spawnos.io"),
  title: "SpawnOS Audit — Installed AI Operating System for Founder-Led Businesses",
  description:
    "Book a SpawnOS Audit to assess the founder bottleneck and map an installed AI chief-of-staff layer for follow-up, reporting, delegation, communication triage, and business memory.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "SpawnOS Audit",
    description:
      "Installed AI operating system for founder-led businesses. Book your SpawnOS Audit.",
    type: "website",
    url: "https://spawnos.io",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "SpawnOS Audit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpawnOS Audit",
    description:
      "Installed AI operating system for founder-led businesses. Book your SpawnOS Audit.",
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
