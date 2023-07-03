import { Controller,Post, Body } from '@nestjs/common';
import { PostspaceService } from './postspace.service';
import { Space } from '@prisma/client';

@Controller('postspace')
export class PostspaceController {
 constructor (private readonly postspaceService:PostspaceService){}
 
 @Post()
 async postSpace(@Body() space: Space,@Body('token') token: string):Promise<Space | string>{
    return this.postspaceService.postSpace(space,token);
 }

}
