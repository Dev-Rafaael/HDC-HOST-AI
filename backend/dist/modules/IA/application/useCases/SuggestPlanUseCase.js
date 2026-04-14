"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuggestPlanUseCase = void 0;
class SuggestPlanUseCase {
    constructor(aiClient, plansRepository) {
        this.aiClient = aiClient;
        this.plansRepository = plansRepository;
    }
    formatPlans(plans) {
        return plans
            .map((plan) => {
            const items = Array.isArray(plan.itens)
                ? plan.itens.join(", ")
                : String(plan.itens);
            return [
                `Plano: ${plan.name}`,
                `Preço: ${plan.price}`,
                `Descrição: ${plan.description}`,
                `Itens: ${items}`,
                `Performance: ${plan.performance}`,
                `Backup: ${plan.backup}`,
                `Suporte: ${plan.suporte}`,
                `Recomendado para: ${plan.recomendadoPara}`,
                `Tecnologias: ${plan.tecnologias}`,
                `SLA: ${plan.sla}`,
            ].join("\n");
        })
            .join("\n\n");
    }
    async execute(data) {
        const plans = await this.plansRepository.listAll();
        if (!plans?.length) {
            return "Não foi possível sugerir um plano porque o catálogo não está disponível no momento.";
        }
        const faixaOrcamento = data.faixaOrcamento?.trim() || "não informado";
        const prioridade = data.prioridade?.trim() || "não informada";
        const catalog = this.formatPlans(plans);
        const prompt = `
Você é um especialista em hospedagem e deve recomendar um plano usando somente os dados do formulário e os planos disponíveis no catálogo.

Dados do cliente:
- Pessoas: ${data.pessoas}
- Tipo de uso: ${data.uso}
- Dispositivos: ${data.dispositivos}
- Faixa de orçamento: ${faixaOrcamento}
- Prioridade: ${prioridade}

Catálogo de planos disponíveis:
${catalog}

Regras:
- Escolha exatamente um plano do catálogo acima.
- Não invente nomes de plano.
- Considere orçamento e prioridade quando informados.
- Explique a recomendação com base explícita nos dados do cliente.
- Se dois planos parecerem próximos, escolha o mais aderente ao uso e explique o trade-off.

Responda obrigatoriamente neste formato:
Plano: <nome exato do plano>
Motivo: <explicação objetiva de 2 a 4 frases, mencionando pessoas, uso, dispositivos, orçamento e prioridade quando existirem>
`;
        const result = await this.aiClient.generate(prompt);
        return result || "Não foi possível gerar sugestão";
    }
}
exports.SuggestPlanUseCase = SuggestPlanUseCase;
