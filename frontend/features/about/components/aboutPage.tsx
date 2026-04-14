import { SectionHeading } from "@/components/ui/sectionHeading";

const values = [
  {
    title: "Clareza na jornada",
    description: "Menos fricção para escolher infraestrutura e mais transparência sobre o que cada plano entrega.",
  },
  {
    title: "Base para crescer",
    description: "Arquitetura visual e estrutural desenhada para suportar evolução de produto sem acúmulo de débito.",
  },
  {
    title: "Suporte consultivo",
    description: "A experiência mistura automação inteligente com presença humana para orientar decisões técnicas.",
  },
];

export function AboutPage() {
  return (
    <section className="app-container py-16 md:py-24">
      <div className="surface-card hero-glow overflow-hidden rounded-[32px] p-8 md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Sobre"
            title="Uma marca de hosting que quer parecer produto, não catálogo."
            description="A HDC Host AI combina experiência moderna de compra, organização clara da informação e recomendação assistida para transformar um site institucional em uma vitrine de produto digital."
          />

          <div className="grid gap-4">
            {values.map((value) => (
              <article key={value.title} className="soft-card rounded-[24px] p-5">
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-slate-300">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
