"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetServicesByIdController = void 0;
class GetServicesByIdController {
    constructor(getServicesByIdUseCase) {
        this.getServicesByIdUseCase = getServicesByIdUseCase;
    }
    async handle(req, res) {
        try {
            const id = String(req.params.id);
            const service = await this.getServicesByIdUseCase.execute(id);
            return res.status(200).json(service);
        }
        catch {
            return res.status(400).json({ msg: "Erro ao encontrar Services" });
        }
    }
}
exports.GetServicesByIdController = GetServicesByIdController;
