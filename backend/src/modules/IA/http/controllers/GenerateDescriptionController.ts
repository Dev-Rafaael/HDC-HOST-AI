import { Request, Response } from "express";
import { GenerateDescriptionUseCase } from "../../application/useCases/GenerateDescriptionUseCase";

export class GenerateDescriptionController {
  constructor(private generateDescription: GenerateDescriptionUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const result = await this.generateDescription.execute(req.body);

      return res.json({ reply: result });

    } catch (error) {
      return res.status(500).json({
        error: "Erro ao gerar descrição",
      });
    }
  }
}