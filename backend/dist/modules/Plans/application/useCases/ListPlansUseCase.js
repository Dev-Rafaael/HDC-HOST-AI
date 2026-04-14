"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPlansUseCase = void 0;
class ListPlansUseCase {
    constructor(plansRepository) {
        this.plansRepository = plansRepository;
    }
    async execute() {
        return this.plansRepository.listAll();
    }
}
exports.ListPlansUseCase = ListPlansUseCase;
