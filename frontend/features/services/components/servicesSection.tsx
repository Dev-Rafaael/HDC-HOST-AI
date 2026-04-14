"use client";

import { useState } from "react";
import { LoadingCards } from "@/components/ui/loadingCards";
import { SectionHeading } from "@/components/ui/sectionHeading";
import { ServiceIcon } from "@/features/services/components/serviceIcon";
import { serviceBenefits } from "@/features/services/data/serviceBenefits";
import { useCatalogData } from "@/hooks/useCatalogData";
import { generateDescription } from "@/services/aiService";

interface ServicesSectionProps {
  compact?: boolean;
}

export function ServicesSection({ compact = false }: ServicesSectionProps) {
  const { services, isLoading, error, reload } = useCatalogData();
  const [descriptions, setDescriptions] = useState<Record<string, string>>({});
  const [loadingIds, setLoadingIds] = useState<Record<string, boolean>>({});

  const displayedServices = compact ? services.slice(0, 3) : services;

  async function handleGenerate(serviceId: string, title: string, description: string) {
    setLoadingIds((current) => ({ ...current, [serviceId]: true }));

    try {
      const data = await generateDescription({
        velocidade: "Infra otimizada",
        preco: 0,
        beneficios: `${title}. ${description}`,
      });

      setDescriptions((current) => ({ ...current, [serviceId]: data.reply }));
    } catch {
      setDescriptions((current) => ({
        ...current,
        [serviceId]: "Não foi possível gerar um resumo expandido neste momento.",
      }));
    } finally {
      setLoadingIds((current) => ({ ...current, [serviceId]: false }));
    }
  }

  return (
    <section id="servicos" className="app-container py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Serviços"
          title="Operação técnica com menos atrito e mais confiança."
          description="Os serviços foram reorganizados para destacar valor, contexto de uso e aprofundamento assistido por IA quando o cliente quiser entender melhor cada oferta."
        />

        <div className="grid gap-3 sm:grid-cols-3">
          {serviceBenefits.map((benefit, index) => (
            <div
              key={benefit}
              className={`soft-card fade-up rounded-[24px] p-5 ${index > 0 ? `stagger-${index}` : ""}`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200">
                Valor
              </p>
              <p className="mt-3 text-slate-100">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        {isLoading ? <LoadingCards count={compact ? 3 : 4} /> : null}

        {!isLoading && error ? (
          <div className="status-error flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <span>{error}</span>
            <button type="button" onClick={() => void reload()} className="secondary-button">
              Tentar novamente
            </button>
          </div>
        ) : null}

        {!isLoading && !error ? (
          <div className="grid-auto">
            {displayedServices.map((service, index) => (
              <article
                key={service.id}
                className={`fade-up surface-card rounded-[28px] p-6 ${index > 0 ? `stagger-${index}` : ""}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="grid gap-3">
                    <ServiceIcon icon={service.icon} serviceId={service.id} />
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    className="ghost-button"
                    onClick={() => handleGenerate(service.id, service.title, service.desc)}
                    disabled={loadingIds[service.id]}
                  >
                    {loadingIds[service.id] ? "Gerando..." : "Expandir com IA"}
                  </button>
                </div>

                <p className="mt-4 text-slate-300">{service.desc}</p>

                {descriptions[service.id] ? (
                  <div className="mt-5 rounded-[22px] border border-cyan-300/15 bg-cyan-400/8 p-4 text-slate-100">
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200">
                      Contexto extra
                    </p>
                    <p className="mt-2">{descriptions[service.id]}</p>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
