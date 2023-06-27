import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUser } from './CreateUser.service';
import { EqualUser } from '@prisma/client';

@Controller('createUser')
export class UserController {
  constructor(private readonly userService: CreateUser) {}

  @Post()
  async createUser(@Body() user: EqualUser): Promise<EqualUser | string> {
    return this.userService.createUser(user);
  }
  @Get()
async getAllUsers(): Promise<EqualUser[]> {
  return this.userService.getAllUsers();
}
}
