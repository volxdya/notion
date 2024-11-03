import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/CreateGroupDto';
import { AddToGroupDto } from './dto/AddToGroupDto';
import { ApiTags } from '@nestjs/swagger';
import { Docs } from '../../decorators/docs.decorator';

@Controller('group')
@ApiTags('Groups')
export class GroupController {
    constructor(private readonly groupService: GroupService) { }

    @Post('/create')
    @Docs({
        summary: 'Create group',
        description: 'Created',
        type: CreateGroupDto,
        status: 200
    })
    async create(@Body() dto: CreateGroupDto) {
        return this.groupService.create(dto);
    }

    @Get('/get_all')
    @Docs({
        summary: 'Get all groups',
        description: 'Got all groups',
        type: Array<CreateGroupDto>,
        status: 200,
        isArray: true
    })
    async getAll() {
        return this.groupService.getAll();
    }

    @Put('/add_to_group')
    @Docs({
        summary: 'Push user to group',
        description: 'Ok',
        type: AddToGroupDto,
        status: 200,
    })
    async addToGroup(@Body() dto: AddToGroupDto) {
        return this.groupService.addToGroup(dto);
    }
}
