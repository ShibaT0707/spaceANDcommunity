import { Injectable } from '@nestjs/common';
import { EqualUser } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

import * as bcrypt from 'bcryptjs';


@Injectable()
export class CreateUser {
  
  constructor(
    private prismaService: PrismaService
    ) {}


  async createUser(user: EqualUser): Promise<EqualUser | string>{
    const existingUser = await this.prismaService.prisma.equalUser.findFirst({
      where: { Mail: user.Mail },
    });
    if (existingUser) {
      return "メールアドレスは既に存在しています。";
    }
  
    const hashedPassword = await bcrypt.hash(user.Pass, 10);
    const newUser = { ...user, Pass: hashedPassword}; 

 
    
    return this.prismaService.createUser(newUser);
  }



}


