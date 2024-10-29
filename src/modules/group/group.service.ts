import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GroupModel } from './group.model';
import { CreateGroupDto } from './dto/CreateGroupDto';
import { UserService } from '../user/user.service';
import { UserModel } from '../user/user.model';

@Injectable()
export class GroupService {
    constructor(
        @InjectModel(GroupModel) private readonly groupModel: typeof GroupModel,
        private readonly userService: UserService
    ) { }

    async create(dto: CreateGroupDto) {
        const group: GroupModel = await this.groupModel.create(dto);
        const user: UserModel = await this.userService.getById(dto.ownerId);
        
        await group.$add('users', user);
        await user.$add('groups', group);

        return group;
    }

    async getAll() {
        return this.groupModel.findAll({ include: { all: true } });
    }
}
