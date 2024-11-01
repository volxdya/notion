import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { NoteModel } from "../note/note.model";
import { Col } from "sequelize/types/utils";
import { UserModel } from "../user/user.model";

interface ICommentaryModel {
    text: string;
}

@Table({ tableName: 'commentaries' })
export class CommentaryModel extends Model<CommentaryModel, ICommentaryModel> {
    @Column({ type: DataType.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true })
    @ApiProperty({ example: 1, description: 'unique commentary id' })
    id: number;

    @Column({ type: DataType.STRING })
    text: string;

    @ForeignKey(() => NoteModel)
    @Column({ type: DataType.INTEGER, allowNull: false })
    noteId: number;

    @BelongsTo(() => NoteModel)
    note: NoteModel;

    @ForeignKey(() => UserModel)
    @Column({ type: DataType.INTEGER })
    userId: number;

    @BelongsTo(() => UserModel)
    user: UserModel;
}
