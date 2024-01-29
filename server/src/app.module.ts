import { Module } from '@nestjs/common';
import * as env from 'dotenv';
import { PostModule } from './posts/posts.module';
import { UserModule } from './users/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckModule } from './check/check.module';
import { uri } from './app.env';

env.config();

@Module({
  imports: [
    MongooseModule.forRoot(uri),
    PostModule,
    UserModule,
    CheckModule
  ],
})
export class AppModule {}
