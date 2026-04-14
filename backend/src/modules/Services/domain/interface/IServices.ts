import { ServicesDTO } from "../../dtos/ServicesDTO";

export interface IServices {
  listAll(): Promise<ServicesDTO[]>;
  getServiceById(id: string): Promise<ServicesDTO | null>;
}
