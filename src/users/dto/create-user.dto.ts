import { Group } from '../../groups/entities/group.entity';

export class CreateUserDto {
  id: number;
  firstname: string;
  lastname: string;
  group: Group[];
}
