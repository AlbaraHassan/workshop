import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { CoreModule } from './core/core.module';
import { BlogModule } from './modules/blog/blog.module';

@Module({
  imports: [CoreModule, AuthModule, UserModule, BlogModule],
})
export class AppModule { }
