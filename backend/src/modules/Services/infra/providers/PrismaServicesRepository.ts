import { prisma } from "../../../../shared/database/prisma";
import { IServices } from "../../domain/interface/IServices";
import { ServicesDTO } from "../../dtos/ServicesDTO";

export class PrismaServicesRepository implements IServices {
  async listAll(): Promise<ServicesDTO[]> {
    return prisma.service.findMany();
  }

  async getServiceById(id: string): Promise<ServicesDTO | null> {
    return prisma.service.findUnique({
      where: { id },
    });
  }
}
