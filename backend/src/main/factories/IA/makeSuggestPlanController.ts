import { SuggestPlanUseCase } from "../../../modules/IA/application/useCases/SuggestPlanUseCase";
import { SuggestPlanController } from "../../../modules/IA/http/controllers/SuggestPlanController";
import { OpenRouterClient } from "../../../modules/IA/infra/providers/OpenRouterClient";
import { PrismaPlansRepository } from "../../../modules/Plans/infra/providers/PrismaPlansRepository";

export function makeSuggestPlanController() {
  const aiClient = new OpenRouterClient();
  const plansRepository = new PrismaPlansRepository();
  const useCase = new SuggestPlanUseCase(aiClient, plansRepository);

  return new SuggestPlanController(useCase);
}
