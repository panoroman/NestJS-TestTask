import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Group } from '../../groups/entities/group.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: number;
  firstname: string;
  lastname: string;
  group: Group[];
}
