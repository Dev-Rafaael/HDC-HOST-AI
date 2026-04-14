import { SuggestPlanUseCase } from "../../../modules/IA/application/useCases/SuggestPlanUseCase";
import { SuggestPlanController } from "../../../modules/IA/http/controllers/SuggestPlanController";
import { OpenRouterClient } from "../../../modules/IA/infra/providers/OpenRouterClient";

export function makeSuggestPlanController() {
  const aiClient = new OpenRouterClient();
  const useCase = new SuggestPlanUseCase(aiClient);

  return new SuggestPlanController(useCase);
}