import {Body, Controller, Get, HttpStatus, Param, Post, Req, Res} from '@nestjs/common';
import {UserService} from './user.service';
import {SaveUserDto, User} from './dto/save-user.dto';
import {Roles} from '../decorator/roles.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Roles('admin')
  @Post('save')
  save(@Res() res, @Req() req, @Body() saveUserDto: SaveUserDto) {
    this.userService.save(saveUserDto);
    res.status(HttpStatus.OK).send(saveUserDto);
  }

  @Get('find/:id')
  find(@Param() param) {
    return param;
  }

  @Get('findAll')
  findAll() {
    return this.userService.findAll();
  }

  @Post('update')
  update(@Body() saveUserDto: SaveUserDto) {
    return saveUserDto;
  }

  login() {

  }

  logout() {

  }
}
