import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/modules/user/schemas/user.schema";
import { UserRepository } from "./userRespository.service";
import { Blog, BlogSchema } from "src/modules/blog/schemas/blog.schema";
import { BlogRepository } from "./blogRepository.service";

const Models = MongooseModule.forFeature([
    { name: User.name, schema: UserSchema },
    { name: Blog.name, schema: BlogSchema }
])


@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://bera:testtest@cluster0.tuhiqt7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
        Models
    ],
    providers: [UserRepository, BlogRepository],
    exports: [Models, UserRepository, BlogRepository]
})
export class RepositoryModule { }