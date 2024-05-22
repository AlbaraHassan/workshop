import { Injectable } from "@nestjs/common";
import * as jwt from "jsonwebtoken"

@Injectable()
export class JwtHelper {
    sign(
        payload: string | object | Buffer,
        options?: jwt.SignOptions
    ): string {
        return jwt.sign(payload, 's3crts3crt', options)
    }


    decode(
        token?: string
    ): null | jwt.JwtPayload | string | undefined {
        if (!token) return;
        return jwt.decode(token.includes('Bearer') ? token?.split(' ')[1] : token)
    }
}