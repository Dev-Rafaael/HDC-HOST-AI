import { ServicesDTO } from "../../dtos/ServicesDTO"

export interface IServices{
    listAll():Promise<ServicesDTO>
    getPlanById(id:string):Promise<ServicesDTO>
}