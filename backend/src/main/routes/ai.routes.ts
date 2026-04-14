import { Router } from "express";
import { makeSuggestPlanController } from "../factories/IA/makeSuggestPlanController";
import { makeGenerateDescriptionController } from "../factories/IA/makeGenerateDescriptionController";

const aiRoutes = Router();

const suggestController = makeSuggestPlanController();
const descriptionController = makeGenerateDescriptionController();

aiRoutes.post("/suggest", (req, res) =>
  suggestController.handle(req, res)
);

aiRoutes.post("/description", (req, res) =>
  descriptionController.handle(req, res)
);

export default aiRoutes;