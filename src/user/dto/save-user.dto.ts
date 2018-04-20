import {IsString, IsNotEmpty} from 'class-validator';
import {createRouteParamDecorator} from '@nestjs/common';

export class SaveUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}

export const User = createRouteParamDecorator((data, req) => {
  return req.body;
});
