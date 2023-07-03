import { Injectable } from '@nestjs/common';
import { Community } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CreatecomunityService {
    constructor(
        private prismaService: PrismaService
      ) {}
      async createCommunity(community:Community): Promise<Community | string>{

        return this.prismaService.createCommunity(community);
      }
    }
    
