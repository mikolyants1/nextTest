import { Inject, Injectable } from "@nestjs/common";
import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IPosts, IUser, Null } from "src/app.dto";
import { User } from "src/app.model";

@Injectable()
export class PostsService {
  constructor(@InjectModel(User.name) private readonly Base:Model<User>){}

  async addPost(id:string,{text,title}:IPosts):Promise<User>{
    const user:Null<IUser> = await this.Base.findById(id);
    if (!user) return;
    const posts:Omit<IPosts,"_id">[] = user.posts;
    posts.push({title,text});
    return await this.Base
    .findByIdAndUpdate(id,{posts},{new:true})
    .exec();
   };
   
   async chanPost(id:string,{_id,text,title}:IPosts):Promise<User> {
    const user:Null<IUser> = await this.Base.findById(id);
      if (!user) return;
      const getPost:IPosts[] = user.posts;
      const posts:IPosts[] = getPost.map((item:IPosts)=>(
       `${item._id}` == _id  ? { _id,text,title } : item
      ));
      console.log(posts)
     return await this.Base
     .findByIdAndUpdate(id,{posts},{new:true})
     .exec();
    };

    async delPost(id:string,_id:string):Promise<User> {
     const user:Null<IUser> = await this.Base.findById(id);
     if (!user) return;
     const getPosts:IPosts[] = user.posts;
     const posts:IPosts[] = getPosts
     .filter((i:IPosts)=>`${i._id}` !== _id);
     return await this.Base
     .findByIdAndUpdate(id,{posts},{new:true})
     .exec();
    }
}