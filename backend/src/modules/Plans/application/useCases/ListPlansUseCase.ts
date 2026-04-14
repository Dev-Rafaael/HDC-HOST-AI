import { IPlans } from "../../domain/interface/IPlans";
import { PlansDTO } from "../../dtos/PlansDTO";

export class ListPlansUseCase {
  constructor(private plansRepository: IPlans) {}

  async execute(): Promise<PlansDTO[]> {
    return this.plansRepository.listAll();
  }
}
