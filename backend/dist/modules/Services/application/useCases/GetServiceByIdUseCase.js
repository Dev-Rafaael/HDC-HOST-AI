"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetServiceByIdUseCase = void 0;
class GetServiceByIdUseCase {
    constructor(servicesRepository) {
        this.servicesRepository = servicesRepository;
    }
    async execute(id) {
        return this.servicesRepository.getServiceById(id);
    }
}
exports.GetServiceByIdUseCase = GetServiceByIdUseCase;
