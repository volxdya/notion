import { IsInt, IsString } from "class-validator";

export class CreateNoteDto {
    @IsInt({ message: 'Уникальный идентификатор пользователя должен быть числом' })
    readonly userId: number;

    @IsString({ message: 'Название должно быть строкой' })
    readonly title: string;
}