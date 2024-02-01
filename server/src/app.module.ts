import { Module} from '@nestjs/common';
import { PostModule } from './posts/posts.module';
import { UserModule } from './users/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckModule } from './check/check.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:".db.env",
    }),
    JwtModule.register({
      global:true, 
      secret:"secret_key_1",
      signOptions:{ 
        expiresIn:"24h"
      }
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    PostModule,
    UserModule,
    CheckModule
  ],
})
export class AppModule {}
