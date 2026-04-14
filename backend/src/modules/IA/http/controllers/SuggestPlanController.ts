
import { Request, Response } from "express";
import { SuggestPlanUseCase } from "../../application/useCases/SuggestPlanUseCase";

export class SuggestPlanController {
  constructor(
    private suggestPlanUseCase: SuggestPlanUseCase
  ) {}

  async handle(req: Request, res: Response) {
    try {
      const result = await this.suggestPlanUseCase.execute(req.body);

      return res.json({ reply: result });

    } catch (error) {
      return res.status(500).json({
        error: "Erro ao processar IA",
      });
    }
  }
}