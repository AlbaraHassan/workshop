import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Blog } from "src/modules/blog/schemas/blog.schema";
import { CommentCreateDTO } from "src/modules/comment/dtos/commentCreate.dto";
import { Comment } from "src/modules/comment/schemas/comment.schema";


@Injectable()
export class CommentRepository {
    constructor(
        @InjectModel(Comment.name) private comment: Model<Comment>,
        @InjectModel(Blog.name) private blog: Model<Blog>
    ) { }

    async create(data: Partial<CommentCreateDTO>) {
        const comment = await new this.comment(data).save()
        await this.blog.findByIdAndUpdate(data.blogId, { $push: { comments: comment._id } })
        return comment;
    }
}