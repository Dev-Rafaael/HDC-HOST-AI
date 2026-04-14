import { IServices } from "../../domain/interface/IServices";

export class GetServiceByIdUseCase {
  constructor(private servicesRepository: IServices) {}

  async execute(id:string) {
    try {
      const service = await this.servicesRepository.getPlanById(id);
      if (!service) {
        console.error("Service Não Encontrado!");
      }
      return service;
    } catch (error) {
      console.error(error);
    }
  }
}
