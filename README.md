# Brainrot Forwarder

Fetches brainrot entries from [brain-pro.vercel.app](https://brain-pro.vercel.app/all) and forwards them to a Discord webhook.

## Setup

1. Clone this repo.
2. Add your Discord webhook URL to Vercel's environment variables:
   - Key: `DISCORD_WEBHOOK_URL`
   - Value: your webhook URL
3. Deploy to Vercel.
4. Trigger via: `https://your-vercel-project.vercel.app/api/forward-to-discord`

## Notes

- You can adjust how many entries are forwarded by changing `entries.slice(0, 5)`.
- Add filtering, batching, or embed formatting as needed.
