import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Tweet } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TweetService {
  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService
  ){}
    
  async postTweet(tweet:Tweet,token:string): Promise<Tweet | string>{
    const decodedToken = this.jwtService.verify(token) as {
        userid: string;
        username: string;
      };
      tweet.User_ID = Number(decodedToken.userid);
      return this.prismaService.postTweet(tweet);
  }
}
