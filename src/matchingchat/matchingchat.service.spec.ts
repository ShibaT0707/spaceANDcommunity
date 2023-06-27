import { Test, TestingModule } from '@nestjs/testing';
import { MatchingchatService } from './matchingchat.service';

describe('MatchingchatService', () => {
  let service: MatchingchatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatchingchatService],
    }).compile();

    service = module.get<MatchingchatService>(MatchingchatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
