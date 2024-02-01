import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { PostsController } from "./posts.controller";
import { PostsService } from "./posts.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/app.model";
import { CHeckAuthToken, LogBody, LogParams } from "src/app.middleware";
import { AuthService } from "src/auth.service";

@Module({
    imports:[
      MongooseModule.forFeature([
        {name:User.name,schema:UserSchema}
      ]),
    ],
    providers:[PostsService,AuthService],
    controllers:[PostsController]
})
export class PostModule implements NestModule {
   configure(consumer: MiddlewareConsumer) {
     consumer.apply(LogBody,LogParams,CHeckAuthToken)
     .forRoutes('posts');
   };
};