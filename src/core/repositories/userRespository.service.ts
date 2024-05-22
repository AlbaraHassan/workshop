import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { UserCreateDTO } from "src/modules/user/dtos/userCreate.dto";
import { User } from "src/modules/user/schemas/user.schema";


@Injectable()
export class UserRepository {
    constructor(@InjectModel(User.name) private user: Model<User>) { }

    async create(data: Partial<UserCreateDTO>) {
        return new this.user(data).save()
    }

    async get(id: string) {
        return this.user.findOne({ _id: new Types.ObjectId(id) })
    }

    async getByEmail(email: string) {
        return this.user.findOne({ email: email })
    }
}