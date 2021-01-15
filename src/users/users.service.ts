import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  createOrUpdate(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find({ relations: ['group'] });
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id, { relations: ['group'] });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
