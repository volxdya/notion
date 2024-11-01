import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/CreateUserDto';
import { Docs } from 'src/decorators/docs.decorator';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('/create')
    @Docs({ summary: 'Create user', status: 200, type: CreateUserDto, description: 'created user' })
    async create(@Body() dto: CreateUserDto) {
        return this.userService.create(dto);
    }

    @Get('/get_all')
    @Docs({
        summary: 'Get all users',
        status: 200,
        type: Array<CreateUserDto>,
        description: 'got all users',
        isArray: true
    })
    async getAll() {
        return this.userService.getAll();
    }
}
