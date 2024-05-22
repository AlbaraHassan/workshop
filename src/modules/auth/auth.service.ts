import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserCreateDTO, UserLoginDTO } from "../user/dtos/user.dto";
import * as bcrypt from 'bcrypt';
import { UserService } from "../user/user.service";
import { User } from "../user/schemas/user.schema";
import { JwtHelper } from "src/core/helpers/jwt.helper";

@Injectable()
export class AuthService {
    constructor(private readonly service: UserService,
        private readonly jwt: JwtHelper
    ) { }

    private async validate({ password: userPassword, email, _id, name }: User, password: string): Promise<string> {
        if (!(await bcrypt.compare(password, userPassword))) throw new HttpException("Wrong credintials", HttpStatus.FORBIDDEN)

        return this.jwt.sign({ _id, email, name })
    }

    async login({ email, password }: UserLoginDTO) {
        const user = await this.service.getByEmail(email)
        if (!user) {
            throw new HttpException("User does not exist", HttpStatus.FORBIDDEN)
        }

        return this.validate(user, password)
    }

    async signup({ confirmationPassword, password, ...data }: UserCreateDTO) {
        if (!!(await this.service.getByEmail(data.email))) {
            throw new HttpException("User already exists", HttpStatus.CONFLICT)
        }
        const hashed = await bcrypt.hash(password, 10)
        return this.service.create({ ...data, password: hashed });
    }
}