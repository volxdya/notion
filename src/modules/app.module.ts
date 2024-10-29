import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { POSTGRES_CONFIG } from 'cfg/postgres.config';
import { UserModule } from 'src/modules/user/user.module';
import { NoteModule } from './note/note.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { GroupModule } from './group/group.module';

@Module({
  imports: [
    SequelizeModule.forRoot(POSTGRES_CONFIG),
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    UserModule,
    NoteModule,
    AuthModule,
    JwtModule,
    GroupModule
  ],
})
export class AppModule { }