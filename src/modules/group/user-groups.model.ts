import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { UserModel } from "../user/user.model";
import { GroupModel } from "./group.model";

@Table({ tableName: 'user-groups' })
export class UserGroupsModel extends Model<UserGroupsModel> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, unique: true })
    id: number;

    @ForeignKey(() => UserModel)
    @Column({ type: DataType.INTEGER })
    userId: number;

    @ForeignKey(() => GroupModel)
    @Column({ type: DataType.INTEGER })
    groupId: number;
}