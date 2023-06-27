import { Test, TestingModule } from '@nestjs/testing';
import { MatchingchatController } from './matchingchat.controller';

describe('MatchingchatController', () => {
  let controller: MatchingchatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatchingchatController],
    }).compile();

    controller = module.get<MatchingchatController>(MatchingchatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
