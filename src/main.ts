import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import 'rxjs';
import {HttpExceptionFilter} from './filter/http-exception.filter';
import {UserModule} from './user/user.module';
import {UserController} from './user/user.controller';
import {ValidationPipe} from '@nestjs/common';
import {RolesGuard} from './guard/roles-guard';
import {AuthModule} from './guard/auth.module';
import {LoggerInterceptor} from './interceptor/logger.interceptor';
import {ExceptionInterceptor} from './interceptor/exception.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());

  const ctrl = app.select(UserModule).get(UserController);

  app.useGlobalPipes(new ValidationPipe());

  const rolesGuard = app.select(AuthModule).get(RolesGuard)
  app.useGlobalGuards(rolesGuard);

  app.useGlobalInterceptors(new LoggerInterceptor())
  app.useGlobalInterceptors(new ExceptionInterceptor())
  await app.listen(3000);
}

bootstrap();
