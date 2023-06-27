import { Test, TestingModule } from '@nestjs/testing';
import { SeeuserResolver } from './seeuser.resolver';

describe('SeeuserResolver', () => {
  let resolver: SeeuserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeeuserResolver],
    }).compile();

    resolver = module.get<SeeuserResolver>(SeeuserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
