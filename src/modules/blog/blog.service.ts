import { Injectable } from "@nestjs/common";
import { BlogRepository } from "src/core/repositories/blogRepository.service";
import { BlogCreateDTO } from "./dtos/blog.dto";
import { ContextService } from "src/core/context/context.service";


@Injectable()
export class BlogService{
    constructor(private readonly repository: BlogRepository, private readonly context: ContextService){}

    async create(data: BlogCreateDTO, id: string = this.context.userContext._id){
        return this.repository.create({...data, createdBy: id});
    }

    async get(id: string){
        return this.repository.get(id)
    }

    async getAll(search?: string){
        return this.repository.getAll(search)
    }
}