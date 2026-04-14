import { IAIClient } from "../../domain/interfaces/IAIClient";
import { GenerateDescriptionDTO } from "../../dtos/GenerateDescriptionDTO";

export class GenerateDescriptionUseCase {
  constructor(private aiClient: IAIClient) {}

  async execute(data: GenerateDescriptionDTO): Promise<string> {
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
    } catch {
      throw new Error("Erro ao gerar descrição");
    }
  }
}
