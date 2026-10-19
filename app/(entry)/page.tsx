import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function Root() {
  const lang = (await cookies()).get("language")?.value;
  redirect(lang === "fr" ? "/fr" : "/en");
}
