import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupsModule } from './groups/groups.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({ name: 'default' }),
    GroupsModule,
    MongooseModule.forRoot(
      `mongodb+srv://root:1111@cluster0.lc3rm.mongodb.net/test?retryWrites=true&w=majority`,
    ),
    GraphQLModule.forRoot({
      include: [UsersModule, GroupsModule],
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
