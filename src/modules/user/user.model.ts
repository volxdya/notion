import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { NoteModel } from "../note/note.model";

interface IUserModel {
    userName: string;
    password: string;
    avatarUrl: string;
}

@Table({ tableName: 'users' })
export class UserModel extends Model<UserModel, IUserModel> {
    @Column({ type: DataType.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false, unique: true })
    userName: string;

    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @Column({ type: DataType.STRING, defaultValue: '' })
    avatarUrl: string;

    @HasMany(() => NoteModel)
    notes: NoteModel[]
}