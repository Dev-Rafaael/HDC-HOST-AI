export interface PlanRecommendationRequest {
  pessoas: number;
  uso: string;
  dispositivos: number;
  faixaOrcamento?: string;
  prioridade?: string;
}

export interface PlanRecommendationResponse {
  reply: string;
}
