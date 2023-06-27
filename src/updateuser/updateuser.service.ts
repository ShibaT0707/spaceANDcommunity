import { Injectable } from '@nestjs/common';
import { EqualUser } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UpdateuserService {
  constructor(private prismaService: PrismaService) {}

  async updateuser(user: EqualUser): Promise<EqualUser | string> {
    try {
      const { User_ID, ...updatedData } = user;
      const updatedUser = await this.prismaService.updateUser(User_ID, updatedData);
      return updatedUser;
    } catch (error) {
      return 'Failed to update user.';
    }
  }
}
