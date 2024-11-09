import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { InviteService } from './invite.service';
import { CreateInviteDto } from './dto/CreateInviteDto';
import { Docs } from '../../decorators/docs.decorator';

@Controller('invite')
export class InviteController {
    constructor(private readonly inviteService: InviteService) { }

    @Post('/create')
    @Docs({
        summary: 'create invite',
        description: 'created invite',
        status: 200,
        type: CreateInviteDto
    })
    async create(@Body() dto: CreateInviteDto) {
        return this.inviteService.create(dto);
    }

    @Get('/get_all')
    @Docs({
        summary: 'get all invites',
        description: 'got all invites',
        status: 200,
        type: Array<CreateInviteDto>,
        isArray: true
    })
    async getAll() {
        return this.inviteService.getAll();
    }

    @Delete('/delete/:inviteId')
    @Docs({
        summary: 'delete invite',
        description: 'deleted invite',
        status: 200,
        type: CreateInviteDto
    })
    async delete(@Param('inviteId') inviteId: number) {
        return this.inviteService.deleteInvite(inviteId);
    }
}
