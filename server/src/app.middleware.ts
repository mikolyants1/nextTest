import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { NextFunction, Request, Response } from "express";
import { IUser, Und } from "./app.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./app.model";
import { Model } from "mongoose";
import { AuthService } from "./auth.service";
import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler";

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

export class CHeckAuthToken implements NestMiddleware {
 constructor(private readonly auth:AuthService,
 @InjectModel(User.name) private readonly Base:Model<User>){};

 async use(req:Request, res:Response, next:NextFunction) {
  const token:string = this.auth.getToken(req);
  const user:Und<IUser> = await this.Base.findById(req.params.id);
  if (!user) throw new ExceptionsHandler();
  const isAuth:boolean = await this.auth.checkToken(token,user);
  console.log(isAuth)
   if (isAuth) next();
   else throw new ExceptionsHandler();
  };
};