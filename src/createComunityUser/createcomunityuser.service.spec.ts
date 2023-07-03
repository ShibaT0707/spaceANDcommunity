import { Test, TestingModule } from '@nestjs/testing';
import { CreatecomunityuserService } from './createcomunityuser.service';

describe('CreatecomunityuserService', () => {
  let service: CreatecomunityuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatecomunityuserService],
    }).compile();

    service = module.get<CreatecomunityuserService>(CreatecomunityuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
