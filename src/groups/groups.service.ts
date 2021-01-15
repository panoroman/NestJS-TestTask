import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) {}

  createOrUpdate(createGroupDto: CreateGroupDto) {
    return this.groupRepository.save(createGroupDto);
  }

  findAll() {
    return this.groupRepository.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.groupRepository.findOne(id, { relations: ['user'] });
  }

  async remove(id: number): Promise<void> {
    await this.groupRepository.delete(id);
  }
}
