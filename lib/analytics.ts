export type ConversionEvent =
  | "inquiry_started"
  | "inquiry_saved"
  | "call_clicked";
// Integration boundary: no network request and no personal data. Default-deny.
export function track(event: ConversionEvent) {
  try {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("ds-analytics-consent") === "yes"
    )
      window.dispatchEvent(
        new CustomEvent("driverschool:conversion", { detail: { event } }),
      );
  } catch {
    /* Storage-disabled browsers remain opted out. */
  }
}
