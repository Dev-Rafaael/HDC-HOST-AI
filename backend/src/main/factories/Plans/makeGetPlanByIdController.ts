import { GetPlanByIdUseCase } from "../../../modules/Plans/application/useCases/GetPlanByIdUseCase";
import { GetPlanByIdController } from "../../../modules/Plans/http/controllers/GetPlanByIdController";
import { PrismaPlansRepository } from "../../../modules/Plans/infra/providers/PrismaPlansRepository";

export function makeGetPlanByIdController() {
  const plansRepository = new PrismaPlansRepository();
  const useCase = new GetPlanByIdUseCase(plansRepository);
  const controller = new GetPlanByIdController(useCase);

  return controller;
}