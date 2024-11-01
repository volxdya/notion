import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class AddToGroupDto {
    @IsInt({ message: 'Unuie user id must be a number' })
    @ApiProperty({ description: 'unique user id', example: 1 })
    readonly userId: number;
    
    @IsInt({ message: 'Unuie invite id must be a number' })
    @ApiProperty({ description: 'unique user id', example: 1 })
    readonly inviteId: number;
}