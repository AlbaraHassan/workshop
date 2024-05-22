import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { CoreModule } from "src/core/core.module";
import { UserService } from "../user/user.service";
import { UserModule } from "../user/user.module";



@Module({
    imports:[CoreModule, UserModule],
    controllers: [AuthController],
    providers: [AuthService, UserService]
})
export class AuthModule { }