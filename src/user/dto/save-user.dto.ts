import {IsString} from 'class-validator';
import {createRouteParamDecorator} from '@nestjs/common';

export class SaveUserDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly password: string;
}

export const User = createRouteParamDecorator((data, req) => {
  return req.body;
});
