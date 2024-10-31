import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/CreateUserDto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/login')
    @ApiOperation({ summary: 'Auth, generate JWT' })
    @ApiResponse({ status: 200, description: 'Created' })
    async login(@Body() dto: CreateUserDto) {
        return this.authService.login(dto);
    }

    @Post('/register')
    @ApiOperation({ summary: 'Register, generate JWT' })
    @ApiResponse({ status: 200, description: 'Created user, generate JWT' })
    async register(@Body() dto: CreateUserDto) {
        return this.authService.register(dto);
    }
}
