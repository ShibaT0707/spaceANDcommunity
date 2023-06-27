import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { Matching } from '@prisma/client';

@Injectable()
export class LikeuserService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService
  ) {}

  async likeuser(matching: Matching, token: string): Promise<Matching | string> {
    const decodedToken = this.jwtService.verify(token) as {
      userid: string;
      username: string;
    };
    
    const userid = Number(decodedToken.userid);


    const existingUser = await this.prismaService.prisma.matching.findFirst({
      where: { 
        AND: [
        {Matching_opponent_User_ID: userid},
        {Matching_User_ID:matching.Matching_opponent_User_ID}
        ]
      },

    });

    if (existingUser) {
      matching.Matching_Bool = 1;
      const matchingid = existingUser.Matching_ID;
      if ('token' in matching) {
        delete matching.token;
      }
      delete matching.Matching_User_ID;
      delete matching.Matching_opponent_User_ID;
      return this.prismaService.likeuserupdate(matchingid,matching); 
    }else{
      matching.Matching_User_ID = userid;
      matching.Matching_Bool = 0;
      if ('token' in matching) {
        delete matching.token;
      }
      return this.prismaService.likeusercreate(matching);
    
    };
    
  }
}
