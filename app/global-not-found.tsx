import "./globals.css";
import Link from "next/link";
export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <main className="section">
          <p>404</p>
          <h1>Page not found / Page introuvable</h1>
          <p>
            <Link href="/en">ENGLISH HOME</Link> ·{" "}
            <Link href="/fr">ACCUEIL EN FRANÇAIS</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
