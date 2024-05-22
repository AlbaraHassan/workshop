import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/modules/user/schemas/user.schema";
import { UserRepository } from "./userRespository.service";

const Models = MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])


@Module({
    imports:[
        MongooseModule.forRoot('mongodb+srv://bera:testtest@cluster0.tuhiqt7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
        Models
    ],
    providers: [UserRepository],
    exports:[UserRepository, Models]
})
export class RepositoryModule{}