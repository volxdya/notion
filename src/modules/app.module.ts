import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { POSTGRES_CONFIG } from 'cfg/postgres.config';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    SequelizeModule.forRoot(POSTGRES_CONFIG),
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    UserModule
  ],
})
export class AppModule { }