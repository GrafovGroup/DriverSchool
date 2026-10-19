export type School = {
  id: string;
  name: string;
  province: string;
  city: string;
  website: string;
  sourceUrl: string;
  verifiedAt: string;
  verifiedBy: string;
  approvalSource?: string;
  approvalClaim?: string;
};
export function validateSchool(
  input: unknown,
  now = Date.now(),
): input is School {
  if (!input || typeof input !== "object") return false;
  const row = input as Record<string, unknown>;
  if (
    ![
      "id",
      "name",
      "province",
      "city",
      "website",
      "sourceUrl",
      "verifiedAt",
      "verifiedBy",
    ].every(
      (k) => typeof row[k] === "string" && String(row[k]).trim().length > 0,
    )
  )
    return false;
  try {
    for (const key of [
      "website",
      "sourceUrl",
      ...(row.approvalClaim ? ["approvalSource"] : []),
    ])
      if (new URL(String(row[key])).protocol !== "https:") return false;
  } catch {
    return false;
  }
  const date = Date.parse(String(row.verifiedAt));
  return Number.isFinite(date) && date <= now && date > now - 90 * 86400000;
}
// Publication requires human source verification; no unsourced listings are shipped.
export const schools: School[] = [];
