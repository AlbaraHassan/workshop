import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserCreateDTO } from "../user/dtos/userCreate.dto";
import { UserLoginDTO } from "../user/dtos/userLogin.dto";


@Controller('/auth')
export class AuthController {

    constructor(private readonly service: AuthService) { }

    @Post('/login')
    login(@Body() data: UserLoginDTO) {
        return this.service.login(data)
    }

    @Post('/signup')
    signup(@Body() data: UserCreateDTO) {
        return this.service.signup(data)
    }

}