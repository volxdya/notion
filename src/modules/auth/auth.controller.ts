import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/CreateUserDto';
import { Docs } from 'src/decorators/docs.decorator';

@Controller('')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/login')
    @Docs({ summary: 'Auth, generate JWT', status: 200, description: 'Created' })
    async login(@Body() dto: CreateUserDto) {
        return this.authService.login(dto);
    }

    @Post('/register')
    @Docs({ summary: 'Register, generate JWT', status: 200, description: 'Created user, generated JWT' })
    async register(@Body() dto: CreateUserDto) {
        return this.authService.register(dto);
    }
}
