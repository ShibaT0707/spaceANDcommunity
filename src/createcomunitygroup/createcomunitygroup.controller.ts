import { Controller,Post,Body } from '@nestjs/common';
import { CreatecomunitygroupService } from './createcomunitygroup.service';
import { Groups } from '@prisma/client'

@Controller('createcomunitygroup')
export class CreatecomunitygroupController {
  constructor(private readonly createcomunitygroupService:CreatecomunitygroupService){}
    
  @Post()
  async createCommunityGroup(@Body() group:Groups,@Body('token') token:string): Promise<Groups | string>{
    group.Group_Create_Date = new Date()
    return this.createcomunitygroupService.createCommunityGroup(group,token);


  }


    
}
