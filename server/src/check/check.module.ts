import { Module } from "@nestjs/common";
import { CheckController } from "./check.controller";
import { CheckService } from "./check.sevice";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/app.model";
import { AuthService } from "src/auth.service";

@Module({
    imports:[
      MongooseModule.forFeature([
        {name:User.name,schema:UserSchema}
      ]),
    ],
    providers:[CheckService,AuthService],
    controllers:[CheckController]
})
export class CheckModule {}