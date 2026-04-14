"use client";

import Link from "next/link";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/sectionHeading";
import { differentiators, faqs, heroStats } from "@/features/home/data/homeContent";
import { PricingSection } from "@/features/plans/components/pricingSection";
import { ServicesSection } from "@/features/services/components/servicesSection";

const tlds = [".com", ".com.br", ".net", ".dev", ".io"];
const unavailable = ["hdchost.com", "projetoai.dev"];

export function HomePage() {
  const [domain, setDomain] = useState("");
  const [domainResults, setDomainResults] = useState<Record<string, boolean>>({});
  const [domainError, setDomainError] = useState("");

  function handleDomainSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!domain.trim()) {
      setDomainError("Digite um nome para consultar disponibilidade.");
      setDomainResults({});
      return;
    }

    const slug = domain.trim().toLowerCase();
    const nextResults = Object.fromEntries(
      tlds.map((tld) => {
        const fullDomain = `${slug}${tld}`;
        return [tld, !unavailable.includes(fullDomain)];
      }),
    );

    setDomainError("");
    setDomainResults(nextResults);
  }

  return (
    <>
      <section className="app-container hero-glow py-12 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6">
            <span className="eyebrow fade-up w-fit">Hospedagem com IA aplicada à decisão</span>
            <div className="grid gap-4 fade-up stagger-1">
              <h1 className="display-title text-5xl text-white md:text-7xl">
                Frontend e infraestrutura com cara de produto SaaS premium.
              </h1>
              <p className="lead-copy max-w-2xl text-lg">
                A experiência foi redesenhada para organizar melhor os serviços,
                destacar valor com mais clareza e guiar a escolha do plano ideal
                por meio de um fluxo inteligente.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 fade-up stagger-2">
              <Link href="/planos" className="primary-button">
                Ver planos
              </Link>
              <Link href="/servicos" className="secondary-button">
                Explorar serviços
              </Link>
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {heroStats.map((item, index) => (
                <article
                  key={item.label}
                  className={`soft-card fade-up rounded-[24px] p-5 ${index > 0 ? `stagger-${index}` : ""}`}
                >
                  <p className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="surface-card fade-up stagger-3 overflow-hidden rounded-[32px] p-6 md:p-8">
            <div className="rounded-[24px] border border-cyan-300/12 bg-gradient-to-br from-cyan-400/12 to-emerald-300/8 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200">
                Jornada refinada
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white">
                Planos organizados, comparáveis e visualmente claros.
              </h2>
              <p className="mt-3 text-slate-200">
                Cards com profundidade, CTAs mais fortes, feedback visual,
                estados de loading e navegação por páginas que fazem sentido.
              </p>
            </div>

            <div className="mt-5 grid gap-4">
              {differentiators.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-white/8 bg-white/4 p-5 transition-transform duration-200 hover:-translate-y-1"
                >
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicesSection compact />
      <PricingSection compact />

      <section className="app-container py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-5">
            <SectionHeading
              eyebrow="Domínio"
              title="Teste disponibilidade com feedback imediato."
              description="A busca por domínio ganhou um bloco próprio, com retorno visual mais claro para validar nomes antes da contratação."
            />
            <div className="soft-card rounded-[28px] p-5">
              <p className="text-sm text-slate-300">
                Dica: valide ideias curtas, memoráveis e alinhadas ao objetivo do projeto.
              </p>
            </div>
          </div>

          <div className="surface-card rounded-[32px] p-6 md:p-8">
            <form className="grid gap-4" onSubmit={handleDomainSearch}>
              <label htmlFor="domain" className="text-sm font-semibold text-slate-200">
                Nome base do domínio
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="domain"
                  type="text"
                  value={domain}
                  onChange={(event) => setDomain(event.target.value)}
                  placeholder="ex: minhamarca"
                  className="flex-1 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
                />
                <button type="submit" className="primary-button">
                  Buscar domínio
                </button>
              </div>
              {domainError ? <p className="status-error">{domainError}</p> : null}
            </form>

            <div className="mt-6 grid gap-3">
              {Object.entries(domainResults).map(([tld, available]) => (
                <div
                  key={tld}
                  className={`rounded-2xl border px-4 py-3 ${
                    available
                      ? "border-emerald-300/20 bg-emerald-400/10 text-emerald-100"
                      : "border-rose-300/20 bg-rose-400/10 text-rose-100"
                  }`}
                >
                  {domain}
                  {tld} {available ? "está disponível" : "já está em uso"}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {tlds.map((tld) => (
                <span key={tld} className="pill">
                  {tld}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="app-container py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-4">
            <SectionHeading
              eyebrow="Perguntas frequentes"
              title="Respostas rápidas para reduzir objeções."
              description="O FAQ foi simplificado para responder o que normalmente bloqueia a decisão de compra sem poluir a página."
            />
            <div className="grid gap-3">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="surface-card rounded-[24px] p-5 transition-all duration-200 open:border-cyan-300/25"
                >
                  <summary className="cursor-pointer list-none font-semibold text-white">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-slate-300">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="surface-card rounded-[32px] p-6 md:p-8">
            <span className="eyebrow w-fit">Contato</span>
            <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white">
              Vamos montar a melhor estrutura para o seu projeto.
            </h2>
            <p className="mt-3 text-slate-300">
              Se quiser um direcionamento mais consultivo, fale com a equipe e
              avance com um setup mais adequado ao estágio do negócio.
            </p>

            <form className="mt-6 grid gap-4">
              <input
                type="text"
                placeholder="Seu nome"
                className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
              />
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
              />
              <textarea
                rows={5}
                placeholder="Conte um pouco do cenário e do que você precisa."
                className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"
              />
              <button type="button" className="primary-button w-fit">
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
