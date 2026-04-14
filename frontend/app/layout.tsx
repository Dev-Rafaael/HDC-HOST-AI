import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/layout/siteFooter";
import { SiteHeader } from "@/components/layout/siteHeader";


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hdchost.ai"),
  title: {
    default: "HDC Host AI | Hospedagem com performance e recomendação inteligente",
    template: "%s | HDC Host AI",
  },
  description:
    "Plataforma moderna de hospedagem com planos escaláveis, serviços gerenciados e recomendação inteligente por IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body>
        <div className="page-shell">
          <SiteHeader />
          <main className="page-content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
