import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { CoreModule } from "src/core/core.module";


@Module({
    imports: [CoreModule],
    providers: [UserService]
})
export class UserModule { }