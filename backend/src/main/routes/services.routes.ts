import { Router } from "express";
import { makeListPlansController } from "../factories/Plans/makeListPlansController";
import { makeGetPlanByIdController } from "../factories/Plans/makeGetPlanByIdController";
import { makeListServicesController } from "../factories/Services/makeListPlansController";
import { makeGetServicesByIdController } from "../factories/Services/makeGetPlanByIdController";

const servicesRoutes = Router();

const ListServices = makeListServicesController();
const getServicesById = makeGetServicesByIdController();

servicesRoutes.get("/", (req, res) =>
  ListServices.handle(req, res)
);

servicesRoutes.get("/:id", (req, res) =>
  getServicesById.handle(req, res)
);

export default servicesRoutes;