import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from './user.model';
import { UserController } from './user.controller';
import { NoteModel } from '../note/note.model';
import { GroupModel } from '../group/group.model';
import { UserGroupsModel } from '../group/user-groups.model';
import { InviteModel } from '../invite/invite.model';
import { CommentaryModel } from '../commentary/commentary.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      UserModel,
      NoteModel,
      GroupModel,
      UserGroupsModel,
      InviteModel,
      CommentaryModel
    ])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule { }