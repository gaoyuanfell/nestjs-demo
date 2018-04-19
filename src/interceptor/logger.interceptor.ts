import {ExecutionContext, Interceptor, NestInterceptor} from '@nestjs/common';
import {Observable} from 'rxjs/Observable';

@Interceptor()
export class LoggerInterceptor implements NestInterceptor{

  intercept(dataOrRequest: any, context: ExecutionContext, stream$: Observable<any>): Observable<any> | Promise<Observable<any>> {
    console.log('Before...');
    const now = Date.now();

    return stream$.do(
      () => console.log(`After... ${Date.now() - now}ms`),
    );
  }
}
