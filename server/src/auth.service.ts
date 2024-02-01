import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { IUser } from "./app.dto";
import { Request } from "express";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService:JwtService){};

 async createToken({_id,name}:Partial<IUser>):Promise<string>{
    return await this.jwtService.sign({_id,name});
  };

 async checkToken(token:string,{_id,name}:IUser):Promise<boolean>{
     const decoded = await this.jwtService.verify(token);
     return decoded._id == _id && decoded.name == name; 
  };

  getToken({headers}:Request):string{
    const author:string = headers.authorization;
    return author.replace("Bearer","").trim();
  }
}