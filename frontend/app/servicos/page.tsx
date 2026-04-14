import type { Metadata } from "next";
import { ServicesSection } from "@/features/services/components/servicesSection";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Conheça os serviços da HDC Host AI com foco em performance, operação e crescimento.",
};

export default function ServicesPage() {
  return <ServicesSection />;
}
