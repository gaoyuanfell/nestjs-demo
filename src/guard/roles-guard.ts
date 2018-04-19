import {CanActivate, ExecutionContext, Guard} from '@nestjs/common';
import {Observable} from 'rxjs/Observable';
import {Reflector} from '@nestjs/core';

@Guard()
export class RolesGuard implements CanActivate {

  constructor(private readonly reflector: Reflector) {

  }

  canActivate(request: any, context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const {parent, handler} = context;

    const roles = this.reflector.get<string[]>('roles', handler);

    return true;
  }
}
