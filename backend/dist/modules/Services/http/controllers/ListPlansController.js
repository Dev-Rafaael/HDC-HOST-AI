"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListServicesController = void 0;
class ListServicesController {
    constructor(getServicesUseCase) {
        this.getServicesUseCase = getServicesUseCase;
    }
    async handle(req, res) {
        try {
            const services = await this.getServicesUseCase.execute();
            return res.status(200).json(services);
        }
        catch {
            return res.status(400).json({ msg: "Erro ao encontrar Servico" });
        }
    }
}
exports.ListServicesController = ListServicesController;
