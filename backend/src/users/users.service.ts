import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // CREATE
  async create(createUserDto: CreateUserDto) {
    // const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(createUserDto);
  }

  // GET ALL
  async findAll() {
    return await this.userRepository.find();
  }

  // GET ONE
  async findOne(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

  // UPDATE
  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  // DELETE
  async remove(id: number) {
    await this.userRepository.delete(id);
    return { deleted: true };
  }
}
