import { Group } from '../../groups/entities/group.entity';
import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @Field(() => Number)
  id: number;
  @Field(() => String)
  firstname: string;
  @Field(() => String)
  lastname: string;
  @Field(() => String)
  group: Group[];
}
