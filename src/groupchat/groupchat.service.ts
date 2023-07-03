import { Injectable } from '@nestjs/common';
import { Group_Talk } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GroupchatService {

    constructor(private prisma: PrismaService) {}

    async creategrouptalk(Group_Talk_Contet:string,User_ID:number,Group_ID:number): Promise<Group_Talk | string> {

      const Best_Answer_Bool = 0;
      const createdMessage = await this.prisma.prisma.group_Talk.create({ data:{Group_Talk_Contet,User_ID,Best_Answer_Bool,Group_ID} });

      return createdMessage;
      
    }
  
}
