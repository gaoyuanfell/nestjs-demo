import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  nickName: string;

  @Column()
  headUrl: string;

  @Column()
  school: string;

  @Column()
  hobby: string;

  @Column()
  diploma: string;

  @Column()
  idCard: string;

  @Column()
  address: string;

  @Column('smallint')
  state: number;

  @Column('datetime')
  createDate: Date;

  @Column('datetime')
  updateDate: Date;
}
