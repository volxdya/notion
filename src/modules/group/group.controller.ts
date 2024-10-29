import { Body, Controller, Get, Post } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/CreateGroupDto';

@Controller('group')
export class GroupController {
    constructor(private readonly groupService: GroupService) { }

    @Post('/create')
    async create(@Body() dto: CreateGroupDto) {
        return this.groupService.create(dto);
    }

    @Get('/get_all')
    async getAll() {
        return this.groupService.getAll();
    }
}
