import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { UserModel } from "../user/user.model";
import { GroupModel } from "../group/group.model";
import { ApiProperty } from "@nestjs/swagger";

interface IInviteModel {
    maxActivations: number;
    userId: number;

}

@Table({ tableName: 'invite' })
export class InviteModel extends Model<InviteModel, IInviteModel> {
    @Column({ type: DataType.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true })
    @ApiProperty({ example: 1, description: 'unique id ivnite' })
    id: number;

    @Column({ type: DataType.INTEGER })
    @ApiProperty({ example: 100, description: 'maximum of activations some one ivnite' })
    maxActivations: number;

    @ForeignKey(() => GroupModel)
    @Column({ type: DataType.INTEGER })
    @ApiProperty({ example: 1, description: 'id of group for invite' })
    groupId: number;

    @BelongsTo(() => GroupModel)
    @ApiProperty({ description: 'group for this invite', type: GroupModel })
    group: GroupModel;

    @ForeignKey(() => UserModel)
    @Column({ type: DataType.INTEGER })
    @ApiProperty({ example: 1, description: 'id of user who create invite' })
    userId: number;

    @BelongsTo(() => UserModel)
    @ApiProperty({ description: 'user, who create ivnite', type: UserModel })
    user: UserModel;
}