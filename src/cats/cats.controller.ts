import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from '../app.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCats(): string {
    return "Hello Cats";
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Hello Cats #${id}`;
  }

  @Post()
  createCat(@Body() createCatDto: CreateCatDto): string{
    console.log("createDto: ", createCatDto);
    return `create cat: ${createCatDto.name}`;
  }
}