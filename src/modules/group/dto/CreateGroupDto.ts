import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class CreateGroupDto {
    @IsString({ message: 'Group title must be a string' })
    @ApiProperty({ description: 'Group title', example: 'Notion company group' })
    readonly title: string;

    @IsInt({ message: 'Unique user id must be a number' })
    @ApiProperty({ description: 'User id', example: 1 })
    readonly ownerId: number;
}