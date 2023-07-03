import { Test, TestingModule } from '@nestjs/testing';
import { PostspaceService } from './postspace.service';

describe('PostspaceService', () => {
  let service: PostspaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostspaceService],
    }).compile();

    service = module.get<PostspaceService>(PostspaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
