import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GroupModel } from './group.model';
import { CreateGroupDto } from './dto/CreateGroupDto';
import { UserService } from '../user/user.service';
import { UserModel } from '../user/user.model';
import { AddToGroupDto } from './dto/AddToGroupDto';
import { InviteService } from '../invite/invite.service';
import { InviteModel } from '../invite/invite.model';

@Injectable()
export class GroupService {
    constructor(
        @InjectModel(GroupModel) private readonly groupModel: typeof GroupModel,
        private readonly userService: UserService,
        private readonly inviteService: InviteService
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

    1.
        Написать логику инвайтов по ссылке и QR CODE
        ссылка содержит ограниченное количество прглашений, отправителя и много meta-datas 

    2. Написать логику обновления юзеров группы
        
    */
    async addToGroup(dto: AddToGroupDto) {
        const { userId, inviteId } = dto;

        const invite: InviteModel = await this.inviteService.getById(inviteId);

        if (invite.maxActivations > 0) {
            const user: UserModel = await this.userService.getById(userId);
            const group: GroupModel = await this.getOne(invite.groupId);

            await invite.update({
                maxActivations: invite.maxActivations - 1
            });

            // await user.$add('groups', [group]);
            // await group.$add('users', [user]);

            return {
                user,
                invite,
                group
            };
        }

        return 'Invite is invalid';
    }

    async getAll() {
        return this.groupModel.findAll({ include: { all: true } });
    }
}
