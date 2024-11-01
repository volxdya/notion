import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class CreateInviteDto {
    @IsInt({ message: 'Unique group id must be a number' })
    @ApiProperty({ description: 'Unique group id', example: 1 })
    readonly groupId: number;

    @IsInt({ message: 'Max activations must be a number' })
    @ApiProperty({ description: 'Max activation of invite', example: 100 })
    readonly maxActivations: number;
}