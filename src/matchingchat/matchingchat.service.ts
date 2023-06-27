import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
//import { MatchingChatInput } from 'src/models/matchingchat.model';
import { Talk } from '@prisma/client';

@Injectable()
export class MatchingchatService {

    constructor(private prisma: PrismaService) {}

  async createtalk(Matching_ID:number,Matching_Talk_Content:string,User_ID:number): Promise<Talk | string> {
    // data をデータベースに保存する処理を実装する
    // 例: this.prisma.talk.create({ data });
    const createdMessage = await this.prisma.prisma.talk.create({ data:{Matching_ID,Matching_Talk_Content,User_ID} });
    console.log(createdMessage);
    console.log(this.prisma.prisma.talk.findFirst())
    return createdMessage;
  }

}
