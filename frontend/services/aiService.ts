import { api } from "./api";
import { PlanRecommendationRequest, PlanRecommendationResponse } from "@/types/ai";

export async function suggestPlanIA(
  data: PlanRecommendationRequest,
): Promise<PlanRecommendationResponse> {
  const response = await api.post("/ai/suggest", data);
  return response.data;
}

export async function generateDescription(data: {
  velocidade: string;
  beneficios: string;
}): Promise<{ reply: string }> {
  const response = await api.post("/ai/description", data);
  return response.data;
}
