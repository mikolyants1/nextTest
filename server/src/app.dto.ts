import { IsString } from "class-validator"

export class IPosts {
    @IsString()
    _id:string;

    @IsString()
    title:string;

    @IsString()
    text:string;
}

export class IUser {
    @IsString()
    _id:string;

    @IsString()
    name:string;

    @IsString()
    pass:string;

    posts:IPosts[];
}

export class Id {
    @IsString()
    _id:string;

    @IsString()
    token:string;
}

export type Null<T> = T | null;
export type Und<T> = T | undefined;