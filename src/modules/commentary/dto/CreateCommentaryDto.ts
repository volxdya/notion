import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class CreateCommentaryDto {
    @IsInt({ message: 'unique user id must be a number' })
    @ApiProperty({ description: 'unique user id', example: 1 })
    readonly userId: number;

    @IsInt({ message: 'unique note id must be a number' })
    @ApiProperty({ description: 'unique note id', example: 1 })
    readonly noteId: number;

    @IsString({ message: 'text must be a string' })
    @ApiProperty({ description: 'commentary text', example: 'good note' })
    readonly text: string;
} 