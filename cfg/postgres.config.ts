import { SequelizeModuleOptions } from "@nestjs/sequelize";
import { NoteModel } from "src/modules/note/note.model";
import { UserModel } from "src/modules/user/user.model";

require("dotenv").config();

export const POSTGRES_CONFIG: SequelizeModuleOptions = {
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATEBASE,
    autoLoadModels: true,
    models: [UserModel, NoteModel],
}