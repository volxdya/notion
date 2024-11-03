import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/CreateUserDto';
import { Docs } from '../../decorators/docs.decorator';
import { Response } from 'express';
import { IToken } from '../../types/token';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    private async setCookieToken(response: Response, token: string) {
        response.cookie('token', token, {
            httpOnly: true,
            sameSite: 'lax',
            maxAge: 1000 * 60
        });
    }

    @Post('/login')
    @Docs({ summary: 'Auth, generate JWT', status: 200, description: 'Created' })
    async login(
        @Body() dto: CreateUserDto,
        @Res({ passthrough: true }) response: Response
    ) {
        const { token }: IToken = await this.authService.login(dto);

        await this.setCookieToken(response, token);

        return 'Authorized';
    }

    @Post('/register')
    @Docs({ summary: 'Register, generate JWT', status: 200, description: 'Created user, generated JWT' })
    async register(
        @Body() dto: CreateUserDto,
        @Res({ passthrough: true }) response: Response
    ) {
        const { token }: IToken = await this.authService.register(dto);

        await this.setCookieToken(response, token);

        return 'Regisrated';
    }
}
