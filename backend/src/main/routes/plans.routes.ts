import { Router } from "express";
import { makeListPlansController } from "../factories/Plans/makeListPlansController";
import { makeGetPlanByIdController } from "../factories/Plans/makeGetPlanByIdController";

const plansRoutes = Router();

const ListPlans = makeListPlansController();
const getPlanById = makeGetPlanByIdController();

plansRoutes.get("/", (req, res) =>
  ListPlans.handle(req, res)
);

plansRoutes.get("/:id", (req, res) =>
  getPlanById.handle(req, res)
);

export default plansRoutes;