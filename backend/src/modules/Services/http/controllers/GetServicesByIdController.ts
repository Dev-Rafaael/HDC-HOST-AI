import { Request, Response } from "express";
import { GetServiceByIdUseCase } from "../../application/useCases/GetServiceByIdUseCase";

export class GetServicesByIdController {
  constructor(private getServicesByIdUseCase: GetServiceByIdUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const id = String(req.params.id);
      const service = await this.getServicesByIdUseCase.execute(id);

      return res.status(200).json(service);
    } catch {
      return res.status(400).json({ msg: "Erro ao encontrar Services" });
    }
  }
}
