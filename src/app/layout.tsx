import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpawnOS — The Operating System for Spawning AI Teams",
  description: "Stop working solo. Start spawning. Build your AI COO + 12 specialists this weekend. Production-tested infrastructure, not theory.",
  keywords: ["AI team", "OpenClaw", "AI automation", "SpawnOS", "AI COO", "solopreneur"],
  openGraph: {
    title: "SpawnOS — Build Your AI Team This Weekend",
    description: "Copy the exact AI team running a $14.2K/month business. Setup in 4 hours.",
    type: "website",
    url: "https://spawnos.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpawnOS — The Operating System for Spawning AI Teams",
    description: "Stop working solo. Start spawning.",
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
