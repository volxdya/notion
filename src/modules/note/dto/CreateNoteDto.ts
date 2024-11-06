import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class CreateNoteDto {
    @IsInt({ message: 'Unique user id must be a number' })
    @ApiProperty({ description: 'Unique user id', example: 1 })
    readonly userId: number;

    @IsInt({ message: 'Unique group id must be a number' })
    @ApiProperty({ description: 'Unique group id', example: 1 })
    readonly groupId: number;

    @IsString({ message: 'Title of note must be a string' })
    @ApiProperty({ description: 'Title of note', example: "Do sql requests to migrate user table" })
    readonly title: string;
}