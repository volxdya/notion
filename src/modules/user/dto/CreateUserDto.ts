import { IsString, Length } from "class-validator";

export class CreateUserDto {
    @IsString({ message: 'Имя пользователя должно быть строкой' })
    readonly userName: string;

    @IsString({ message: 'Пароль должен быть строкой' })
    @Length(8, 32, {
        message: 'Некорректная длина пароля'
    })
    readonly password: string;

    @IsString()
    readonly avatarUrl: string;
}