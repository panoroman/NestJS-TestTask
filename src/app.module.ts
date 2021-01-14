import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupsModule } from './groups/groups.module';
import { FriendsModule } from './friends/friends.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(), GroupsModule, FriendsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
