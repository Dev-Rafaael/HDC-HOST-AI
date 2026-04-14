import { Router } from "express";
import aiRoutes from "../../main/routes/ai.routes";
import plansRoutes from "../../main/routes/plans.routes";
import servicesRoutes from "../../main/routes/services.routes";

const routes = Router();

routes.use("/ai", aiRoutes);
routes.use("/plans", plansRoutes);
routes.use("/services", servicesRoutes);

export default routes;