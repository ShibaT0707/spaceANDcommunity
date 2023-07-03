import { Controller, Post, Body} from '@nestjs/common';
import { CreateUser } from './CreateUser.service';
import { EqualUser } from '@prisma/client';

@Controller('createUser')
export class UserController {
  constructor(private readonly userService: CreateUser) {}

  @Post()
  async createUser(@Body() user: EqualUser): Promise<EqualUser | string> {
    return this.userService.createUser(user);
  }

}
