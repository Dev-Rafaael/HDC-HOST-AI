"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuggestPlanController = void 0;
class SuggestPlanController {
    constructor(suggestPlanUseCase) {
        this.suggestPlanUseCase = suggestPlanUseCase;
    }
    async handle(req, res) {
        try {
            const { pessoas, uso, dispositivos } = req.body ?? {};
            if (typeof pessoas !== "number" ||
                typeof uso !== "string" ||
                !uso.trim() ||
                typeof dispositivos !== "number") {
                return res.status(400).json({
                    error: "Dados inválidos para sugerir plano",
                });
            }
            const result = await this.suggestPlanUseCase.execute(req.body);
            return res.json({ reply: result });
        }
        catch (error) {
            return res.status(500).json({
                error: "Erro ao processar IA",
            });
        }
    }
}
exports.SuggestPlanController = SuggestPlanController;
