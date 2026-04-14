import { IPlans } from "../../domain/interface/IPlans";

export class GetPlanByIdUseCase {
  constructor(private plansRepository: IPlans) {}

  async execute(id:string) {
    try {
      const plan = await this.plansRepository.getPlanById(id);
      if (!plan) {
        console.error("Plano Não Encontrado!");
      }
      return plan;
    } catch (error) {
      console.error(error);
    }
  }
}
