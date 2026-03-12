export type Tier = "starter" | "system";

export const PRODUCTS: Record<Tier, {
  tier: Tier;
  name: string;
  headline: string;
  priceCents: number;
  priceLabel: string;
  description: string;
  subject: string;
  downloadEnvVar: "STARTER_PRODUCT_URL" | "SYSTEM_PRODUCT_URL";
}> = {
  starter: {
    tier: "starter",
    name: "SpawnOS Starter — AI Team Playbook",
    headline: "SpawnOS Playbook",
    priceCents: 1700,
    priceLabel: "$17",
    description: "Standalone playbook to structure your first AI team fast.",
    subject: "🚀 Your SpawnOS Playbook is Ready",
    downloadEnvVar: "STARTER_PRODUCT_URL",
  },
  system: {
    tier: "system",
    name: "SpawnOS System — Complete AI Operating System",
    headline: "SpawnOS System",
    priceCents: 6700,
    priceLabel: "$67",
    description: "Complete AI operating system for your AI COO and specialist team.",
    subject: "🚀 Your SpawnOS System is Ready — Let's Build",
    downloadEnvVar: "SYSTEM_PRODUCT_URL",
  },
};

export function getBaseUrl(origin?: string | null) {
  return origin || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}
