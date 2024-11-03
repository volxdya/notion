import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/CreateNoteDto';
import { Docs } from '../../decorators/docs.decorator';

@Controller('note')
export class NoteController {
    constructor(private readonly noteService: NoteService) { }

    @Post('/create')
    @Docs({ summary: 'Create note', status: 200, type: CreateNoteDto, description: 'created note' })
    async create(@Body() dto: CreateNoteDto) {
        return this.noteService.create(dto);
    }

    @Get('/get_all')
    @Docs({
        summary: 'Get all notes',
        status: 200,
        type: Array<CreateNoteDto>,
        description: 'Got all notes',
        isArray: true
    })
    async getAll() {
        return this.noteService.getAll();
    }

    @Patch('/change_status/:noteId')
    @Docs({
        summary: 'Change note status',
        status: 200,
        type: CreateNoteDto,
        description: 'Changed note status'
    })
    async changeStatus(@Param('noteId') noteId: number) {
        return this.noteService.changeStatusNote(noteId);
    }

    @Get('/get_user_notes/:userId')
    @Docs({
        summary: 'Get user notes',
        status: 200,
        type: Array<CreateNoteDto>,
        description: 'Got user notes',
        isArray: true
    })
    getUserNotes(@Param('userId') userId: number) {
        return this.noteService.getUserNotes(userId);
    }


}
