import { Test, TestingModule } from '@nestjs/testing';
import { UpdateuserService } from './updateuser.service';

describe('UpdateuserService', () => {
  let service: UpdateuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateuserService],
    }).compile();

    service = module.get<UpdateuserService>(UpdateuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
