import {Component} from '@nestjs/common';
import {User} from './interfaces/user.interface';
import {SaveUserDto} from './dto/save-user.dto';

@Component()
export class UserService {
  private readonly userList: User[] = [];

  save(saveUserDto: SaveUserDto) {
    this.userList.push(saveUserDto);
  }

  findAll() {
    return this.userList;
  }
}
