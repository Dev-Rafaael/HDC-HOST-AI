"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGenerateDescriptionController = makeGenerateDescriptionController;
const GenerateDescriptionUseCase_1 = require("../../../modules/IA/application/useCases/GenerateDescriptionUseCase");
const GenerateDescriptionController_1 = require("../../../modules/IA/http/controllers/GenerateDescriptionController");
const OpenRouterClient_1 = require("../../../modules/IA/infra/providers/OpenRouterClient");
function makeGenerateDescriptionController() {
    const aiClient = new OpenRouterClient_1.OpenRouterClient();
    const useCase = new GenerateDescriptionUseCase_1.GenerateDescriptionUseCase(aiClient);
    return new GenerateDescriptionController_1.GenerateDescriptionController(useCase);
}
