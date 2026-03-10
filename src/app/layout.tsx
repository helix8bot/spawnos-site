import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpawnOS — The Operating System for Spawning AI Teams",
  description: "Stop working solo. Start spawning. Build your AI COO + 12 specialists this weekend. Production-tested infrastructure, not theory.",
  keywords: ["AI team", "OpenClaw", "AI automation", "SpawnOS", "AI COO", "solopreneur"],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "SpawnOS — Build Your Own AI Team",
    description: "Copy the exact AI team running a $14.2K/month business. Setup in 4 hours. 12 specialist agents, 125 workspace files, production-tested.",
    type: "website",
    url: "https://spawnos-site.vercel.app",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "SpawnOS — Build Your Own AI Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpawnOS — Build Your Own AI Team",
    description: "Stop working solo. Start spawning. 12 AI agents. One weekend setup.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain antialiased">
        {children}
      </body>
    </html>
  );
}
