import { Module } from "@nestjs/common";
import { RepositoryModule } from "./repositories/repository.module";
import { UserRepository } from "./repositories/userRespository.service";
import { JwtHelper } from "./helpers/jwt.helper";
import { ContextService } from "./context/context.service";
import { BlogRepository } from "./repositories/blogRepository.service";

@Module({
    imports: [
        RepositoryModule,
    ],
    providers: [UserRepository, BlogRepository, JwtHelper, ContextService],
    exports: [UserRepository, BlogRepository, JwtHelper, ContextService]
})
export class CoreModule { }