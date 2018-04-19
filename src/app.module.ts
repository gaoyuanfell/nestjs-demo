import {MiddlewaresConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {UserModule} from './user/user.module';
import {LoggerMiddleware} from './middleware/logger-middleware';
import {AuthModule} from './guard/auth.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): MiddlewaresConsumer | void {
    consumer.apply(LoggerMiddleware).forRoutes(AppController);
  }
}
