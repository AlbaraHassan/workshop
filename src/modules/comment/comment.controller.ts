import { Body, Controller, Post } from "@nestjs/common";
import { CommentCreateDTO } from "./dtos/commentCreate.dto";
import { CommentService } from "./comment.service";
import { Auth } from "src/core/decorators/auth.decorator";


@Controller('/comment')
export class CommentController {
    constructor(private readonly service: CommentService) { }

    @Post()
    @Auth()
    create(@Body() data: CommentCreateDTO) {
        return this.service.create(data)
    }
}