"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { LoadingCards } from "@/components/ui/loadingCards";
import { Modal } from "@/components/ui/modal";
import { SectionHeading } from "@/components/ui/sectionHeading";
import { useCatalogData } from "@/hooks/useCatalogData";
import { PlanRecommendationRequest } from "@/types/ai";
import { Plan } from "@/types/plan";
import { usePlanAdvisor } from "@/features/plans/hooks/usePlanAdvisor";

interface PricingSectionProps {
  compact?: boolean;
}

const usageOptions = [
  "site institucional",
  "loja virtual",
  "streaming",
  "sistema interno",
  "negócio digital",
];

const budgetOptions = ["até R$ 50", "R$ 51 a R$ 120", "R$ 121 a R$ 250", "acima de R$ 250"];
const priorityOptions = ["performance", "economia", "estabilidade", "suporte"];

const initialForm: PlanRecommendationRequest = {
  pessoas: 3,
  uso: usageOptions[0],
  dispositivos: 4,
  faixaOrcamento: "",
  prioridade: "",
};

function formatPlanPrice(price: string) {
  return price.startsWith("R$") ? price : `R$ ${price}`;
}

function PlanCard({ plan, isRecommended }: { plan: Plan; isRecommended: boolean }) {
  return (
    <article
      className={`fade-up relative overflow-hidden rounded-[28px] border p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:shadow-2xl hover:shadow-cyan-500/10 ${
        isRecommended
          ? "border-cyan-300/45 bg-gradient-to-b from-cyan-400/16 to-slate-950/96 shadow-2xl shadow-cyan-500/10"
          : plan.highlight
            ? "border-emerald-300/25 bg-gradient-to-b from-emerald-300/12 to-slate-950/96"
            : "border-white/10 bg-slate-950/70"
      }`}
    >
      {isRecommended ? (
        <span className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-amber-300 to-orange-400 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-slate-950">
          🔥 Recomendado para você
        </span>
      ) : null}

      <div className="grid gap-4">
        <div className="grid gap-2">
          <span className="pill w-fit">{plan.recomendadoPara}</span>
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white">
            {plan.name}
          </h3>
          <p className="text-slate-300">{plan.description}</p>
        </div>

        <div className="rounded-3xl border border-white/8 bg-white/4 p-4">
          <p className="text-sm text-slate-400">Investimento mensal</p>
          <p className="mt-1 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white">
            {formatPlanPrice(plan.price)}
          </p>
        </div>

        <ul className="grid gap-3 text-sm text-slate-200">
          {plan.itens.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <dl className="grid gap-3 rounded-3xl border border-white/8 bg-slate-900/65 p-5 text-sm text-slate-300">
          <div className="rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <dt className="font-medium text-slate-400">Performance</dt>
              <dd className="text-right font-semibold text-slate-100">{plan.performance}</dd>
            </div>
          </div>
          <div className="rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <dt className="font-medium text-slate-400">Backup</dt>
              <dd className="text-right font-semibold text-slate-100">{plan.backup}</dd>
            </div>
          </div>
          <div className="rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <dt className="font-medium text-slate-400">Suporte</dt>
              <dd className="text-right font-semibold text-slate-100">{plan.suporte}</dd>
            </div>
          </div>
          <div className="rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <dt className="font-medium text-slate-400">SLA</dt>
              <dd className="text-right font-semibold text-slate-100">{plan.sla}</dd>
            </div>
          </div>
        </dl>
      </div>
    </article>
  );
}

export function PricingSection({ compact = false }: PricingSectionProps) {
  const { plans, isLoading, error, reload } = useCatalogData();
  const advisor = usePlanAdvisor(plans);
  const [isModalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<PlanRecommendationRequest>(initialForm);

  const displayedPlans = useMemo(() => (compact ? plans.slice(0, 3) : plans), [compact, plans]);
  const highlightedPlan = advisor.result?.recommendedPlanName ?? null;

  function updateField<Key extends keyof PlanRecommendationRequest>(
    key: Key,
    value: PlanRecommendationRequest[Key],
  ) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await advisor.submit(form);
  }

  return (
    <section id="planos" className="app-container py-16 md:py-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Planos"
          title="Escolha um plano com clareza, contexto e confiança."
          description="Uma experiência de pricing pensada como produto SaaS: cards consistentes, detalhes essenciais e recomendação assistida por IA para reduzir fricção na decisão."
        />

        <button type="button" onClick={() => setModalOpen(true)} className="primary-button self-start">
          Sugerir plano
        </button>
      </div>

      {advisor.result ? (
        <div className="surface-card mt-8 grid gap-4 rounded-[28px] p-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="grid gap-3">
            <span className="eyebrow w-fit">Diagnóstico inteligente</span>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white">
              {advisor.result.recommendedPlanName
                ? `${advisor.result.recommendedPlanName} é o melhor encaixe agora.`
                : "Recebemos uma recomendação personalizada para o seu cenário."}
            </h3>
            <p className="text-slate-200">{advisor.result.reply}</p>
          </div>

          <div className="soft-card grid gap-3 rounded-[24px] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200">
              Baseado nas suas respostas
            </p>
            <p className="text-slate-200">{advisor.result.summary}</p>
            <button type="button" onClick={() => setModalOpen(true)} className="secondary-button w-fit">
              Ajustar critérios
            </button>
          </div>
        </div>
      ) : null}

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
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {displayedPlans.map((plan) => (
              <PlanCard
                key={plan.id ?? plan.name}
                plan={plan}
                isRecommended={highlightedPlan === plan.name}
              />
            ))}
          </div>
        ) : null}
      </div>

      {compact && plans.length > displayedPlans.length ? (
        <div className="mt-8">
          <Link href="/planos" className="secondary-button">
            Ver tabela completa
          </Link>
        </div>
      ) : null}

      <Modal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Descubra o plano ideal"
        description="Responda algumas perguntas rápidas e a IA vai indicar a melhor opção, explicando o motivo da recomendação."
      >
        {advisor.result ? (
          <div className="grid gap-5">
            <div className="rounded-[24px] border border-cyan-300/20 bg-cyan-400/8 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200">
                Recomendação gerada
              </p>
              <h4 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">
                {advisor.result.recommendedPlanName ?? "Plano recomendado"}
              </h4>
              <p className="mt-3 text-slate-200">{advisor.result.reply}</p>
            </div>

            <div className="soft-card rounded-[24px] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">
                Critérios analisados
              </p>
              <p className="mt-2 text-slate-200">{advisor.result.summary}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => setModalOpen(false)} className="primary-button">
                Ver plano destacado
              </button>
              <button
                type="button"
                onClick={() => {
                  advisor.reset();
                  setForm(initialForm);
                }}
                className="secondary-button"
              >
                Refazer análise
              </button>
            </div>
          </div>
        ) : (
          <form className="grid gap-5" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label htmlFor="pessoas" className="text-sm font-semibold text-slate-200">
                Quantas pessoas vão usar?
              </label>
              <input
                id="pessoas"
                type="number"
                min={1}
                value={form.pessoas}
                onChange={(event) => updateField("pessoas", Number(event.target.value))}
                className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                required
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="uso" className="text-sm font-semibold text-slate-200">
                Tipo de uso
              </label>
              <select
                id="uso"
                value={form.uso}
                onChange={(event) => updateField("uso", event.target.value)}
                className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
              >
                {usageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-2 md:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="dispositivos" className="text-sm font-semibold text-slate-200">
                  Número de dispositivos
                </label>
                <input
                  id="dispositivos"
                  type="number"
                  min={1}
                  value={form.dispositivos}
                  onChange={(event) => updateField("dispositivos", Number(event.target.value))}
                  className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                  required
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="faixaOrcamento" className="text-sm font-semibold text-slate-200">
                  Faixa de orçamento
                </label>
                <select
                  id="faixaOrcamento"
                  value={form.faixaOrcamento}
                  onChange={(event) => updateField("faixaOrcamento", event.target.value)}
                  className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                >
                  <option value="">Opcional</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="prioridade" className="text-sm font-semibold text-slate-200">
                Qual é sua prioridade?
              </label>
              <select
                id="prioridade"
                value={form.prioridade}
                onChange={(event) => updateField("prioridade", event.target.value)}
                className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
              >
                <option value="">Opcional</option>
                {priorityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {advisor.error ? <p className="status-error">{advisor.error}</p> : null}

            <div className="flex flex-wrap gap-3">
              <button type="submit" className="primary-button" disabled={advisor.isLoading}>
                {advisor.isLoading ? "Analisando cenário..." : "Gerar recomendação"}
              </button>
              <button type="button" className="ghost-button" onClick={() => setModalOpen(false)}>
                Cancelar
              </button>
            </div>
          </form>
        )}
      </Modal>
    </section>
  );
}
