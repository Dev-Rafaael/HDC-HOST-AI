import { IPlans } from "../../domain/interface/IPlans";
import { PlansDTO } from "../../dtos/PlansDTO";

export class GetPlanByIdUseCase {
  constructor(private plansRepository: IPlans) {}

  async execute(id: string): Promise<PlansDTO | null> {
    return this.plansRepository.getPlanById(id);
  }
}
