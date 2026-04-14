import { prisma } from "../../../../shared/database/prisma";
import { IServices } from "../../domain/interface/IServices";
import { ServicesDTO } from "../../dtos/ServicesDTO";




export class PrismaServicesRepository implements IServices{
   async listAll(): Promise<any> {
     return await prisma.service.findMany()
    }

    async getPlanById(id: string): Promise<any> {
        return await prisma.service.findUnique({
            where:{id}
        })
    }
}