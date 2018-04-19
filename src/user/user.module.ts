import {Global, Module} from '@nestjs/common';
import {UserService} from './user.service';
import {UserController} from './user.controller';

@Global()
@Module({
  controllers: [UserController],
  components: [UserService],
})
export class UserModule {

}
