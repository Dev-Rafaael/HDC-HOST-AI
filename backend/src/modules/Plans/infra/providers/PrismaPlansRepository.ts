import { prisma } from "../../../../shared/database/prisma";
import { IPlans } from "../../domain/interface/IPlans";
import { PlansDTO } from "../../dtos/PlansDTO";

export class PrismaPlansRepository implements IPlans {
  async listAll(): Promise<any> {
    return await prisma.plan.findMany();
  }

  async getPlanById(id: string): Promise<any> {
    return await prisma.plan.findUnique({
      where: { id },
    });
  }
}
