import {Component, Inject} from '@nestjs/common';
import {User} from './interfaces/user.interface';
import {SaveUserDto} from './dto/save-user.dto';
import {Repository} from 'typeorm';
import {UserEntity} from './user.entity';

@Component()
export class UserService {
  constructor(@Inject('UserRepositoryToken') private readonly photoRepository: Repository<UserEntity>) {

  }

  private readonly userList: User[] = [];

  save(saveUserDto: SaveUserDto) {
    this.userList.push(saveUserDto);
  }

  async findAll() {
    return await this.photoRepository.find();
  }
}
