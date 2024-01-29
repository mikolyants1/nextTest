import { Body, Controller, Get, Injectable, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "src/app.model";

@Controller('users')
export class UserController {
   constructor(private readonly userService:UserService){}

   @Get('/')
   async getUsers():Promise<User[]>{
     return await this.userService.getUsers();
   };

   @Get(':id')
   async getUser(@Param('id') id:string):Promise<User>{
    return await this.userService.getUser(id);
   };

   @Post('/')
   async addUser(@Body() body:Omit<User,"_id"|'posts'>):Promise<User>{
    return await this.userService.addUser(body);
   }
}