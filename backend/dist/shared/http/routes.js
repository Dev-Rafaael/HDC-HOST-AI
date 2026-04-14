"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ai_routes_1 = __importDefault(require("../../main/routes/ai.routes"));
const plans_routes_1 = __importDefault(require("../../main/routes/plans.routes"));
const services_routes_1 = __importDefault(require("../../main/routes/services.routes"));
const routes = (0, express_1.Router)();
routes.use("/ai", ai_routes_1.default);
routes.use("/plans", plans_routes_1.default);
routes.use("/services", services_routes_1.default);
exports.default = routes;
