import { Module } from "@nestjs/common";
import { CommentController } from "./comment.controller";
import { CommentService } from "./comment.service";
import { CoreModule } from "src/core/core.module";


@Module({
    imports: [CoreModule],
    controllers: [CommentController],
    providers: [CommentService]
})
export class CommentModule { }