import { Body, Controller, Get, Post } from '@nestjs/common';
import { InviteService } from './invite.service';
import { CreateInviteDto } from './dto/CreateInviteDto';

@Controller('invite')
export class InviteController {
    constructor(private readonly inviteService: InviteService){}

    @Post('/create')
    async create(@Body() dto: CreateInviteDto) {
        return this.inviteService.create(dto);
    }

    @Get('/get_all')    
    async getAll() {
        return this.inviteService.getAll();
    }
}
