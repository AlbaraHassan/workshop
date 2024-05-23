import { Injectable } from "@nestjs/common";
import { CommentRepository } from "src/core/repositories/commentRepository.service";
import { CommentCreateDTO } from "./dtos/commentCreate.dto";
import { ContextService } from "src/core/context/context.service";


@Injectable()
export class CommentService{

    constructor(private readonly repository: CommentRepository, private readonly context: ContextService){}

    async create(data: CommentCreateDTO, id: string = this.context.userContext._id){
        return this.repository.create({...data, createdBy: id})
    }



}