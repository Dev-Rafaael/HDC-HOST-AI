import { describe, expect, it, vi } from "vitest";
import { GetServiceByIdUseCase } from "./GetServiceByIdUseCase";
import { ListServicesUseCase } from "./ListServicesUseCase";

const service = {
  id: "performance",
  icon: "fas fa-rocket",
  title: "Alta Performance",
  desc: "Servidores otimizados com SSD NVMe",
};

describe("Services use cases", () => {
  it("ListServicesUseCase returns every service from the repository", async () => {
    const repository = {
      listAll: vi.fn(async () => [service]),
      getServiceById: vi.fn(),
    };

    const useCase = new ListServicesUseCase(repository);
    const result = await useCase.execute();

    expect(result).toEqual([service]);
    expect(repository.listAll).toHaveBeenCalledTimes(1);
  });

  it("GetServiceByIdUseCase returns the service found by id", async () => {
    const repository = {
      listAll: vi.fn(),
      getServiceById: vi.fn(async () => service),
    };

    const useCase = new GetServiceByIdUseCase(repository);
    const result = await useCase.execute("performance");

    expect(result).toEqual(service);
    expect(repository.getServiceById).toHaveBeenCalledWith("performance");
  });
});
