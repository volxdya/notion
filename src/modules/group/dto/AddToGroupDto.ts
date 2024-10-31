import { IsInt } from "class-validator";

export class AddToGroupDto {
    @IsInt({ message: 'Уникальный идентификатор пользователя должен быть числом' })
    readonly userId: number;

    @IsInt({ message: 'Уникальный идентификатор приглашения должен быть числом' })
    readonly inviteId: number;
}