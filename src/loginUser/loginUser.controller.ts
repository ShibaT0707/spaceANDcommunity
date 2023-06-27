import { Injectable, Controller, Post, Body} from '@nestjs/common';
import { LoginUserService } from './LoginUser.service';


@Controller('login')
@Injectable()
export class LoginUserController {
  constructor(private readonly loginService: LoginUserService) {}

  @Post()
  async login(@Body('mail') getmail: string, @Body('password') getpassword: string) {
    return this.loginService.login(getmail, getpassword);
  }

}
