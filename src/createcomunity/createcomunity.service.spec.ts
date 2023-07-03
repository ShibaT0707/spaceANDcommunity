import { Test, TestingModule } from '@nestjs/testing';
import { CreatecomunityService } from './createcomunity.service';

describe('CreatecomunityService', () => {
  let service: CreatecomunityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatecomunityService],
    }).compile();

    service = module.get<CreatecomunityService>(CreatecomunityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
