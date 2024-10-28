import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONFIG } from 'cfg/jwt.config';

@Module({
  imports: [
    UserModule,
    JwtModule.register(JWT_CONFIG)
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
