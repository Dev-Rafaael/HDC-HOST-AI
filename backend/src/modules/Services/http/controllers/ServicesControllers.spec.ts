import express from "express";
import request from "supertest";
import { describe, expect, it, vi } from "vitest";
import { GetServicesByIdController } from "./GetServicesByIdController";
import { ListServicesController } from "./ListPlansController";

function createServicesApp(
  listController: ListServicesController,
  getByIdController: GetServicesByIdController,
) {
  const app = express();
  app.get("/services", (req, res) => listController.handle(req, res));
  app.get("/services/:id", (req, res) => getByIdController.handle(req, res));
  return app;
}

describe("Services controllers", () => {
  it("ListServicesController returns the catalog", async () => {
    const listController = new ListServicesController({
      execute: vi.fn(async () => [{ id: "support", title: "Suporte" }]),
    } as never);
    const getByIdController = new GetServicesByIdController({
      execute: vi.fn(),
    } as never);

    const app = createServicesApp(listController, getByIdController);
    const response = await request(app).get("/services");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ id: "support", title: "Suporte" }]);
  });

  it("GetServicesByIdController returns the requested service", async () => {
    const listController = new ListServicesController({
      execute: vi.fn(),
    } as never);
    const execute = vi.fn(async () => ({ id: "support", title: "Suporte" }));
    const getByIdController = new GetServicesByIdController({
      execute,
    } as never);

    const app = createServicesApp(listController, getByIdController);
    const response = await request(app).get("/services/support");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ id: "support", title: "Suporte" });
    expect(execute).toHaveBeenCalledWith("support");
  });

  it("returns 400 when a services controller throws", async () => {
    const listController = new ListServicesController({
      execute: vi.fn(async () => {
        throw new Error("failure");
      }),
    } as never);
    const getByIdController = new GetServicesByIdController({
      execute: vi.fn(),
    } as never);

    const app = createServicesApp(listController, getByIdController);
    const response = await request(app).get("/services");

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ msg: "Erro ao encontrar Servico" });
  });
});
