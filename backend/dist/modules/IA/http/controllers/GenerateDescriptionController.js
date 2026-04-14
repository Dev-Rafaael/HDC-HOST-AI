"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateDescriptionController = void 0;
class GenerateDescriptionController {
    constructor(generateDescription) {
        this.generateDescription = generateDescription;
    }
    async handle(req, res) {
        try {
            const result = await this.generateDescription.execute(req.body);
            return res.json({ reply: result });
        }
        catch {
            return res.status(500).json({
                error: "Erro ao gerar descrição",
            });
        }
    }
}
exports.GenerateDescriptionController = GenerateDescriptionController;
