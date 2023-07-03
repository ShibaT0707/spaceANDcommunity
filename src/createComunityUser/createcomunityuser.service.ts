import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Community_User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class CreatecomunityuserService {
    constructor(
      private prismaService: PrismaService,
      private jwtService:JwtService

    ){}

    async createComunityUser(CommunityUser:Community_User,token:string): Promise<Community_User | string>{
        const decodedToken = this.jwtService.verify(token) as {
            userid: string;
            username: string;
          };
          CommunityUser.User_ID = Number(decodedToken.userid);

          return this.prismaService.createComunityUser(CommunityUser);
          
    }
}
