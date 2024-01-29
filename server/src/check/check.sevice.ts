import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IUser, Id, Und } from "src/app.dto";
import { User } from "src/app.model";
import * as bc from 'bcrypt'

@Injectable()
export class CheckService {
  constructor(@InjectModel(User.name) private readonly Base:Model<User>){}

   async checkUser({name,pass}:Omit<IUser,'_id'|'posts'>):Promise<Id> {
    const data:IUser[] = await this.Base.find();
    const user:Und<IUser> = data.find((i:IUser)=>(
     i.name == name && bc.compare(pass,i.pass)
    ));
    return {_id: user ? user._id : '-1'};
   };
}