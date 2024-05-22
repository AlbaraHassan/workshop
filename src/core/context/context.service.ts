import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { UserContext } from './user.context';

type ContextRequest = Request & {
  context: {
    meta: Record<string, unknown>;
    userContext?: UserContext;
  };
};

@Injectable({ scope: Scope.REQUEST })
export class ContextService {
  constructor(@Inject(REQUEST) private request: ContextRequest) {
    if (!this.request) return;
    if (!this.request.context) {
      this.request.context = {
        meta: {},
      };
    }
  }



  set userContext(userContext: UserContext) {
    this.request.context.userContext = userContext;
  }

  get userContext(): any {
    return this.request.context.userContext?.user;
  }

}
