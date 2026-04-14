import { Request, Response } from "express";
import { ListServicesUseCase } from "../../application/useCases/ListServicesUseCase";

export class ListServicesController {
  constructor(private getServicesUseCase: ListServicesUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const plans = await this.getServicesUseCase.execute();
      res.status(200).json(plans);
    } catch (error) {
      res.status(400).json({ msg: "Erro ao encontrar Servico" });
    }
  }
}
