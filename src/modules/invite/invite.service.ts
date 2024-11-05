import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { InviteModel } from './invite.model';
import { CreateInviteDto } from './dto/CreateInviteDto';

@Injectable()
export class InviteService {
    constructor(@InjectModel(InviteModel) private readonly ivniteModel: typeof InviteModel) { }

    async create(dto: CreateInviteDto) {
        return this.ivniteModel.create(dto);
    }

    async getAll() {
        return this.ivniteModel.findAll({ include: { all: true } });
    }

    async getById(inviteId: number) {
        return this.ivniteModel.findOne({ where: { id: inviteId }, include: { all: true } });
    }

    async deleteInvite(inviteId: number) {
        return this.ivniteModel.destroy({ where: { id: inviteId } });
    }
}