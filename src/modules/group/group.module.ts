import { Module } from '@nestjs/common';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from '../user/user.model';
import { GroupModel } from './group.model';
import { UserGroupsModel } from './user-groups.model';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    SequelizeModule.forFeature([UserModel, GroupModel, UserGroupsModel]),
    UserModule
  ],
  controllers: [GroupController],
  providers: [GroupService]
})
export class GroupModule { }
