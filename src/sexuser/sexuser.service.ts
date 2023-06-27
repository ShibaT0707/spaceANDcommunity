import { Injectable } from '@nestjs/common';
import { Sex } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';





@Injectable()
export class SexuserService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService
  ) {}

  async sexCreateUser(sex: Sex,token:string): Promise<Sex | string> {
    console.log(token)
    const decodedToken = this.jwtService.verify(token) as {
      userid: string;
      username: string;
    };
    
    const userid = Number(decodedToken.userid);
    console.log(userid)

    const existingUser = await this.prismaService.prisma.sex.findFirst({
      where: { User_ID: userid },
    });

    if (existingUser) {
      return "sexの再登録";
    }
    
    this.prismaService.sexCreateUser(sex)

    return sex;
  }
}
