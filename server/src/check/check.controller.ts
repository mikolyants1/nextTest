import { Body, Controller, Post } from "@nestjs/common";
import { CheckService } from "./check.sevice";
import { IUser, Id } from "src/app.dto";

@Controller('check')
export class CheckController {
    constructor(private readonly CheckService:CheckService){}

    @Post('/')
    async checkUser(@Body() body:Omit<IUser,'posts'|'_id'>):Promise<Id>{
        return await this.CheckService.checkUser(body);
    }
}