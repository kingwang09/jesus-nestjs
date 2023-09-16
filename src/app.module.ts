import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { HelloModule } from './hello/hello.module';
import { GreetService } from './greet/greet.service';
import { UserService } from './greet/user.service';
import { PrismaService } from './common/prisma.service';

@Module({
  imports: [HelloModule],
  controllers: [AppController, CatsController],
  providers: [AppService, GreetService, UserService, PrismaService],
})
export class AppModule {}
