"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaServicesRepository = void 0;
const prisma_1 = require("../../../../shared/database/prisma");
class PrismaServicesRepository {
    async listAll() {
        return prisma_1.prisma.service.findMany();
    }
    async getServiceById(id) {
        return prisma_1.prisma.service.findUnique({
            where: { id },
        });
    }
}
exports.PrismaServicesRepository = PrismaServicesRepository;
