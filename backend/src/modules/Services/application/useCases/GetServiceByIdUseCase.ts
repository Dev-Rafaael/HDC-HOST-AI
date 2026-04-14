import { IServices } from "../../domain/interface/IServices";
import { ServicesDTO } from "../../dtos/ServicesDTO";

export class GetServiceByIdUseCase {
  constructor(private servicesRepository: IServices) {}

  async execute(id: string): Promise<ServicesDTO | null> {
    return this.servicesRepository.getServiceById(id);
  }
}
