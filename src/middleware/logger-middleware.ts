import {ExpressMiddleware, Middleware, NestMiddleware} from '@nestjs/common';
import {AsyncExpressMiddleware} from '@nestjs/common/interfaces';

@Middleware()
export class LoggerMiddleware implements NestMiddleware {

  resolve(...args): ExpressMiddleware | AsyncExpressMiddleware | Promise<AsyncExpressMiddleware> {
    return ((req, res, next) => {
      next();
    });
  }
}
