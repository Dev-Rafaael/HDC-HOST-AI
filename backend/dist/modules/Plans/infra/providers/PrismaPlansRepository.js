"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaPlansRepository = void 0;
const prisma_1 = require("../../../../shared/database/prisma");
class PrismaPlansRepository {
    async listAll() {
        return prisma_1.prisma.plan.findMany();
    }
    async getPlanById(id) {
        return prisma_1.prisma.plan.findUnique({
            where: { id },
        });
    }
}
exports.PrismaPlansRepository = PrismaPlansRepository;
