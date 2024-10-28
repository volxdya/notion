import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from './user.model';
import { UserController } from './user.controller';

@Module({
  imports: [SequelizeModule.forFeature([UserModel])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
