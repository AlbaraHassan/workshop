import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/core/repositories/userRespository.service";
import { UserCreateDTO } from "./dtos/user.dto";


@Injectable()
export class UserService {
    constructor(private readonly repository: UserRepository){}

    async create(data: Partial<UserCreateDTO>) { 
        return this.repository.create(data)
    }
    async get(id: string) { 
        return this.repository.get(id);
    }

    async getByEmail(email: string){
        return this.repository.getByEmail(email)
    }
}