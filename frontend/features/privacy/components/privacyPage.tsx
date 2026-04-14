import { SectionHeading } from "@/components/ui/sectionHeading";

const policyItems = [
  {
    title: "Coleta de dados",
    description:
      "Coletamos apenas as informações necessárias para contato, contratação, suporte e melhoria da experiência do produto.",
  },
  {
    title: "Uso das informações",
    description:
      "Os dados são usados para processar solicitações, personalizar recomendações e oferecer atendimento eficiente.",
  },
  {
    title: "Segurança e retenção",
    description:
      "Aplicamos boas práticas de proteção, revisão de acesso e retenção compatível com necessidade operacional e obrigação legal.",
  },
  {
    title: "Direitos do usuário",
    description:
      "Você pode solicitar atualização, exportação ou remoção de dados pessoais sempre que aplicável.",
  },
];

export function PrivacyPage() {
  return (
    <section className="app-container py-16 md:py-24">
      <SectionHeading
        eyebrow="Privacidade"
        title="Tratamento responsável de dados e transparência sobre uso."
        description="Esta página resume a forma como informações pessoais são tratadas na experiência HDC Host AI. Ajuste o texto jurídico final conforme a política oficial do negócio."
      />

      <div className="mt-8 grid gap-4">
        {policyItems.map((item) => (
          <article key={item.title} className="surface-card rounded-[28px] p-6">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
              {item.title}
            </h3>
            <p className="mt-3 text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
