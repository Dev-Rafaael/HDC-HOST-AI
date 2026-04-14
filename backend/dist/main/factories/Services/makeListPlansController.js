"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeListServicesController = makeListServicesController;
const ListServicesUseCase_1 = require("../../../modules/Services/application/useCases/ListServicesUseCase");
const ListPlansController_1 = require("../../../modules/Services/http/controllers/ListPlansController");
const PrismaServicesRepository_1 = require("../../../modules/Services/infra/providers/PrismaServicesRepository");
function makeListServicesController() {
    const servicesRepository = new PrismaServicesRepository_1.PrismaServicesRepository();
    const useCase = new ListServicesUseCase_1.ListServicesUseCase(servicesRepository);
    const controller = new ListPlansController_1.ListServicesController(useCase);
    return controller;
}
