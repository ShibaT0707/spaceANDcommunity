import { Test, TestingModule } from '@nestjs/testing';
import { CreateUser } from './CreateUser.service';

describe('UserService', () => {
  let service: CreateUser;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateUser],
    }).compile();

    service = module.get<CreateUser>(CreateUser);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
