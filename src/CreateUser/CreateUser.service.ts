import { Injectable } from '@nestjs/common';
import { EqualUser } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

import * as bcrypt from 'bcryptjs';
import { EncryptionService } from 'src/encryption/encryption.service';


@Injectable()
export class CreateUser {
  
  constructor(
    private prismaService: PrismaService,
    private encryptionService: EncryptionService
    ) {}


  async createUser(user: EqualUser): Promise<EqualUser | string>{
    const existingUser = await this.prismaService.prisma.equalUser.findFirst({
      where: { Mail: user.Mail },
    });
    if (existingUser) {
      return "メールアドレスは既に存在しています。";
    }
  
    const hashedPassword = await bcrypt.hash(user.Pass, 10);
    const encryptedAddress = this.encryptionService.encryptData(user.Address);
    const newUser = { ...user, Pass: hashedPassword, Address: encryptedAddress }; 

 
    
    return this.prismaService.createUser(newUser);
  }

  async getAllUsers(): Promise<EqualUser[]> {
    const users = await this.prismaService.prisma.equalUser.findMany();
    const decryptedUsers = users.map(user => {
      const decryptedAddress = this.encryptionService.decryptData(user.Address);
      return { ...user, Address: decryptedAddress };
    });
    return decryptedUsers;
  }

}


