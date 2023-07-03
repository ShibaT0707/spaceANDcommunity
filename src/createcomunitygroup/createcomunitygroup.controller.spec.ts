import { Test, TestingModule } from '@nestjs/testing';
import { CreatecomunitygroupController } from './createcomunitygroup.controller';

describe('CreatecomunitygroupController', () => {
  let controller: CreatecomunitygroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreatecomunitygroupController],
    }).compile();

    controller = module.get<CreatecomunitygroupController>(CreatecomunitygroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
