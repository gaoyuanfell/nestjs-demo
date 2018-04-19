import {Module} from '@nestjs/common';
import {RolesGuard} from './roles-guard';

@Module({
  components: [
    RolesGuard,
  ],
})
export class AuthModule {

}
