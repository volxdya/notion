import { IsInt, IsString } from "class-validator";

export class CreateGroupDto {
    @IsString({ message: 'Название группы должно быть строкой' })
    readonly title: string;

    @IsInt({ message: 'Уникальный идентификатор пользователя должен быть числом' })
    readonly ownerId: number;
}