import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker/locale/ko';
import { Product } from './interfaces/shop.interface';

@Injectable()
export class ShopService {
  generateProducts(count: number = 10): Product[] {
    return Array.from({ length: count }, () => ({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      description: faker.commerce.productDescription(),
      category: faker.commerce.department(),
      imageUrl: faker.image.url(),
      stock: faker.number.int({ min: 0, max: 100 }),
      createdAt: faker.date.recent(),
    }));
  }
} 