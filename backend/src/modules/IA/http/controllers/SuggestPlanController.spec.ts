import express from "express";
import request from "supertest";
import { describe, expect, it, vi } from "vitest";
import { SuggestPlanController } from "./SuggestPlanController";

function createTestApp(controller: SuggestPlanController) {
  const app = express();
  app.use(express.json());
  app.post("/ai/suggest", (req, res) => controller.handle(req, res));
  return app;
}

describe("SuggestPlanController", () => {
  it("returns 400 when the payload is invalid", async () => {
    const controller = new SuggestPlanController({
      execute: vi.fn(),
    } as never);

    const app = createTestApp(controller);
    const response = await request(app).post("/ai/suggest").send({
      pessoas: "4",
      uso: "",
      dispositivos: 3,
    });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: "Dados inválidos para sugerir plano",
    });
  });

  it("returns the suggested plan reply when the payload is valid", async () => {
    const execute = vi.fn(async () => "Plano: Cloud\nMotivo: atende o cenário.");
    const controller = new SuggestPlanController({
      execute,
    } as never);

    const app = createTestApp(controller);
    const payload = {
      pessoas: 6,
      uso: "sistema interno",
      dispositivos: 12,
      faixaOrcamento: "acima de R$ 250",
      prioridade: "estabilidade",
    };

    const response = await request(app).post("/ai/suggest").send(payload);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      reply: "Plano: Cloud\nMotivo: atende o cenário.",
    });
    expect(execute).toHaveBeenCalledWith(payload);
  });
});
