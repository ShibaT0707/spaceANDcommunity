import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Groups } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CreatecomunitygroupService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService
  ) {}
  async createCommunityGroup(group:Groups,token:string): Promise<Groups | string>{
    const decodedToken = this.jwtService.verify(token) as {
        userid: string;
        username: string;
      };
    group.User_ID = Number(decodedToken.userid);
    
    return this.prismaService.createCommunityGroup(group);
  }
}
