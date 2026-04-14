"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPlansController = void 0;
class ListPlansController {
    constructor(getPlanUseCase) {
        this.getPlanUseCase = getPlanUseCase;
    }
    async handle(req, res) {
        try {
            const plans = await this.getPlanUseCase.execute();
            return res.status(200).json(plans);
        }
        catch {
            return res.status(400).json({ msg: "Erro ao encontrar Planos" });
        }
    }
}
exports.ListPlansController = ListPlansController;
