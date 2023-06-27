import { Test, TestingModule } from '@nestjs/testing';
import { MatchingchatResolver } from './matchingchat.resolver';

describe('MatchingchatResolver', () => {
  let resolver: MatchingchatResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatchingchatResolver],
    }).compile();

    resolver = module.get<MatchingchatResolver>(MatchingchatResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
