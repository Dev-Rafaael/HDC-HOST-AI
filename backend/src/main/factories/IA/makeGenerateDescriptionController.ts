import { GenerateDescriptionUseCase } from "../../../modules/IA/application/useCases/GenerateDescriptionUseCase";
import { GenerateDescriptionController } from "../../../modules/IA/http/controllers/GenerateDescriptionController";
import { OpenRouterClient } from "../../../modules/IA/infra/providers/OpenRouterClient";

export function makeGenerateDescriptionController() {
  const aiClient = new OpenRouterClient();
  const useCase = new GenerateDescriptionUseCase(aiClient);

  return new GenerateDescriptionController(useCase);
}