"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeListPlansController = makeListPlansController;
const ListPlansUseCase_1 = require("../../../modules/Plans/application/useCases/ListPlansUseCase");
const ListPlansController_1 = require("../../../modules/Plans/http/controllers/ListPlansController");
const PrismaPlansRepository_1 = require("../../../modules/Plans/infra/providers/PrismaPlansRepository");
function makeListPlansController() {
    const plansRepository = new PrismaPlansRepository_1.PrismaPlansRepository();
    const useCase = new ListPlansUseCase_1.ListPlansUseCase(plansRepository);
    const controller = new ListPlansController_1.ListPlansController(useCase);
    return controller;
}
