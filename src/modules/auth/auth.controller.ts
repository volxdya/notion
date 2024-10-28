import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/CreateUserDto';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('/login')
    async login(@Body() dto: CreateUserDto) {
        return this.authService.login(dto);
    }

    @Post('/register')
    async register(@Body() dto: CreateUserDto) {
        return this.authService.register(dto);
    }
}
