import { Controller, Get, Query } from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
  constructor(private shopService: ShopService) {}

  @Get('products')
  getProducts(@Query('count') count: string) {
    return this.shopService.generateProducts(count ? parseInt(count) : 10);
  }
} 