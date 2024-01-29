import { Body, Controller, Delete, Param, Post, Put } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { IPosts, Id } from "src/app.dto";
import { User } from "src/app.model";

@Controller('posts')
export class PostsController {
  constructor(private readonly PostServise:PostsService){}
    
    @Post(':id')
    async addPost(@Param('id') id:string,@Body() body:IPosts):Promise<User>{
     return await this.PostServise.addPost(id,body);
    };
    
    @Delete(':id')
    async delPost(@Param('id') id:string,@Body() {_id}:Id):Promise<User>{
     return await this.PostServise.delPost(id,_id);
    };
    
    @Put(':id')
    async chanPost(@Param('id') id:string,@Body() body:IPosts):Promise<User>{
     return await this.PostServise.chanPost(id,body);
    };
}