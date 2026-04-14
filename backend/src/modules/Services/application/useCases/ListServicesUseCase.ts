import { IServices } from "../../domain/interface/IServices";
import { ServicesDTO } from "../../dtos/ServicesDTO";

export class ListServicesUseCase {
  constructor(private servicesRepository: IServices) {}

  async execute(): Promise<ServicesDTO[]> {
    return this.servicesRepository.listAll();
  }
}
