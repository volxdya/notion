import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { POSTGRES_CONFIG } from 'cfg/postgres.config';
import { UserModule } from 'src/modules/user/user.module';
import { NoteModule } from './note/note.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { GroupModule } from './group/group.module';
import { InviteModule } from './invite/invite.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { THROTTLER_CONFIG } from 'cfg/throttler.config';
import { CommentaryModule } from './commentary/commentary.module';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    SequelizeModule.forRoot(POSTGRES_CONFIG),
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    ThrottlerModule.forRoot(THROTTLER_CONFIG),
    UserModule,
    NoteModule,
    AuthModule,
    JwtModule,
    GroupModule,
    InviteModule,
    CommentaryModule
  ],
  providers: [{
    provide: APP_GUARD,
    useClass: ThrottlerGuard
  }]
})
export class AppModule {}