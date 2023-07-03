import { Test, TestingModule } from '@nestjs/testing';
import { PostspaceController } from './postspace.controller';

describe('PostspaceController', () => {
  let controller: PostspaceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostspaceController],
    }).compile();

    controller = module.get<PostspaceController>(PostspaceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
