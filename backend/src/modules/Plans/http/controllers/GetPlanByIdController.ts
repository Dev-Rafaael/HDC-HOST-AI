import { Request, Response } from "express";
import { GetPlanByIdUseCase } from "../../application/useCases/GetPlanByIdUseCase";

export class GetPlanByIdController {
  constructor(private getPlanByIdUseCase: GetPlanByIdUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const id = String(req.params.id);
      const plan = await this.getPlanByIdUseCase.execute(id);

      return res.status(200).json(plan);
    } catch {
      return res.status(400).json({ msg: "Erro ao encontrar Planos" });
    }
  }
}
