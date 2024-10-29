import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { UserModel } from "../user/user.model";

interface INoteModel {
    title: string;
    userId: number;
}

interface INoteStatus {
    id: number;
    status: string;
}

export const noteStatutes: INoteStatus[] = [
    {
        id: 1,
        status: "In order",
    },

    {
        id: 2,
        status: "In work",
    },
    {
        id: 3,
        status: "On check",
    },
    {
        id: 4,
        status: "Done",
    },
];

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

    @Column({ type: DataType.JSON, defaultValue: noteStatutes[0] })
    status: INoteStatus
}