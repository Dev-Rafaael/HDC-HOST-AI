
import { Request, Response } from "express";
import { GetPlanByIdUseCase } from "../../application/useCases/GetPlanByIdUseCase";
export class GetPlanByIdController{
    constructor( private getPlanByIdUseCase:GetPlanByIdUseCase){}


    async handle(req:Request,res:Response){
        try {
            const id = String(req.params.id)
            const plans = await this.getPlanByIdUseCase.execute(id)
            res.status(200).json(plans)
        } catch (error) {
            res.status(400).json({msg:"Erro ao encontrar Planos"})
        }
    }
}