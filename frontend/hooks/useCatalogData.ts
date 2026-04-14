"use client";

import { useEffect, useState } from "react";
import { listPlans } from "@/services/plansService";
import { listServices } from "@/services/servicesService";
import { Plan } from "@/types/plan";
import { Service } from "@/types/service";

export function useCatalogData() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function reload() {
    setIsLoading(true);
    setError(null);

    try {
      const [plansData, servicesData] = await Promise.all([
        listPlans(),
        listServices(),
      ]);

      setPlans(plansData);
      setServices(servicesData);
    } catch {
      setError("Não foi possível carregar os dados agora. Tente novamente em instantes.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    void reload();
  }, []);

  return { plans, services, isLoading, error, reload };
}
