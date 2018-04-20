import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import 'rxjs';
import {HttpExceptionFilter} from './filter/http-exception.filter';
import {ValidationPipe} from '@nestjs/common';
import {RolesGuard} from './guard/roles-guard';
import {AuthModule} from './guard/auth.module';
import {ExceptionInterceptor} from './interceptor/exception.interceptor';
import {LoggerInterceptor} from './interceptor/logger.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalPipes(new ValidationPipe());

  const rolesGuard = app.select(AuthModule).get(RolesGuard);
  app.useGlobalGuards(rolesGuard);

  app.useGlobalInterceptors(new LoggerInterceptor());
  app.useGlobalInterceptors(new ExceptionInterceptor());
  await app.listen(3000);
}

bootstrap();
