import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class CreateUserDto {
    @IsString({ message: 'Username must be a string' })
    @ApiProperty({ description: 'username', example: 'volxdya' })
    readonly userName: string;

    @IsString({ message: 'Password must be a string' })
    @Length(8, 32, {
        message: 'Invalid password length'
    })
    @ApiProperty({ description: 'user password', example: 'qwerty@@@zxc' })
    readonly password: string;

    @IsString()
    @ApiProperty({
        description: 'path to avatar url (file api)',
        example: 'http://notion-files-api/avatarUrl/user123',
        default: ''
    })
    readonly avatarUrl: string;
}