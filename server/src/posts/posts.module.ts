import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { PostsController } from "./posts.controller";
import { PostsService } from "./posts.service";
import * as env from 'dotenv'
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/app.model";
import { LogBody, LogParams } from "src/app.middleware";

env.config();

@Module({
    imports:[
      MongooseModule.forFeature([
        {name:User.name,schema:UserSchema}
      ]),
    ],
    providers:[PostsService],
    controllers:[PostsController]
})
export class PostModule implements NestModule {
   configure(consumer: MiddlewareConsumer) {
     consumer.apply(LogBody,LogParams)
     .forRoutes({path:'/:id',method:RequestMethod.ALL});
   };
};