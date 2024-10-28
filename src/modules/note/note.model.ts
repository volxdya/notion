import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { UserModel } from "../user/user.model";

interface INoteModel {
    title: string;
    userId: number;
}

@Table({ tableName: 'notes' })
export class NoteModel extends Model<NoteModel, INoteModel> {
    @Column({ type: DataType.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    title: number;

    @ForeignKey(() => UserModel)
    @Column({ type: DataType.INTEGER })
    userId: number;
  
    @BelongsTo(() => UserModel)
    user: UserModel;
}