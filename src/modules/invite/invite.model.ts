import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { UserModel } from "../user/user.model";
import { GroupModel } from "../group/group.model";

interface IInviteModel {
    maxActivations: number;
    userId: number;

}

@Table({ tableName: 'ivnites' })
export class InviteModel extends Model<InviteModel, IInviteModel> {
    @Column({ type: DataType.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.INTEGER })
    maxActivations: number;
    
    @ForeignKey(() => GroupModel)
    @Column({ type: DataType.INTEGER })
    groupId: number;

    @BelongsTo(() => GroupModel)
    group: GroupModel[];

    @ForeignKey(() => UserModel)
    @Column({ type: DataType.INTEGER })
    userId: number;

    @BelongsTo(() => GroupModel)
    user: UserModel[];
}