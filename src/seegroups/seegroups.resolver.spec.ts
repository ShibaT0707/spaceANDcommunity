import { Test, TestingModule } from '@nestjs/testing';
import { SeegroupsResolver } from './seegroups.resolver';

describe('SeegroupsResolver', () => {
  let resolver: SeegroupsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeegroupsResolver],
    }).compile();

    resolver = module.get<SeegroupsResolver>(SeegroupsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
