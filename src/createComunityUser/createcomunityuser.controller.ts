import { Controller,Post,Body } from '@nestjs/common';
import { CreatecomunityuserService } from './createcomunityuser.service';
import { Community_User } from '@prisma/client';

@Controller('createcomunityuser')
export class CreatecomunityuserController {

    constructor(private readonly createcomunityuserService : CreatecomunityuserService ){}

    @Post()
    async createComunityUser(@Body() CommunityUser : Community_User,@Body('token') token:string):Promise<Community_User | string>{
        return this.createcomunityuserService.createComunityUser(CommunityUser,token);

    }
}
