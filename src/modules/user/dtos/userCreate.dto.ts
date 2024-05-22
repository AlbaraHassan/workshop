import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { MatchPasswords } from "src/core/validation/validation.decorator";

export class UserCreateDTO {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsNotEmpty()
    @MatchPasswords()
    confirmationPassword: string
}



