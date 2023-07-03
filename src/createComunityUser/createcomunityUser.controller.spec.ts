import { Test, TestingModule } from '@nestjs/testing';
import { CreatecomunityuserController } from './createcomunityuser.controller';

describe('CreatecomunityuserController', () => {
  let controller: CreatecomunityuserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreatecomunityuserController],
    }).compile();

    controller = module.get<CreatecomunityuserController>(CreatecomunityuserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
