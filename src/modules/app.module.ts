import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { POSTGRES_CONFIG } from 'cfg/postgres.config';

@Module({
  imports: [
    SequelizeModule.forRoot(POSTGRES_CONFIG),
    ConfigModule.forRoot({
      envFilePath: '.env'
    })
  ],
})
export class AppModule { }
