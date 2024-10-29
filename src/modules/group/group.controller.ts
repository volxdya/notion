import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/CreateGroupDto';
import { AddToGroupDto } from './dto/AddToGroupDto';

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

    @Put('/add_to_group')
    async addToGroup(@Body() dto: AddToGroupDto) {
        return this.groupService.addToGroup(dto);
    }
}
