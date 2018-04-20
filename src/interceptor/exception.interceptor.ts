import {ExecutionContext, HttpException, HttpStatus, Interceptor, NestInterceptor} from '@nestjs/common';
import {Observable} from 'rxjs/Observable';

@Interceptor()
export class ExceptionInterceptor implements NestInterceptor {

  intercept(dataOrRequest: any, context: ExecutionContext, stream$: Observable<any>): Observable<any> | Promise<Observable<any>> {
    return stream$.catch((err): Observable<any> => {
      if (err) {
        return Observable.throw(new HttpException(err.message, err.status));
      }
      return Observable.throw(new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR));
    });
  }
}
