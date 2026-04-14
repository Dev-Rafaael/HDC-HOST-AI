"use client";

import { useState } from "react";
import { suggestPlanIA } from "@/services/aiService";
import { PlanRecommendationRequest } from "@/types/ai";
import { Plan } from "@/types/plan";

export interface AdvisorResult {
  reply: string;
  recommendedPlanName: string | null;
  summary: string;
}

function buildSummary(payload: PlanRecommendationRequest) {
  const optionalDetails = [
    payload.faixaOrcamento ? `orçamento ${payload.faixaOrcamento}` : null,
    payload.prioridade ? `prioridade em ${payload.prioridade}` : null,
  ]
    .filter(Boolean)
    .join(" e ");

  return `${payload.pessoas} pessoas, ${payload.dispositivos} dispositivos e uso voltado para ${payload.uso}${optionalDetails ? `, com ${optionalDetails}` : ""}.`;
}

function extractRecommendedPlan(reply: string, plans: Plan[]) {
  const normalizedReply = reply.toLowerCase();

  return plans.find((plan) => normalizedReply.includes(plan.name.toLowerCase()))?.name ?? null;
}

export function usePlanAdvisor(plans: Plan[]) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AdvisorResult | null>(null);

  async function submit(payload: PlanRecommendationRequest) {
    setIsLoading(true);
    setError(null);

    try {
      const response = await suggestPlanIA(payload);

      setResult({
        reply: response.reply,
        recommendedPlanName: extractRecommendedPlan(response.reply, plans),
        summary: buildSummary(payload),
      });
    } catch {
      setError("Não conseguimos gerar a recomendação agora. Tente novamente em instantes.");
    } finally {
      setIsLoading(false);
    }
  }

  function reset() {
    setError(null);
    setResult(null);
    setIsLoading(false);
  }

  return { submit, reset, result, error, isLoading };
}