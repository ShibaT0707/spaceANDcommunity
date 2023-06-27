import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class LoginUserService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
    ) {}

  async login(getmail:string, getpassword: string){
    const user = await this.prismaService.prisma.equalUser.findFirst({ where: { Mail:getmail } });
    if (!user) {
      return "アカウントないよ"; 
    }

    const passwordMatched = await bcrypt.compare(getpassword, user.Pass);
    if (!passwordMatched) {
      return "パスワード違うよ"; 
    }

    const payload = {userid: user.User_ID, username:user.Name};
    const token = await this.jwtService.signAsync(payload);


  
 
    return {
     token
    }
  }
}
