import { describe, expect, it, vi } from "vitest";
import { SuggestPlanUseCase } from "./SuggestPlanUseCase";

describe("SuggestPlanUseCase", () => {
  it("builds the recommendation prompt with form fields and real catalog data", async () => {
    const aiClient = {
      generate: vi.fn(async (prompt: string) => prompt),
    };

    const plansRepository = {
      listAll: vi.fn(async () => [
        {
          id: "1",
          price: "R$30/mês",
          name: "Intermediário",
          itens: ["5GB de espaço", "10 subdomínios"],
          description: "Ideal para pequenos negócios",
          performance: "Cache padrão",
          uptime: "99.7%",
          ssl: "SSL gratuito",
          backup: "48h",
          suporte: "Chat, e-mail e WhatsApp",
          recomendadoPara: "Lojas pequenas",
          tecnologias: "PHP, MySQL, Node",
          sla: "6h",
          highlight: false,
        },
      ]),
    };

    const useCase = new SuggestPlanUseCase(aiClient, plansRepository);

    const result = await useCase.execute({
      pessoas: 8,
      uso: "loja virtual",
      dispositivos: 14,
      faixaOrcamento: "R$ 51 a R$ 120",
      prioridade: "performance",
    });

    expect(result).toContain("Pessoas: 8");
    expect(result).toContain("Tipo de uso: loja virtual");
    expect(result).toContain("Dispositivos: 14");
    expect(result).toContain("Faixa de orçamento: R$ 51 a R$ 120");
    expect(result).toContain("Prioridade: performance");
    expect(result).toContain("Plano: Intermediário");
    expect(result).toContain("Preço: R$30/mês");
    expect(result).toContain("Itens: 5GB de espaço, 10 subdomínios");
  });
});
