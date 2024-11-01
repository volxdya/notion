import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CommentaryModel } from './commentary.model';
import { CreateCommentaryDto } from './dto/CreateCommentaryDto';

@Injectable()
export class CommentaryService {
    constructor(@InjectModel(CommentaryModel) private readonly commentaryModel: typeof CommentaryModel) { }

    async create(dto: CreateCommentaryDto) {
        return this.commentaryModel.create(dto);
    }

    async getAll() {
        return this.commentaryModel.findAll({ include: { all: true } });
    }
}
