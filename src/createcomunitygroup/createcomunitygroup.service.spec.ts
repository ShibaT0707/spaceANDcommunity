import { Test, TestingModule } from '@nestjs/testing';
import { CreatecomunitygroupService } from './createcomunitygroup.service';

describe('CreatecomunitygroupService', () => {
  let service: CreatecomunitygroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatecomunitygroupService],
    }).compile();

    service = module.get<CreatecomunitygroupService>(CreatecomunitygroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
