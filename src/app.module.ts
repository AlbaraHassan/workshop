import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [CoreModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
