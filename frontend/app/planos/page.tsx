import type { Metadata } from "next";
import { PricingSection } from "@/features/plans/components/pricingSection";

export const metadata: Metadata = {
  title: "Planos",
  description: "Compare planos de hospedagem e receba uma sugestão personalizada com IA.",
};

export default function PlansPage() {
  return <PricingSection />;
}
