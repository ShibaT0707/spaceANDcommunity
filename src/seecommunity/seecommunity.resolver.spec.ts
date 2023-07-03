import { Test, TestingModule } from '@nestjs/testing';
import { SeecommunityResolver } from './seecommunity.resolver';

describe('SeecommunityResolver', () => {
  let resolver: SeecommunityResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeecommunityResolver],
    }).compile();

    resolver = module.get<SeecommunityResolver>(SeecommunityResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
