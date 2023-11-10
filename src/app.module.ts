import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { HelloModule } from './hello/hello.module';
import { GreetService } from './greet/greet.service';
import { UserService } from './common/user.service';
import { PrismaService } from './common/prisma.service';
import { GreetController } from './greet/greet.controller';
import { SupabaseService } from './supabase/suppabase.service';
import { SupabaseController } from './supabase/supabase.controller';
import { MulterModule } from '@nestjs/platform-express';
import { LocalStorageUploadModule } from './upload/upload.module';

@Module({
  imports: [HelloModule, LocalStorageUploadModule],
  controllers: [AppController, CatsController, GreetController, SupabaseController],
  providers: [AppService, GreetService, UserService, PrismaService, SupabaseService],
})
export class AppModule {}