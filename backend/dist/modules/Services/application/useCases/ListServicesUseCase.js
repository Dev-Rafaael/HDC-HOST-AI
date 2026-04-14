"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListServicesUseCase = void 0;
class ListServicesUseCase {
    constructor(servicesRepository) {
        this.servicesRepository = servicesRepository;
    }
    async execute() {
        return this.servicesRepository.listAll();
    }
}
exports.ListServicesUseCase = ListServicesUseCase;
