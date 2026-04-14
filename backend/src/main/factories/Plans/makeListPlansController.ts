import { ListPlansUseCase } from "../../../modules/Plans/application/useCases/ListPlansUseCase";
import { ListPlansController } from "../../../modules/Plans/http/controllers/ListPlansController";
import { PrismaPlansRepository } from "../../../modules/Plans/infra/providers/PrismaPlansRepository";

export function makeListPlansController() {
  const plansRepository = new PrismaPlansRepository();
  const useCase = new ListPlansUseCase(plansRepository);
  const controller = new ListPlansController(useCase);

  return controller;
}