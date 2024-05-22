import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtPayload } from 'jsonwebtoken';
import { ContextService } from '../context/context.service';
import { JwtHelper } from '../helpers/jwt.helper';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly context: ContextService,
    private readonly jwt: JwtHelper,
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = this.getAuthHeader(request);
    this.context.userContext = { user };
    return true;
  }

  private getAuthHeader(request: any) {
    const authHeader = request.headers['authorization'];
    const token = this.jwt.decode(authHeader) as JwtPayload;
    const currentTime = Date.now() / 1000;
    if (!token || (token.exp && token.exp < currentTime)) {
      throw new HttpException('Invalid Token', HttpStatus.UNAUTHORIZED);
    }
    return token;
  }
}
