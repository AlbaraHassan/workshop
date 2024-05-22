import { Module } from "@nestjs/common";
import { BlogService } from "./blog.service";
import { BlogController } from "./blog.controller";
import { RepositoryModule } from "src/core/repositories/repository.module";
import { CoreModule } from "src/core/core.module";

@Module({
    imports: [CoreModule],
    controllers: [BlogController],
    providers: [BlogService]
})
export class BlogModule { }