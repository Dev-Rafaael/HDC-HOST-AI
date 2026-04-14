"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSuggestPlanController = makeSuggestPlanController;
const SuggestPlanUseCase_1 = require("../../../modules/IA/application/useCases/SuggestPlanUseCase");
const SuggestPlanController_1 = require("../../../modules/IA/http/controllers/SuggestPlanController");
const OpenRouterClient_1 = require("../../../modules/IA/infra/providers/OpenRouterClient");
const PrismaPlansRepository_1 = require("../../../modules/Plans/infra/providers/PrismaPlansRepository");
function makeSuggestPlanController() {
    const aiClient = new OpenRouterClient_1.OpenRouterClient();
    const plansRepository = new PrismaPlansRepository_1.PrismaPlansRepository();
    const useCase = new SuggestPlanUseCase_1.SuggestPlanUseCase(aiClient, plansRepository);
    return new SuggestPlanController_1.SuggestPlanController(useCase);
}
