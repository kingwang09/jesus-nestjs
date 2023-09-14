import { Test, TestingModule } from '@nestjs/testing';
import { GreetService } from './greet.service';

describe('GreetService', () => {
  let service: GreetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GreetService],
    }).compile();

    service = module.get<GreetService>(GreetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
