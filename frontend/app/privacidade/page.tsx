import type { Metadata } from "next";
import { PrivacyPage } from "@/features/privacy/components/privacyPage";

export const metadata: Metadata = {
  title: "Privacidade",
  description: "Resumo da política de privacidade e tratamento de dados da HDC Host AI.",
};

export default function PrivacyRoute() {
  return <PrivacyPage />;
}
