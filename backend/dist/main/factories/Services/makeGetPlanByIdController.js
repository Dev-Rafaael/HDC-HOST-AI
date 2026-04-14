"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetServicesByIdController = makeGetServicesByIdController;
const GetServiceByIdUseCase_1 = require("../../../modules/Services/application/useCases/GetServiceByIdUseCase");
const GetServicesByIdController_1 = require("../../../modules/Services/http/controllers/GetServicesByIdController");
const PrismaServicesRepository_1 = require("../../../modules/Services/infra/providers/PrismaServicesRepository");
function makeGetServicesByIdController() {
    const servicesRepository = new PrismaServicesRepository_1.PrismaServicesRepository();
    const useCase = new GetServiceByIdUseCase_1.GetServiceByIdUseCase(servicesRepository);
    const controller = new GetServicesByIdController_1.GetServicesByIdController(useCase);
    return controller;
}
