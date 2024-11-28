import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { HelloModule } from './hello/hello.module';
import { GreetService } from './greet/greet.service';
import { PrismaService } from './common/prisma.service';
import { GreetController } from './greet/greet.controller';
import { SupabaseService } from './supabase/suppabase.service';
import { SupabaseController } from './supabase/supabase.controller';
import { MulterModule } from '@nestjs/platform-express';
import { LocalStorageUploadModule } from './upload/upload.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UserService } from './common/user.service';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [HelloModule, LocalStorageUploadModule, AuthModule, UsersModule, ShopModule],
  controllers: [AppController, CatsController, GreetController, SupabaseController],
  providers: [AppService, GreetService, PrismaService, SupabaseService, UserService],
})
export class AppModule {}
