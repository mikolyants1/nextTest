import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class LogBody implements NestMiddleware {
    use(req: Request, res:Response, next:NextFunction) {
        console.log(req.body);
        next();
    };
};

export class LogParams implements NestMiddleware {
    use(req:Request, res:Response, next:NextFunction) {
        console.log(req.params);
        next();
    };
};