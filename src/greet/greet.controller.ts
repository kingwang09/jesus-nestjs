import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from '../common/user.service';
import { GreetDto } from './dto/greet.dto';

@Controller('greet')
export class GreetController {
  constructor(private readonly userService: UserService) {}

  @Get('/create')
  create() {
    this.userService.createUser({"email": 'kingwang09@gmail.com', "name": "hyungeun.jin"});
  }

  @Get('')
  getAll() {
    return this.userService.users({});
  }

  @Post("/save")
  save(@Body() greetDto: GreetDto){
    console.log("save: ", greetDto);
    return greetDto;
  }

}
