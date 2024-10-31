import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { UserModel } from "../user/user.model";
import { UserGroupsModel } from "./user-groups.model";
import { InviteModel } from "../invite/invite.model";
import { ApiProperty } from "@nestjs/swagger";
import { NoteModel } from "../note/note.model";

interface IGroupModel {
    title: string;
    userId: number;
}

@Table({ tableName: 'groups' })
export class GroupModel extends Model<GroupModel, IGroupModel> {
    @Column({ type: DataType.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true })
    @ApiProperty({ example: 1, description: 'unique id' })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    @ApiProperty({ example: 'New group', description: 'Title of group' })
    title: string;

    @ForeignKey(() => UserModel)
    @Column({ type: DataType.INTEGER })
    @ApiProperty({ example: 1, description: 'unique owner id of group' })
    ownerId: number;

    @BelongsTo(() => UserModel)
    @ApiProperty({ description: 'owner group', type: UserModel })
    owner: UserModel;

    @BelongsToMany(() => UserModel, () => UserGroupsModel)
    @ApiProperty({ description: 'array of users group', type: Array<UserModel> })
    users: UserModel[];

    @HasMany(() => InviteModel)
    @ApiProperty({ description: 'array of invites group', type: Array<InviteModel> })
    invites: InviteModel[];

    @HasMany(() => NoteModel)
    @ApiProperty({ description: 'array of notes group', type: Array<NoteModel> })
    notes: NoteModel[];
}