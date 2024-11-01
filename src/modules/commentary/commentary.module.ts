import { Module } from '@nestjs/common';
import { CommentaryService } from './commentary.service';
import { CommentaryController } from './commentary.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from '../user/user.model';
import { NoteModel } from '../note/note.model';
import { CommentaryModel } from './commentary.model';

@Module({
  imports: [SequelizeModule.forFeature([UserModel, NoteModel, CommentaryModel])],
  providers: [CommentaryService],
  controllers: [CommentaryController]
})
export class CommentaryModule { }
