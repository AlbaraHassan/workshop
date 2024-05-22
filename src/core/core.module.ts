import { Module } from "@nestjs/common";
import { RepositoryModule } from "./repositories/repository.module";
import { UserRepository } from "./repositories/userRespository.service";
import { JwtHelper } from "./helpers/jwt.helper";
import { ContextService } from "./context/context.service";

@Module({
    imports: [
        RepositoryModule,
    ],
    providers: [UserRepository, JwtHelper, ContextService],
    exports: [UserRepository, JwtHelper, ContextService]
})
export class CoreModule { }