"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlanByIdController = void 0;
class GetPlanByIdController {
    constructor(getPlanByIdUseCase) {
        this.getPlanByIdUseCase = getPlanByIdUseCase;
    }
    async handle(req, res) {
        try {
            const id = String(req.params.id);
            const plan = await this.getPlanByIdUseCase.execute(id);
            return res.status(200).json(plan);
        }
        catch {
            return res.status(400).json({ msg: "Erro ao encontrar Planos" });
        }
    }
}
exports.GetPlanByIdController = GetPlanByIdController;
