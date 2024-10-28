import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/CreateUserDto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('/create')
    async create(@Body() dto: CreateUserDto) {
        return this.userService.create(dto);
    }

    @Get('/get_all')
    async getAll() {
        return this.userService.getAll();
    }
}
