import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Group } from '../../groups/entities/group.entity';

@Schema()
export class User {
  @Prop({ type: String, required: true })
  nickname: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Groups' }] })
  groups: Group[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  friends: User[];
}

export const UserSchema = SchemaFactory.createForClass(User);
