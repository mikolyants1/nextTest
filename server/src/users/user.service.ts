import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/app.model";
import * as bc from 'bcrypt'

@Injectable()
export class UserService {
 constructor(@InjectModel(User.name) private readonly Base:Model<User>){}

 async getUsers():Promise<User[]>{
  return await this.Base.find().exec();
 };

 async getUser(id:string):Promise<User> {
  return await this.Base.findById(id).exec();
 };

 async addUser({name,pass}:Omit<User,"_id"|'posts'>):Promise<User>{
  const salt:string = await bc.genSalt(10);
  const hash:string = await bc.hash(pass,salt);
  return await new this.Base({name,pass:hash,posts:[]}).save();
 };
};