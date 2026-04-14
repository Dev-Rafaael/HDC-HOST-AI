"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetPlanByIdController = makeGetPlanByIdController;
const GetPlanByIdUseCase_1 = require("../../../modules/Plans/application/useCases/GetPlanByIdUseCase");
const GetPlanByIdController_1 = require("../../../modules/Plans/http/controllers/GetPlanByIdController");
const PrismaPlansRepository_1 = require("../../../modules/Plans/infra/providers/PrismaPlansRepository");
function makeGetPlanByIdController() {
    const plansRepository = new PrismaPlansRepository_1.PrismaPlansRepository();
    const useCase = new GetPlanByIdUseCase_1.GetPlanByIdUseCase(plansRepository);
    const controller = new GetPlanByIdController_1.GetPlanByIdController(useCase);
    return controller;
}
