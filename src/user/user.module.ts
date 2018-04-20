import {Global, Module} from '@nestjs/common';
import {UserService} from './user.service';
import {UserController} from './user.controller';
import {userProviders} from './user.providers';
import {DatabaseModule} from '../connection/database.module';

@Global()
@Module({
  imports: [
  ],
  controllers: [
    UserController,
  ],
  components: [
    UserService,
    ...userProviders,
  ],
})
export class UserModule {

}
