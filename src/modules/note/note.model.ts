import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { UserModel } from "../user/user.model";
import { ApiProperty } from "@nestjs/swagger";
import { GroupModel } from "../group/group.model";

interface INoteModel {
    title: string;
    userId: number;
}

export interface INoteStatus {
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
    @ApiProperty({ example: 1, description: 'unique note id' })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    @ApiProperty({ example: 'write 2 sql request', description: 'title of note' })
    title: number;

    @ForeignKey(() => UserModel)
    @Column({ type: DataType.INTEGER })
    @ApiProperty({ example: 1, description: 'note owner id' })
    userId: number;

    @BelongsTo(() => UserModel)
    @ApiProperty({ description: 'note owner', type: UserModel })
    user: UserModel;
    
    @ForeignKey(() => GroupModel)
    @Column({ type: DataType.INTEGER })
    @ApiProperty({ example: 1, description: 'note group id' })
    groupId: number;

    @BelongsTo(() => GroupModel)
    @ApiProperty({ description: 'note in group', type: GroupModel })
    group: GroupModel;

    @Column({ type: DataType.JSON, defaultValue: noteStatutes[0] })
    @ApiProperty({ example: '1-4', description: 'status of compelete the note' })
    status: INoteStatus
}