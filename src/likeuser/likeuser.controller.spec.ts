import { Test, TestingModule } from '@nestjs/testing';
import { LikeuserController } from './likeuser.controller';

describe('LikeuserController', () => {
  let controller: LikeuserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LikeuserController],
    }).compile();

    controller = module.get<LikeuserController>(LikeuserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
