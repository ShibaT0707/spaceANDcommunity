import { Controller,Post,Body } from '@nestjs/common';
import { CreatecomunityService } from './createcomunity.service';
import { Community } from '@prisma/client';

@Controller('createcomunity')
export class CreatecomunityController {
    constructor(private readonly createcomunityService:CreatecomunityService){}
    
    @Post()
    async createCommunityGroup(@Body() community:Community): Promise<Community | string>{
      return this.createcomunityService.createCommunity(community);
  
  
    }
}
