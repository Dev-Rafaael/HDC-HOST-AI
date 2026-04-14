import { api } from "./api";
import { Service } from "@/types/service";

export async function listServices(): Promise<Service[]> {
  const response = await api.get("/services/");
  return response.data;
}
