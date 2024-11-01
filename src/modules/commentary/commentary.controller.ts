import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommentaryService } from './commentary.service';
import { CreateCommentaryDto } from './dto/CreateCommentaryDto';
import { Docs } from 'src/decorators/docs.decorator';

@Controller('commentary')
export class CommentaryController {
    constructor(private readonly commentaryService: CommentaryService) { }

    @Post('/create')
    @Docs({
        summary: 'create commentary to note',
        status: 200,
        description: 'created commentary to note',
        type: CreateCommentaryDto
    })
    async create(@Body() dto: CreateCommentaryDto) {
        return this.commentaryService.create(dto);
    }

    @Get('/get_all')
    @Docs({
        summary: 'get all commentaries',
        status: 200,
        description: 'got all commentaries',
        type: Array<CreateCommentaryDto>,
        isArray: true
    })
    async getAll() {
        return this.commentaryService.getAll();
    }
}
