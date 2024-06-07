import { HttpException, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class LoggerMiddleWare implements NestMiddleware{
    use(req: Request, res: Response, next:NextFunction) {
        console.log("Im MiddleWare")
        const APIKEY = req.headers['x-api-key']
        console.log(APIKEY)
        if(APIKEY !== "gela")
            return res.json({message:"choose correct X-API-KEY"})
            
        next()
    }
}

export function log(req:Request,res:Response,next:NextFunction){
    console.log("Im Like A Express MiddleWare",req.headers["user-agent"])
    next()
}