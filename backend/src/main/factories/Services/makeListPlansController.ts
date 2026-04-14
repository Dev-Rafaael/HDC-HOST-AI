import { ListServicesUseCase } from "../../../modules/Services/application/useCases/ListServicesUseCase";
import { ListServicesController } from "../../../modules/Services/http/controllers/ListPlansController";
import { PrismaServicesRepository } from "../../../modules/Services/infra/providers/PrismaServicesRepository";

export function makeListServicesController() {
  const servicesRepository = new PrismaServicesRepository();
  const useCase = new ListServicesUseCase(servicesRepository);
  const controller = new ListServicesController(useCase);

  return controller;
}