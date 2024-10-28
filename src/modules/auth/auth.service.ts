import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/CreateUserDto';
import { UserModel } from '../user/user.model';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    private validatePassword(password: string, userPassword: string) {
        return password == userPassword;
    }

    private async validateUser(dto: CreateUserDto) {
        const user: UserModel = await this.userService.getOne(dto.userName);

        if (user && (this.validatePassword(dto.password, user.password))) {
            return user;
        }

        throw new UnauthorizedException({
            message: 'Некорректный email или пароль',
        });
    }

    private async generateToken(user: UserModel) {
        const payload = {
            userName: user.userName,
            avatarUrl: user.avatarUrl,
        }

        return {
            token: this.jwtService.sign(payload)
        }
    }

    async login(dto: CreateUserDto) {
        const user: UserModel = await this.validateUser(dto);

        return this.generateToken(user);
    }

    async register(dto: CreateUserDto) {
        const user: UserModel = await this.userService.create(dto);

        return this.generateToken(user);
    }
}
