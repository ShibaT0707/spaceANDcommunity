import { Test, TestingModule } from '@nestjs/testing';
import { SexuserController } from './sexuser.controller';

describe('SexuserController', () => {
  let controller: SexuserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SexuserController],
    }).compile();

    controller = module.get<SexuserController>(SexuserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
