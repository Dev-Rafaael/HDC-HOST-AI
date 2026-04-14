"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateDescriptionUseCase = void 0;
class GenerateDescriptionUseCase {
    constructor(aiClient) {
        this.aiClient = aiClient;
    }
    async execute(data) {
        try {
            const prompt = `
      Você é um especialista em vendas de planos de internet.

      Plano:
      - Velocidade: ${data.velocidade}
      - Preço: R$${data.preco}
      - Benefícios: ${data.beneficios}

      Gere uma descrição comercial curta e persuasiva.
      `;
            const result = await this.aiClient.generate(prompt);
            return result || "Não foi possível gerar descrição";
        }
        catch {
            throw new Error("Erro ao gerar descrição");
        }
    }
}
exports.GenerateDescriptionUseCase = GenerateDescriptionUseCase;
