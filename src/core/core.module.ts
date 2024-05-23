import { Module } from "@nestjs/common";
import { RepositoryModule } from "./repositories/repository.module";
import { UserRepository } from "./repositories/userRespository.service";
import { JwtHelper } from "./helpers/jwt.helper";
import { ContextService } from "./context/context.service";
import { BlogRepository } from "./repositories/blogRepository.service";
import { CommentRepository } from "./repositories/commentRepository.service";

@Module({
    imports: [
        RepositoryModule,
    ],
    providers: [UserRepository, BlogRepository, CommentRepository, JwtHelper, ContextService],
    exports: [UserRepository, BlogRepository, CommentRepository, JwtHelper, ContextService]
})
export class CoreModule { }