import express from "express";
import request from "supertest";
import { describe, expect, it, vi } from "vitest";
import { GetPlanByIdController } from "./GetPlanByIdController";
import { ListPlansController } from "./ListPlansController";

function createPlansApp(
  listController: ListPlansController,
  getByIdController: GetPlanByIdController,
) {
  const app = express();
  app.get("/plans", (req, res) => listController.handle(req, res));
  app.get("/plans/:id", (req, res) => getByIdController.handle(req, res));
  return app;
}

describe("Plans controllers", () => {
  it("ListPlansController returns the catalog", async () => {
    const listController = new ListPlansController({
      execute: vi.fn(async () => [{ id: "plan-1", name: "Cloud" }]),
    } as never);
    const getByIdController = new GetPlanByIdController({
      execute: vi.fn(),
    } as never);

    const app = createPlansApp(listController, getByIdController);
    const response = await request(app).get("/plans");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ id: "plan-1", name: "Cloud" }]);
  });

  it("GetPlanByIdController returns the requested plan", async () => {
    const listController = new ListPlansController({
      execute: vi.fn(),
    } as never);
    const execute = vi.fn(async () => ({ id: "plan-1", name: "Cloud" }));
    const getByIdController = new GetPlanByIdController({
      execute,
    } as never);

    const app = createPlansApp(listController, getByIdController);
    const response = await request(app).get("/plans/plan-1");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ id: "plan-1", name: "Cloud" });
    expect(execute).toHaveBeenCalledWith("plan-1");
  });

  it("returns 400 when a plan controller throws", async () => {
    const listController = new ListPlansController({
      execute: vi.fn(async () => {
        throw new Error("failure");
      }),
    } as never);
    const getByIdController = new GetPlanByIdController({
      execute: vi.fn(),
    } as never);

    const app = createPlansApp(listController, getByIdController);
    const response = await request(app).get("/plans");

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ msg: "Erro ao encontrar Planos" });
  });
});
