import { Test, TestingModule } from '@nestjs/testing';
import { CreatecomunityController } from './createcomunity.controller';

describe('CreatecomunityController', () => {
  let controller: CreatecomunityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreatecomunityController],
    }).compile();

    controller = module.get<CreatecomunityController>(CreatecomunityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
