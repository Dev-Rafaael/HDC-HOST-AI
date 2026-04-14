import { GetServiceByIdUseCase } from "../../../modules/Services/application/useCases/GetServiceByIdUseCase";
import { ListServicesUseCase } from "../../../modules/Services/application/useCases/ListServicesUseCase";
import { GetServicesByIdController } from "../../../modules/Services/http/controllers/GetServicesByIdController";
import { ListServicesController } from "../../../modules/Services/http/controllers/ListPlansController";
import { PrismaServicesRepository } from "../../../modules/Services/infra/providers/PrismaServicesRepository";

export function makeGetServicesByIdController() {
  const servicesRepository = new PrismaServicesRepository();
  const useCase = new GetServiceByIdUseCase(servicesRepository);
  const controller = new GetServicesByIdController(useCase);

  return controller;
}