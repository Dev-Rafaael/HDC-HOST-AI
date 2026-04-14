import { IAIClient } from "../../domain/interfaces/IAIClient";
import { SuggestPlanDTO } from "../../dtos/SuggestPlanDTO";

export class SuggestPlanUseCase {
  constructor(private aiClient: IAIClient) {}

 async execute(data: SuggestPlanDTO): Promise<string> {
  const prompt = `
  Você é um especialista em internet.

  Cliente:
  - Pessoas: ${data.pessoas}
  - Uso: ${data.uso}
  - Dispositivos: ${data.dispositivos}

  Escolha APENAS um plano entre:
  100MB, 200MB, 300MB ou 500MB.

  Responda obrigatoriamente neste formato:

  Plano: <nome do plano>
  Motivo: <explicação curta>
  `;

  const result = await this.aiClient.generate(prompt);

  return result || "Não foi possível gerar sugestão";
}
}