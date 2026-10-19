import type { Inquiry } from "./inquiry";
import { setNotification } from "./storage";
export async function notifyInquiry(id: string, value: Inquiry) {
  const endpoint = process.env.INQUIRY_WEBHOOK_URL;
  const token = process.env.INQUIRY_WEBHOOK_TOKEN;
  if (!endpoint) {
    setNotification(id, "stored");
    return;
  }
  try {
    const url = new URL(endpoint);
    if (url.protocol !== "https:" || !token)
      throw new Error("Invalid notification configuration");
    const response = await fetch(url, {
      method: "POST",
      redirect: "error",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "Idempotency-Key": id,
      },
      body: JSON.stringify({
        id,
        lang: value.lang,
        subject:
          value.lang === "fr"
            ? "Nouvelle demande de formation"
            : "New training inquiry",
        inquiry: value,
      }),
      signal: AbortSignal.timeout(6000),
    });
    setNotification(id, response.ok ? "delivered" : "failed");
  } catch {
    setNotification(id, "failed");
  }
}
