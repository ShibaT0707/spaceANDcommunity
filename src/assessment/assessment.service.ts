import { Injectable } from '@nestjs/common';
import { Assessment } from '@prisma/client';

import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AssessmentService {
    constructor(
        private prismaService: PrismaService,
        private jwtService: JwtService
      ) {}
    async assessment(assessment: Assessment, token: string): Promise<Assessment | string> {
        
        const decodedToken = this.jwtService.verify(token) as {
          userid: string;
          username: string;
        };
        
        const userid = Number(decodedToken.userid);
        assessment.User_ID = userid;
    
    
          return this.prismaService.assessmentcreate(assessment);
        
        };
        
      }
    
    


