import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GroupModel } from './group.model';
import { CreateGroupDto } from './dto/CreateGroupDto';
import { UserService } from '../user/user.service';
import { UserModel } from '../user/user.model';
import { AddToGroupDto } from './dto/AddToGroupDto';

@Injectable()
export class GroupService {
    constructor(
        @InjectModel(GroupModel) private readonly groupModel: typeof GroupModel,
        private readonly userService: UserService
    ) { }

    async getOne(groupId: number) {
        return this.groupModel.findOne({ where: { id: groupId }, include: { all: true } });
    }

    async create(dto: CreateGroupDto) {
        const { ownerId } = dto;

        const group: GroupModel = await this.groupModel.create(dto);
        const user: UserModel = await this.userService.getById(ownerId);

        await group.$add('users', user);
        await user.$add('groups', group);

        return group;
    }

    /* 
    TODO:
        Написать логику инвайтов по ссылке и QR CODE
        ссылка содержит ограниченное количество прглашений, отправителя и много meta-datas 
     */
    async addToGroup(dto: AddToGroupDto) {
        const { userId, groupId } = dto;

        const user: UserModel = await this.userService.getById(userId);
        const group: GroupModel = await this.getOne(groupId);

        await user.$add('groups', [group]);
        await group.$add('users', [user]);

        return group;
    }

    async getAll() {
        return this.groupModel.findAll({ include: { all: true } });
    }
}
