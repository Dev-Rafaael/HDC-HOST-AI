import { IServices } from "../../domain/interface/IServices";

export class ListServicesUseCase {
  constructor(private servicesRepository: IServices) {}

  async execute() {
    const plans = await this.servicesRepository.listAll();
    if (!plans) {
      console.error("Dados Não Encontrados!");
    }
    return plans;
  }
}
