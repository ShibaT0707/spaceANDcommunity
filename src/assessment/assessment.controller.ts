import { Controller,Post,Body, } from '@nestjs/common';
import { AssessmentService } from './assessment.service';
import { Assessment } from '@prisma/client';

@Controller('assessment')
export class AssessmentController {
    constructor(private readonly assessmentService:AssessmentService) {} 

    @Post()
    async assessment(@Body() Assessment:Assessment, @Body('token') token: string): Promise<Assessment | string> {
      return this.assessmentService.assessment(Assessment,token);
    }
}
