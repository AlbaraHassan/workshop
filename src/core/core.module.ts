import { Module } from "@nestjs/common";
import { RepositoryModule } from "./repositories/repository.module";
import { UserRepository } from "./repositories/userRespository.service";
import { JwtHelper } from "./helpers/jwt.helper";

@Module({
    imports: [
        RepositoryModule,
    ],
    providers: [UserRepository, JwtHelper],
    exports: [UserRepository, JwtHelper]
})
export class CoreModule { }