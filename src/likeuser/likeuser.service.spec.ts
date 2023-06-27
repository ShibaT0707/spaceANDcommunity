import { Test, TestingModule } from '@nestjs/testing';
import { LikeuserService } from './likeuser.service';

describe('LikeuserService', () => {
  let service: LikeuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LikeuserService],
    }).compile();

    service = module.get<LikeuserService>(LikeuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
