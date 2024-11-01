import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { NoteModel } from "../note/note.model";
import { GroupModel } from "../group/group.model";
import { UserGroupsModel } from "../group/user-groups.model";
import { InviteModel } from "../invite/invite.model";
import { ApiProperty } from "@nestjs/swagger";

interface IUserModel {
    userName: string;
    password: string;
    avatarUrl: string;
}

@Table({ tableName: 'users' })
export class UserModel extends Model<UserModel, IUserModel> {
    @Column({ type: DataType.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true })
    @ApiProperty({ example: 1, description: 'unique user id' })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false, unique: true })
    @ApiProperty({ example: 'username' })
    userName: string;

    @Column({ type: DataType.STRING, allowNull: false })
    @ApiProperty({ example: 'zxcqwe@@zz11', description: 'user password' })
    password: string;

    @Column({ type: DataType.STRING, defaultValue: '' })
    @ApiProperty({ example: 'http://notion-files-api/avatarUrl/user123', description: 'link to avatar url' })
    avatarUrl: string;

    @HasMany(() => NoteModel)
    @ApiProperty({ description: 'array of notes', type: Array<NoteModel> })
    notes: NoteModel[];

    @HasMany(() => GroupModel)
    @ApiProperty({ description: 'array of groups, which user have', type: Array<GroupModel> })
    ownerGroups: GroupModel[];

    @HasMany(() => InviteModel)
    @ApiProperty({ description: 'array of ivnites, which user have', type: Array<InviteModel> })
    invites: InviteModel[];

    @BelongsToMany(() => GroupModel, () => UserGroupsModel)
    groups: GroupModel[];
}