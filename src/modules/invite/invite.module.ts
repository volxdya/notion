import { Module } from '@nestjs/common';
import { InviteService } from './invite.service';
import { InviteController } from './invite.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { GroupModel } from '../group/group.model';
import { InviteModel } from './invite.model';
import { UserModel } from '../user/user.model';

@Module({
  imports: [SequelizeModule.forFeature([InviteModel, GroupModel, UserModel])],
  providers: [InviteService],
  controllers: [InviteController]
})
export class InviteModule { }
