"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlanByIdUseCase = void 0;
class GetPlanByIdUseCase {
    constructor(plansRepository) {
        this.plansRepository = plansRepository;
    }
    async execute(id) {
        return this.plansRepository.getPlanById(id);
    }
}
exports.GetPlanByIdUseCase = GetPlanByIdUseCase;
