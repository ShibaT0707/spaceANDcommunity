import { Test, TestingModule } from '@nestjs/testing';
import { GroupchatResolver } from './groupchat.resolver';

describe('GroupchatResolver', () => {
  let resolver: GroupchatResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupchatResolver],
    }).compile();

    resolver = module.get<GroupchatResolver>(GroupchatResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
