import { IPlans } from "../../domain/interface/IPlans";

export class ListPlansUseCase {
  constructor(private plansRepository: IPlans) {}

  async execute() {
    const plans = await this.plansRepository.listAll();
    if (!plans) {
      console.error("Dados Não Encontrados!");
    }
    return plans;
  }
}
