import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { INoteStatus, NoteModel, noteStatutes } from './note.model';
import { CreateNoteDto } from './dto/CreateNoteDto';

@Injectable()
export class NoteService {
    constructor(@InjectModel(NoteModel) private readonly noteModel: typeof NoteModel) { }

    async create(dto: CreateNoteDto) {
        return this.noteModel.create(dto);
    }

    async getAll() {
        return this.noteModel.findAll({ include: { all: true } });
    }

    async changeStatusNote(noteId: number) {
        const note: NoteModel = await this.noteModel.findOne({ where: { id: noteId } });
        const statuses: INoteStatus[] = noteStatutes;

        await note.update({
            status: statuses[note.status.id]
        });

        return note;
    }
}
