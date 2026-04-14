import type { Metadata } from "next";
import { AboutPage } from "@/features/about/components/aboutPage";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Entenda a proposta, valores e posicionamento da HDC Host AI.",
};

export default function AboutRoute() {
  return <AboutPage />;
}
