import {MiddlewaresConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {UserModule} from './user/user.module';
import {LoggerMiddleware} from './middleware/logger-middleware';
import {AuthModule} from './guard/auth.module';
import {DatabaseModule} from './connection/database.module';
import {userProviders} from './user/user.providers';

@Module({
  imports: [
    UserModule,
    AuthModule,

    DatabaseModule,
  ],
  controllers: [AppController],
  components: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): MiddlewaresConsumer | void {
    consumer.apply(LoggerMiddleware).forRoutes(AppController);
  }
}
