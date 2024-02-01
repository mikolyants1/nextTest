import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IUser, Id, Und } from "src/app.dto";
import { User } from "src/app.model";
import * as bc from 'bcrypt'
import { AuthService } from "src/auth.service";

@Injectable()
export class CheckService {
  constructor(private readonly auth:AuthService,
  @InjectModel(User.name) private readonly Base:Model<User>){};

   async checkUser({name,pass}:Omit<IUser,'_id'|'posts'>):Promise<Id> {
    const data:IUser[] = await this.Base.find();
    const user:Und<IUser> = data.find((i:IUser)=>(
     i.name == name && bc.compare(pass,i.pass)
    ));
    const token:string = user ? await this.auth.createToken(user) : "";
    return {
        _id: user ? user._id : '-1',
        token
      };
   };
};