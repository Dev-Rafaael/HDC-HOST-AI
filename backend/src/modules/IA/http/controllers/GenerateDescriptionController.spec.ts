import express from "express";
import request from "supertest";
import { describe, expect, it, vi } from "vitest";
import { GenerateDescriptionController } from "./GenerateDescriptionController";

function createTestApp(controller: GenerateDescriptionController) {
  const app = express();
  app.use(express.json());
  app.post("/ai/description", (req, res) => controller.handle(req, res));
  return app;
}

describe("GenerateDescriptionController", () => {
  it("returns the generated description when the use case succeeds", async () => {
    const execute = vi.fn(async () => "Texto comercial gerado.");
    const controller = new GenerateDescriptionController({
      execute,
    } as never);

    const app = createTestApp(controller);
    const payload = {
      velocidade: "400MB",
      preco: 79,
      beneficios: "SSL incluso",
    };

    const response = await request(app).post("/ai/description").send(payload);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ reply: "Texto comercial gerado." });
    expect(execute).toHaveBeenCalledWith(payload);
  });

  it("returns 500 when the use case throws", async () => {
    const controller = new GenerateDescriptionController({
      execute: vi.fn(async () => {
        throw new Error("failure");
      }),
    } as never);

    const app = createTestApp(controller);
    const response = await request(app).post("/ai/description").send({
      velocidade: "400MB",
      preco: 79,
      beneficios: "SSL incluso",
    });

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      error: "Erro ao gerar descrição",
    });
  });
});
