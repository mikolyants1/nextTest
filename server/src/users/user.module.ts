import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/app.model";
import { LogBody, LogParams } from "src/app.middleware";

@Module({
    imports:[
      MongooseModule.forFeature([
        {name:User.name,schema:UserSchema}
      ]),
    ],
    providers:[UserService],
    controllers:[UserController]
})
export class UserModule implements NestModule {
   configure(consumer: MiddlewareConsumer) {
     consumer.apply(LogBody)
     .forRoutes(
      {path:'user',method:RequestMethod.POST},
      {path:'user/:id',method:RequestMethod.PUT}
      );
      consumer.apply(LogParams)
      .forRoutes({path:'user/:id',method:RequestMethod.GET});
   };
}