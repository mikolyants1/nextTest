import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

@Schema()
export class Posts extends Document {
  
   @Prop({
    type:String,
    required:true
   })
   title:string;

   @Prop({
    type:String,
    required:true
   })
   text:string;
}

@Schema()
export class User extends Document {
   @Prop({
    type:String,
    required:true
   })
   name:string;

   @Prop({
     type:String, 
     required:true
   })
   pass:string;

   @Prop({
     type:[Posts],
     required:true
   })
   posts:[Posts]
}

export const UserSchema = SchemaFactory.createForClass(User);