import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [CoreModule, AuthModule, UserModule],
})
export class AppModule { }
