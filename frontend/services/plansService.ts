import { api } from "./api";
import { Plan } from "@/types/plan";

export async function listPlans(): Promise<Plan[]> {
  const response = await api.get("/plans/");
  return response.data;
}
