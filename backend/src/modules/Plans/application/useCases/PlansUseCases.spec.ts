import { describe, expect, it, vi } from "vitest";
import { GetPlanByIdUseCase } from "./GetPlanByIdUseCase";
import { ListPlansUseCase } from "./ListPlansUseCase";

const plan = {
  id: "plan-1",
  price: "R$30/mês",
  name: "Intermediário",
  itens: ["5GB", "SSL"],
  description: "Plano equilibrado",
  performance: "Cache padrão",
  uptime: "99.7%",
  ssl: "SSL grátis",
  backup: "48h",
  suporte: "Chat",
  recomendadoPara: "Sites institucionais",
  tecnologias: "PHP, Node",
  sla: "6h",
  highlight: false,
};

describe("Plans use cases", () => {
  it("ListPlansUseCase returns every plan from the repository", async () => {
    const repository = {
      listAll: vi.fn(async () => [plan]),
      getPlanById: vi.fn(),
    };

    const useCase = new ListPlansUseCase(repository);
    const result = await useCase.execute();

    expect(result).toEqual([plan]);
    expect(repository.listAll).toHaveBeenCalledTimes(1);
  });

  it("GetPlanByIdUseCase returns the plan found by id", async () => {
    const repository = {
      listAll: vi.fn(),
      getPlanById: vi.fn(async () => plan),
    };

    const useCase = new GetPlanByIdUseCase(repository);
    const result = await useCase.execute("plan-1");

    expect(result).toEqual(plan);
    expect(repository.getPlanById).toHaveBeenCalledWith("plan-1");
  });
});
