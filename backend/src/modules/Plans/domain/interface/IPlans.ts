import { PlansDTO } from "../../dtos/PlansDTO";

export interface IPlans{
    listAll():Promise<PlansDTO>
    getPlanById(id:string):Promise<PlansDTO>
}