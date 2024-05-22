import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BlogCreateDTO } from "src/modules/blog/dtos/blog.dto";
import { Blog } from "src/modules/blog/schemas/blog.schema";
import { Types } from "mongoose"

@Injectable()
export class BlogRepository {
    constructor(@InjectModel(Blog.name) private blog: Model<Blog>) { }

    async create(data: Partial<BlogCreateDTO>) {
        return new this.blog(data).save()
    }

    async get(id: string) {
        return this.blog.findOne({ _id: new Types.ObjectId(id) }).populate('createdBy', ['_id', 'name'])
    }

    async getAll(search?: string) {
        return this.blog.find(search && {
            $text: {$search: search}
        }).populate('createdBy', ['_id', 'name'])
    }
}