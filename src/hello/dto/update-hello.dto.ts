import { PartialType } from '@nestjs/mapped-types';
import { CreateHelloDto } from './create-hello.dto';

export class UpdateHelloDto extends PartialType(CreateHelloDto) {}
