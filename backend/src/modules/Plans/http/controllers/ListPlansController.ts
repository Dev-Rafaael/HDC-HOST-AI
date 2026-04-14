import { Request, Response } from "express";
import { ListPlansUseCase } from "../../application/useCases/ListPlansUseCase";

export class ListPlansController {
  constructor(private getPlanUseCase: ListPlansUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const plans = await this.getPlanUseCase.execute();
      return res.status(200).json(plans);
    } catch {
      return res.status(400).json({ msg: "Erro ao encontrar Planos" });
    }
  }
}
