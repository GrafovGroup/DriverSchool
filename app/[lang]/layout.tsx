import "../globals.css";
import { notFound } from "next/navigation";
import { Header, Footer } from "@/components/shell";
import { isLang } from "@/lib/content";
import { verifiedPhone, origin } from "@/lib/site";
export const metadata = {
  metadataBase: new URL(origin),
  title: { default: "DriverSchool.ca", template: "%s | DriverSchool.ca" },
  icons: { icon: "/icon.svg" },
};
export default async function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={`${lang}-CA`}>
      <body>
        <Header lang={lang} phone={verifiedPhone()} />
        <main id="main">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
