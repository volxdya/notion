import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { NoteModel } from './note.model';
import { UserModel } from '../user/user.model';
import { GroupModel } from '../group/group.model';

@Module({
  imports: [SequelizeModule.forFeature([NoteModel, UserModel, GroupModel])],
  providers: [NoteService],
  controllers: [NoteController]
})
export class NoteModule { }
