import { Module } from "@nestjs/common";
import { CheckController } from "./check.controller";
import { CheckService } from "./check.sevice";
import * as env from 'dotenv'
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/app.model";

env.config();

@Module({
    imports:[
      MongooseModule.forFeature([
        {name:User.name,schema:UserSchema}
      ]),
    ],
    providers:[CheckService],
    controllers:[CheckController]
})
export class CheckModule {}