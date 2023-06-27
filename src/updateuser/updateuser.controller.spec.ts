import { Test, TestingModule } from '@nestjs/testing';
import { UpdateuserController } from './updateuser.controller';

describe('UpdateuserController', () => {
  let controller: UpdateuserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateuserController],
    }).compile();

    controller = module.get<UpdateuserController>(UpdateuserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
