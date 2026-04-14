import { Request, Response } from "express";
import { ListServicesUseCase } from "../../application/useCases/ListServicesUseCase";

export class ListServicesController {
  constructor(private getServicesUseCase: ListServicesUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const services = await this.getServicesUseCase.execute();
      return res.status(200).json(services);
    } catch {
      return res.status(400).json({ msg: "Erro ao encontrar Servico" });
    }
  }
}
