import { Test, TestingModule } from '@nestjs/testing';
import { SexuserService } from './sexuser.service';

describe('SexuserService', () => {
  let service: SexuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SexuserService],
    }).compile();

    service = module.get<SexuserService>(SexuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
