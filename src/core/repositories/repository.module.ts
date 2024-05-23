import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/modules/user/schemas/user.schema";
import { UserRepository } from "./userRespository.service";
import { Blog, BlogSchema } from "src/modules/blog/schemas/blog.schema";
import { BlogRepository } from "./blogRepository.service";
import { Comment, CommentSchema } from "src/modules/comment/schemas/comment.schema";
import { CommentRepository } from "./commentRepository.service";

const Models = MongooseModule.forFeature([
    { name: User.name, schema: UserSchema },
    { name: Blog.name, schema: BlogSchema },
    { name: Comment.name, schema: CommentSchema }
])


@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://bera:testtest@cluster0.hhuawnp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
        Models
    ],
    providers: [UserRepository, BlogRepository, CommentRepository],
    exports: [Models, UserRepository, BlogRepository, CommentRepository]
})
export class RepositoryModule { }