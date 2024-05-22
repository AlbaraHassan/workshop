import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class UserLoginDTO {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string
}