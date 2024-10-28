import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { NoteModel } from './note.model';
import { UserModel } from '../user/user.model';

@Module({
  imports: [SequelizeModule.forFeature([NoteModel, UserModel])],
  providers: [NoteService],
  controllers: [NoteController]
})
export class NoteModule { }
