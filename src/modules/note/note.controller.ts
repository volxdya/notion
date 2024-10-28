import { Body, Controller, Get, Post } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/CreateNoteDto';

@Controller('note')
export class NoteController {
    constructor(private readonly noteService: NoteService) {}

    @Post('/create')
    async create(@Body() dto: CreateNoteDto){
        return this.noteService.create(dto);
    }

    @Get('/get_all')
    async getAll() {
        return this.noteService.getAll();
    }
}
