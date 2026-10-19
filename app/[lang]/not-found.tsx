"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Missing() {
  const french = usePathname().startsWith("/fr");
  return (
    <section className="section">
      <p>404</p>
      <h1>{french ? "Page introuvable" : "Page not found"}</h1>
      <p>
        <Link href={french ? "/fr" : "/en"}>
          {french ? "RETOUR À L’ACCUEIL" : "BACK TO HOME"}
        </Link>
      </p>
    </section>
  );
}
