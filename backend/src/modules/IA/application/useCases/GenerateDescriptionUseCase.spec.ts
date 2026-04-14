import { describe, expect, it, vi } from "vitest";
import { GenerateDescriptionUseCase } from "./GenerateDescriptionUseCase";

describe("GenerateDescriptionUseCase", () => {
  it("builds the commercial description prompt with the provided data", async () => {
    const aiClient = {
      generate: vi.fn(async (prompt: string) => prompt),
    };

    const useCase = new GenerateDescriptionUseCase(aiClient);
    const result = await useCase.execute({
      velocidade: "500MB",
      preco: 99,
      beneficios: "CDN, SSL e suporte prioritário",
    });

    expect(result).toContain("Velocidade: 500MB");
    expect(result).toContain("Preço: R$99");
    expect(result).toContain("Benefícios: CDN, SSL e suporte prioritário");
  });

  it("throws a standardized error when the AI client fails", async () => {
    const aiClient = {
      generate: vi.fn(async () => {
        throw new Error("upstream failure");
      }),
    };

    const useCase = new GenerateDescriptionUseCase(aiClient);

    await expect(
      useCase.execute({
        velocidade: "200MB",
        preco: 49,
        beneficios: "Firewall gerenciado",
      }),
    ).rejects.toThrow("Erro ao gerar descrição");
  });
});
