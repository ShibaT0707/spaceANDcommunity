import { Controller,Post,Body} from '@nestjs/common';
import { SexuserService } from './sexuser.service';
import { Sex } from '@prisma/client';

@Controller('sexuser')
export class SexuserController {
    constructor(private readonly sexuserService: SexuserService) {}
    @Post()
    async createUser(@Body() sex: Sex, @Body('token') token: string): Promise<Sex | string> {
      return this.sexuserService.sexCreateUser(sex,token);
    }

}
