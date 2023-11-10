import { Global, Module } from '@nestjs/common'

import { JwtService } from '@nestjs/jwt'

import { AuthGuard } from './auth.guard'

@Global()
@Module({
  providers: [AuthGuard, JwtService],
  exports: [AuthGuard, JwtService],
})
export class AuthModule {}
