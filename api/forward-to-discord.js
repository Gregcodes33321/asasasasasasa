export default async function handler(req, res) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) return res.status(500).json({ error: "Missing DISCORD_WEBHOOK_URL env variable" });

  try {
    const response = await fetch("https://brain-pro.vercel.app/all");
    const json = await response.json();
    const entries = JSON.parse(json.objects[0].content);

    const latest = entries.slice(0, 5); // Adjust how many entries to forward

    for (const entry of latest) {
      const payload = {
        content: `🧠 **${entry.brainrotName}** (${entry.rarity})\n💰 Value: ${entry.value}\n📍 Base: ${entry.base}\n🕒 Timestamp: ${entry.timestamp}`
      };

      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    }

    res.status(200).json({ message: "Forwarded to Discord successfully" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Failed to forward data" });
  }
}
