import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/CreateNoteDto';

@Controller('note')
export class NoteController {
    constructor(private readonly noteService: NoteService) { }

    @Post('/create')
    async create(@Body() dto: CreateNoteDto) {
        return this.noteService.create(dto);
    }

    @Get('/get_all')
    async getAll() {
        return this.noteService.getAll();
    }

    @Patch('/change_status/:noteId')
    async changeStatus(@Param('noteId') noteId: number) {
        return this.noteService.changeStatusNote(noteId);
    }
}
