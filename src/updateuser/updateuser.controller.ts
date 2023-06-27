import { Controller, Post, Body } from '@nestjs/common';
import { UpdateuserService } from './updateuser.service';
import { EqualUser } from '@prisma/client';

@Controller('updateuser')
export class UpdateuserController {
    constructor(private readonly userService: UpdateuserService) {}

    @Post()
    async updateuser(@Body() updateuser: EqualUser): Promise<EqualUser | string> {
      return this.userService.updateuser(updateuser);
    }

}
