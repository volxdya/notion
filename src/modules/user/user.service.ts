import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './user.model';
import { CreateUserDto } from './dto/CreateUserDto';

@Injectable()
export class UserService {
    constructor(@InjectModel(UserModel) private readonly userModel: typeof UserModel) { }

    async create(dto: CreateUserDto) {
        return this.userModel.create(dto);
    }

    async getOne(userName: string) {
        return this.userModel.findOne({ where: { userName } });
    }

    async getAll() {
        return this.userModel.findAll();
    }
}