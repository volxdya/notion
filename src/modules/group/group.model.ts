import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { UserModel } from "../user/user.model";
import { UserGroupsModel } from "./user-groups.model";

interface IGroupModel {
    title: string;
    userId: number;
}

@Table({ tableName: 'groups' })
export class GroupModel extends Model<GroupModel, IGroupModel> {
    @Column({ type: DataType.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @ForeignKey(() => UserModel)
    @Column({ type: DataType.INTEGER })
    ownerId: number;

    @BelongsTo(() => UserModel)
    owner: UserModel;

    @BelongsToMany(() => UserModel, () => UserGroupsModel)
    users: UserModel[];
}