import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { HelloModule } from './hello/hello.module';
import { GreetService } from './greet/greet.service';

@Module({
  imports: [HelloModule],
  controllers: [AppController, CatsController],
  providers: [AppService, GreetService],
})
export class AppModule {}
