import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Space } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostspaceService {
  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService
  ){}
  async postSpace(space:Space,token:string): Promise<Space | string>{
    const decodedToken = this.jwtService.verify(token) as {
        userid: string;
        username: string;
      };
      space.User_ID = Number(decodedToken.userid);
    return this.prismaService.postSpace(space);
  }
}
