import { Controller,Post,Body } from '@nestjs/common';
import { LikeuserService } from './likeuser.service';
import { Matching } from '@prisma/client';

@Controller('likeuser')
export class LikeuserController {
    constructor(private readonly likeuserService:LikeuserService) {}
    @Post()
    async likeuser(@Body() matching: Matching, @Body('token') token: string): Promise<Matching | string> {
      return this.likeuserService.likeuser(matching,token);
    }

}
