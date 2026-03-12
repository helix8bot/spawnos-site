import { PRODUCTS, type Tier } from "@/lib/commerce";

type PurchaseEmailInput = {
  tier: Tier;
  customerEmail: string;
  customerName?: string | null;
  siteUrl: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getName(name?: string | null) {
  if (!name) return "there";
  return name.split(" ")[0] || "there";
}

function renderEmail({ tier, customerName, siteUrl }: Omit<PurchaseEmailInput, "customerEmail">) {
  const product = PRODUCTS[tier];
  const firstName = escapeHtml(getName(customerName));
  const downloadUrl = process.env[product.downloadEnvVar];
  const safeDownloadUrl = downloadUrl ? escapeHtml(downloadUrl) : `${escapeHtml(siteUrl)}#pricing`;
  const upgradeUrl = `${escapeHtml(siteUrl)}#pricing`;

  if (tier === "starter") {
    return {
      subject: product.subject,
      html: `
        <div style="background:#09090b;padding:32px;font-family:Inter,Arial,sans-serif;color:#e4e4e7;line-height:1.6">
          <div style="max-width:640px;margin:0 auto;background:#18181b;border:1px solid #27272a;border-radius:24px;padding:32px">
            <p style="margin:0 0 16px;color:#f4f4f5;font-size:18px">Hey ${firstName}! Your SpawnOS AI Team Playbook is ready.</p>
            <p style="margin:0 0 20px;color:#a1a1aa">Use the link below to grab your files and start building your AI team.</p>
            <p style="margin:0 0 24px"><a href="${safeDownloadUrl}" style="display:inline-block;background:#ef4444;color:#fff;text-decoration:none;padding:14px 20px;border-radius:999px;font-weight:700">Download your Playbook</a></p>
            <p style="margin:0 0 10px;color:#f4f4f5;font-weight:700">Quick start:</p>
            <ol style="margin:0 0 24px 20px;padding:0;color:#a1a1aa">
              <li>Review the team structure and role map.</li>
              <li>Choose the first bottleneck you want your AI team to own.</li>
              <li>Install the workflow and start delegating immediately.</li>
            </ol>
            <p style="margin:0 0 24px;color:#a1a1aa">Want the full system? <a href="${upgradeUrl}" style="color:#f87171">Upgrade for $50 more</a>.</p>
            <p style="margin:0;color:#71717a">SpawnOS</p>
          </div>
        </div>`,
    };
  }

  return {
    subject: product.subject,
    html: `
      <div style="background:#09090b;padding:32px;font-family:Inter,Arial,sans-serif;color:#e4e4e7;line-height:1.6">
        <div style="max-width:640px;margin:0 auto;background:#18181b;border:1px solid #27272a;border-radius:24px;padding:32px">
          <p style="margin:0 0 16px;color:#f4f4f5;font-size:18px">Hey ${firstName}! Your complete SpawnOS AI Operating System is ready.</p>
          <p style="margin:0 0 20px;color:#a1a1aa">Everything you need to install your AI COO and specialist team is ready below.</p>
          <p style="margin:0 0 24px"><a href="${safeDownloadUrl}" style="display:inline-block;background:#ef4444;color:#fff;text-decoration:none;padding:14px 20px;border-radius:999px;font-weight:700">Download your SpawnOS System</a></p>
          <p style="margin:0 0 10px;color:#f4f4f5;font-weight:700">What to do next:</p>
          <ol style="margin:0 0 24px 20px;padding:0;color:#a1a1aa">
            <li>Install the core operating system files.</li>
            <li>Set up your AI COO and specialist roles.</li>
            <li>Run your first delegation loop and make the system yours.</li>
          </ol>
          <p style="margin:0 0 24px;color:#a1a1aa">Want us to build it for you? <a href="https://launch.spawnos.io" style="color:#f87171">Apply for custom setup</a>.</p>
          <p style="margin:0;color:#71717a">SpawnOS</p>
        </div>
      </div>`,
  };
}

export async function sendPurchaseEmail(input: PurchaseEmailInput) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY is not set. Skipping purchase email.");
    return { skipped: true };
  }

  const email = renderEmail(input);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "SpawnOS <build@spawnos.io>",
      to: [input.customerEmail],
      subject: email.subject,
      html: email.html,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend error ${response.status}: ${errorText}`);
  }

  return response.json();
}
